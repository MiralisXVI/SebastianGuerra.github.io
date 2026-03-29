<template>
  <v-card 
    class="h-100" 
    @mouseenter="hover = true" 
    @mouseleave="hover = false" 
    :elevation="hover ? 8 : 2"
  >
    <!-- Image -->
    <v-img
      :src="product.image || 'https://via.placeholder.com/200'"
      :alt="product.title || 'Producto'"
      height="200"
      cover
    ></v-img>

    <!-- Title -->
    <v-card-title class="text-truncate">
      {{ product.title || 'Sin nombre' }}
    </v-card-title>
    
    <!-- Content -->
    <v-card-text>
      <p class="text-caption">{{ truncateDescription(product.description, 60) }}</p>
      
      <div class="mt-3" v-if="product.rating && product.rating.rate">
        <div class="d-flex align-center mb-2">
          <v-icon color="amber" size="x-small" class="mr-1">mdi-star</v-icon>
          <span class="text-body2 font-weight-bold">{{ product.rating.rate }}</span>
          <span class="text-caption text-grey ml-2">({{ product.rating.count }} reseñas)</span>
        </div>
      </div>
    </v-card-text>

    <!-- Price & Actions -->
    <v-card-actions>
      <span class="font-weight-bold primary--text">
        ${{ Math.round(product.price || 0).toLocaleString('es-CL', { maximumFractionDigits: 0 }) }} CLP
      </span>
      <v-spacer></v-spacer>
      
      <v-btn 
        icon 
        @click.stop="handleToggleFavorite"
        :color="isFavorite ? 'error' : 'grey'"
        size="small"
      >
        <v-icon>{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
      </v-btn>
      
      <v-btn 
        color="primary"
        size="small"
        @click="handleViewDetails"
      >
        Ver
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    },
    isFavorite: Boolean
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    truncateDescription(text, length = 100) {
      if (!text) return 'Sin descripción disponible'
      return text.length > length ? text.substring(0, length) + '...' : text
    },
    handleToggleFavorite() {
      this.$emit('toggle-favorite', this.product.id)
    },
    handleViewDetails() {
      this.$emit('view-details', this.product.id)
    }
  },
  mounted() {
    console.log(`🎴 ProductCard mounted - Producto ${this.product?.id || 'unknown'}:`, this.product)
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.font-weight-bold {
  font-weight: 700;
}

.primary--text {
  color: #1976d2;
}

.mt-3 {
  margin-top: 12px;
}

.d-flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.mr-1 {
  margin-right: 4px;
}

.ml-2 {
  margin-left: 8px;
}

.text-body2 {
  font-size: 0.875rem;
}

.text-grey {
  color: #757575;
}
</style>

<template>
  <v-container class="py-8">
    <!-- Back button -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-btn
          icon="mdi-arrow-left"
          variant="text"
          @click="goBack"
          class="pl-0"
        >
          Volver
        </v-btn>
      </v-col>
    </v-row>

    <!-- Product details -->
    <v-row v-if="product" class="mt-4">
      <!-- Product image -->
      <v-col cols="12" md="6">
        <v-card class="elevation-0">
          <v-img
            :src="product.image"
            :alt="product.title"
            aspect-ratio="1"
            cover
            class="bg-grey-lighten-2"
          />
        </v-card>
      </v-col>

      <!-- Product info -->
      <v-col cols="12" md="6">
        <v-card-title class="text-h5 mb-2">
          {{ product.title }}
        </v-card-title>

        <!-- Category -->
        <v-chip
          :label="getCategoryName(product.category)"
          size="small"
          class="mb-4"
          variant="outlined"
        />

        <!-- Rating -->
        <div class="mb-4">
          <div class="d-flex align-center mb-2">
            <v-rating
              :model-value="product.rating?.rate || 0"
              readonly
              color="amber"
              size="small"
            />
            <span class="ml-2 text-grey">
              {{ product.rating?.rate?.toFixed(1) }} ({{ product.rating?.count }} opiniones)
            </span>
          </div>
        </div>

        <!-- Price -->
        <div class="mb-6">
          <div class="text-h4 font-weight-bold text-primary">
            {{ formatPrice(product) }}
          </div>
        </div>

        <!-- Description -->
        <div class="mb-6">
          <h3 class="text-subtitle2 mb-2">Descripción</h3>
          <p class="text-body2 text-grey-darken-1">
            {{ product.description }}
          </p>
        </div>

        <!-- Actions -->
        <v-row class="mt-6">
          <v-col cols="12" sm="6">
            <v-btn
              :icon="isFavorite ? 'mdi-heart' : 'mdi-heart-outline'"
              :color="isFavorite ? 'error' : undefined"
              @click="toggleFavorite"
              block
              size="large"
            >
              {{ isFavorite ? 'Favorito' : 'Agregar a favoritos' }}
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn
              color="primary"
              @click="addToCart"
              block
              size="large"
            >
              Agregar al carrito
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Loading state -->
    <v-row v-else-if="isLoading" class="mt-8">
      <v-col cols="12" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        />
        <p class="mt-4">Cargando producto...</p>
      </v-col>
    </v-row>

    <!-- Error state -->
    <v-row v-else class="mt-8">
      <v-col cols="12">
        <v-alert
          type="error"
          title="Producto no encontrado"
          text="No se pudo cargar el producto. Intenta volver a la lista."
          closable
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'DetalleProductoView',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    // Get product ID from route params
    const productId = parseInt(route.params.id)

    // Get product from store
    const product = computed(() => {
      const allProducts = store.getters['products/allProducts']
      return allProducts.find(p => p.id === productId)
    })

    // Check if product is in favorites
    const isFavorite = computed(() => {
      const favorites = store.state.favorites?.items || []
      return favorites.some(fav => fav.id === productId)
    })

    // Get loading state
    const isLoading = computed(() => {
      return store.getters['products/isLoading']
    })

    // Category name translation
    const getCategoryName = (category) => {
      const categoryMap = {
        'electronics': 'Electrónica',
        'jewelery': 'Joyas',
        "men's clothing": 'Ropa Hombre',
        "women's clothing": 'Ropa Mujer'
      }
      return categoryMap[category] || category
    }

    // Format price in CLP redondeado entero
    const formatPrice = (product) => {
      const clp = Math.round(product.price || 0)
      return `$${clp.toLocaleString('es-CL', { maximumFractionDigits: 0 })} CLP`
    }

    // Toggle favorite
    const toggleFavorite = () => {
      if (isFavorite.value) {
        store.commit('favorites/REMOVE_FAVORITE', productId)
      } else {
        store.commit('favorites/ADD_FAVORITE', product.value)
      }
    }

    // Add to cart (placeholder)
    const addToCart = () => {
      alert('Producto agregado al carrito')
    }

    // Go back
    const goBack = () => {
      router.push('/productos')
    }

    return {
      product,
      isFavorite,
      isLoading,
      getCategoryName,
      formatPrice,
      toggleFavorite,
      addToCart,
      goBack
    }
  }
}
</script>

<style scoped>
.bg-grey-lighten-2 {
  background-color: #f5f5f5;
}
</style>

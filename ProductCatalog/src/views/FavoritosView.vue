<template>
  <v-container fluid class="py-8">
    <v-row class="mb-6">
      <v-col cols="12">
        <h1 class="text-h3">❤️ Mis Productos Favoritos</h1>
        <p class="text-body1 text-grey mt-2">{{ favoriteCount }} producto(s) guardado(s)</p>
      </v-col>
    </v-row>

    <!-- Empty State -->
    <v-row v-if="favoriteCount === 0" justify="center" class="my-8">
      <v-col cols="12" sm="8" class="text-center">
        <v-icon size="120" color="grey">mdi-heart-outline</v-icon>
        <p class="text-h5 mt-4 text-grey">Aún no tienes favoritos</p>
        <p class="text-body1 text-grey">Agrega algunos productos a tu lista de favoritos</p>
        <v-btn color="primary" to="/productos" class="mt-4">
          🛍️ Ir al Catálogo
        </v-btn>
      </v-col>
    </v-row>

    <!-- Favoritos Grid -->
    <v-row v-else>
      <v-col 
        v-for="product in favoriteProducts" 
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <product-card 
          :product="product"
          is-favorite
          @toggle-favorite="toggleFavorite"
          @view-details="viewDetails"
        ></product-card>
      </v-col>
    </v-row>

    <!-- Actions -->
    <v-row v-if="favoriteCount > 0" class="mt-6">
      <v-col cols="12" class="text-center">
        <v-btn 
          @click="clearAllFavorites"
          color="error"
          variant="text"
        >
          🗑️ Eliminar Todos los Favoritos
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'FavoritosView',
  components: {
    ProductCard
  },
  computed: {
    ...mapState('favorites', {
      favoriteIds: 'favoriteIds'
    }),
    ...mapGetters('favorites', [
      'favoritoCount',
      'favoriteProducts'
    ]),
    favoriteCount() {
      return this.favoritoCount
    }
  },
  methods: {
    ...mapActions('favorites', ['toggleFavorite']),
    
    viewDetails(productId) {
      this.$router.push({ name: 'DetalleProducto', params: { id: productId } })
    },
    
    clearAllFavorites() {
      if (confirm('¿Estás seguro de que deseas eliminar todos los favoritos?')) {
        const ids = [...this.favoriteIds]
        ids.forEach(id => {
          this.toggleFavorite(id)
        })
      }
    }
  },
  mounted() {
    console.log('🚀 FavoritosView.vue mounted - Mostrando lista de favoritos')
    console.log(`Total de favoritos: ${this.favoriteCount}`)
  }
}
</script>

<style scoped>
.text-grey {
  color: #757575;
}

.text-h3 {
  font-size: 2.5rem;
}

.text-body1 {
  font-size: 1rem;
}

.mt-2 {
  margin-top: 8px;
}

.mt-4 {
  margin-top: 16px;
}

.mt-6 {
  margin-top: 24px;
}

.mb-6 {
  margin-bottom: 24px;
}
</style>

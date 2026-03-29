<template>
  <v-container fluid class="py-8">
    <v-row class="mb-6">
      <v-col cols="12">
        <h1 class="text-h3">🛍️ Catálogo</h1>
      </v-col>
    </v-row>

    <!-- Debug Info -->
    <v-row class="mb-4" v-if="true">
      <v-col cols="12">
        <v-card class="elevation-1 bg-grey-lighten-4">
          <v-card-text class="text-caption">
            <span>📊 Estado: isLoading={{ isLoading }}, hasError={{ hasError }}, totalProducts={{ allProducts.length }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filtros -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="4">
        <v-text-field 
          v-model="searchTerm"
          label="🔍 Buscar..."
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="📂 Categoría"
          clearable
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-btn 
          v-if="activeFiltersCount > 0"
          @click="resetFilters" 
          color="secondary"
          block
        >
          ✕ Limpiar ({{ activeFiltersCount }})
        </v-btn>
      </v-col>
    </v-row>

    <!-- Loading -->
    <v-row v-if="isLoading" justify="center" class="my-8">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <p class="mt-4">Cargando productos...</p>
      </v-col>
    </v-row>

    <!-- Error -->
    <v-row v-else-if="hasError" class="my-4">
      <v-col cols="12">
        <v-alert type="error">
          ❌ Error: {{ errorMessage }}
        </v-alert>
      </v-col>
    </v-row>

    <!-- Empty (no products at all) -->
    <v-row v-else-if="allProducts.length === 0" justify="center" class="my-8">
      <v-col cols="12" class="text-center">
        <p class="text-h6">No hay productos disponibles</p>
        <p class="text-body2">Por favor, intenta cargar la página de nuevo</p>
        <v-btn @click="reloadProducts" color="primary" class="mt-4">
          🔄 Reintentar
        </v-btn>
      </v-col>
    </v-row>

    <!-- No results after filter -->
    <v-row v-else-if="filteredProducts.length === 0" justify="center" class="my-8">
      <v-col cols="12" class="text-center">
        <p class="text-h6">No hay productos que coincidan con los filtros</p>
      </v-col>
    </v-row>

    <!-- Products Grid -->
    <v-row v-else>
      <v-col 
        v-for="product in filteredProducts" 
        :key="product.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <product-card 
          :product="product"
          :is-favorite="isFavorite(product.id)"
          @toggle-favorite="toggleFavorite"
          @view-details="handleViewDetails"
        ></product-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ListaProductosView',
  components: { ProductCard },
  data() {
    return {
      searchTerm: '',
      selectedCategory: null
    }
  },
  computed: {
    ...mapGetters('products', [
      'allProducts', 'isLoading', 'hasError', 'errorMessage', 'categories'
    ]),
    ...mapGetters('filters', ['activeFiltersCount']),
    ...mapGetters('favorites', ['isFavorite']),
    
    filteredProducts() {
      let filtered = this.allProducts
      
      if (this.selectedCategory) {
        filtered = filtered.filter(p => (p.categoryDisplay || p.category) === this.selectedCategory)
      }
      
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase()
        filtered = filtered.filter(p =>
          p.title.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
        )
      }
      
      return filtered
    }
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('filters', ['resetFilters']),
    ...mapActions('favorites', ['toggleFavorite']),
    
    handleViewDetails(productId) {
      this.$router.push({ name: 'DetalleProducto', params: { id: productId } })
    },
    
    async reloadProducts() {
      console.log('🔄 Reiniciando carga de productos...')
      try {
        await this.fetchProducts()
        console.log('✅ Productos recargados')
      } catch (error) {
        console.error('❌ Error recargando productos:', error)
      }
    }
  },
  async mounted() {
    console.log('🚀 ListaProductosView mounted')
    console.log('📊 Estado inicial:')
    console.log('   - allProducts:', this.allProducts.length)
    console.log('   - isLoading:', this.isLoading)
    console.log('   - hasError:', this.hasError)
    
    if (this.allProducts.length === 0) {
      console.log('📥 Iniciando carga de productos...')
      try {
        await this.fetchProducts()
        console.log('✅ fetchProducts completado')
        console.log('   - allProducts después:', this.allProducts.length)
      } catch (error) {
        console.error('❌ Error en fetchProducts:', error)
      }
    } else {
      console.log('📦 Productos ya estaban en el estado')
    }
  }
}
</script>

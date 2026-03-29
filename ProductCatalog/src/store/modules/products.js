import productService from '../../services/productService'

export default {
  namespaced: true,
  
  state: {
    products: [],
    loading: false,
    error: null,
    totalProducts: 0
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
      state.totalProducts = products.length
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    CLEAR_ERROR(state) {
      state.error = null
    }
  },

  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      
      try {
        const products = await productService.getAllProducts()
        commit('SET_PRODUCTS', products)
        commit('SET_LOADING', false)
        console.log(`✅ Productos cargados: ${products.length}`)
      } catch (error) {
        console.error('❌ Error al cargar productos:', error)
        commit('SET_ERROR', error.message)
        commit('SET_LOADING', false)
      }
    }
  },

  getters: {
    allProducts: (state) => state.products,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
    errorMessage: (state) => state.error,
    totalCount: (state) => state.totalProducts,
    
    // Retorna función que filtra por categoría
    productsByCategory: (state) => (category) => {
      if (!category) return state.products
      return state.products.filter(p => p.category === category)
    },
    
    // Categorías únicas con traducciones
    categories: (state) => {
      const cats = new Set(state.products.map(p => p.categoryDisplay || p.category))
      return Array.from(cats).sort()
    },
    
    // Búsqueda por término
    searchProducts: (state) => (term) => {
      if (!term) return state.products
      const lowTerm = term.toLowerCase()
      return state.products.filter(p => 
        p.title.toLowerCase().includes(lowTerm) ||
        p.description.toLowerCase().includes(lowTerm)
      )
    },
    
    // Productos por rango de precio
    productsByPriceRange: (state) => (min, max) => {
      return state.products.filter(p => p.price >= min && p.price <= max)
    }
  }
}

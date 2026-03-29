export default {
  namespaced: true,

  state: {
    selectedCategory: null,
    searchTerm: '',
    sortBy: 'name' // 'name', 'price-asc', 'price-desc', 'rating'
  },

  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category
    },
    SET_SEARCH_TERM(state, term) {
      state.searchTerm = term
    },
    SET_SORT_BY(state, sortBy) {
      state.sortBy = sortBy
    },
    RESET_FILTERS(state) {
      state.selectedCategory = null
      state.searchTerm = ''
      state.sortBy = 'name'
    }
  },

  actions: {
    updateCategory({ commit }, category) {
      commit('SET_CATEGORY', category)
    },
    updateSearchTerm({ commit }, term) {
      commit('SET_SEARCH_TERM', term)
    },
    updateSortBy({ commit }, sortBy) {
      commit('SET_SORT_BY', sortBy)
    },
    resetFilters({ commit }) {
      commit('RESET_FILTERS')
    }
  },

  getters: {
    selectedCategory: (state) => state.selectedCategory,
    searchTerm: (state) => state.searchTerm,
    sortBy: (state) => state.sortBy,
    activeFiltersCount: (state) => {
      let count = 0
      if (state.selectedCategory) count++
      if (state.searchTerm) count++
      return count
    }
  }
}

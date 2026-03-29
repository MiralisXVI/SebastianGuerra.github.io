export default {
  namespaced: true,

  state: {
    favoriteIds: []
  },

  mutations: {
    ADD_FAVORITE(state, productId) {
      if (!state.favoriteIds.includes(productId)) {
        state.favoriteIds.push(productId)
      }
    },
    REMOVE_FAVORITE(state, productId) {
      state.favoriteIds = state.favoriteIds.filter(id => id !== productId)
    },
    TOGGLE_FAVORITE(state, productId) {
      if (state.favoriteIds.includes(productId)) {
        state.favoriteIds = state.favoriteIds.filter(id => id !== productId)
      } else {
        state.favoriteIds.push(productId)
      }
    },
    SET_FAVORITES(state, favoriteIds) {
      state.favoriteIds = favoriteIds
    }
  },

  actions: {
    toggleFavorite({ commit }, productId) {
      commit('TOGGLE_FAVORITE', productId)
    },
    addFavorite({ commit }, productId) {
      commit('ADD_FAVORITE', productId)
    },
    removeFavorite({ commit }, productId) {
      commit('REMOVE_FAVORITE', productId)
    }
  },

  getters: {
    favoriteIds: (state) => state.favoriteIds,
    favoritoCount: (state) => state.favoriteIds.length,
    isFavorite: (state) => (productId) => {
      return state.favoriteIds.includes(productId)
    },
    favoriteProducts: (state, getters, rootState) => {
      return rootState.products.products.filter(p => 
        state.favoriteIds.includes(p.id)
      )
    }
  }
}

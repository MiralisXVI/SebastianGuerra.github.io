import { createStore } from 'vuex'
import productsModule from './modules/products.js'
import filtersModule from './modules/filters.js'
import favoritesModule from './modules/favorites.js'

export default createStore({
  modules: {
    products: productsModule,
    filters: filtersModule,
    favorites: favoritesModule
  }
})

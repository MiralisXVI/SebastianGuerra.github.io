import { createStore } from 'vuex'
import productsModule from '@/store/modules/products'

describe('Products Store Module', () => {
  let store

  beforeEach(() => {
    store = createStore({
      modules: {
        products: productsModule
      }
    })
  })

  describe('Mutations', () => {
    it('SET_PRODUCTS updates products state', () => {
      const products = [
        { id: 1, title: 'Product 1', price: 10, category: 'test' },
        { id: 2, title: 'Product 2', price: 20, category: 'test' }
      ]

      store.commit('products/SET_PRODUCTS', products)

      expect(store.state.products.products).toEqual(products)
      expect(store.state.products.totalProducts).toBe(2)
    })

    it('SET_LOADING updates loading state', () => {
      store.commit('products/SET_LOADING', true)
      expect(store.state.products.loading).toBe(true)

      store.commit('products/SET_LOADING', false)
      expect(store.state.products.loading).toBe(false)
    })

    it('SET_ERROR updates error state', () => {
      const errorMsg = 'Test error'
      store.commit('products/SET_ERROR', errorMsg)
      expect(store.state.products.error).toBe(errorMsg)
    })

    it('CLEAR_ERROR clears error state', () => {
      store.commit('products/SET_ERROR', 'Test error')
      store.commit('products/CLEAR_ERROR')
      expect(store.state.products.error).toBeNull()
    })
  })

  describe('Getters', () => {
    beforeEach(() => {
      const products = [
        { id: 1, title: 'Product 1', price: 10, category: 'electronics', rating: 4.5 },
        { id: 2, title: 'Product 2', price: 20, category: 'books', rating: 3.5 }
      ]
      store.commit('products/SET_PRODUCTS', products)
    })

    it('allProducts returns all products', () => {
      const products = store.getters['products/allProducts']
      expect(products.length).toBe(2)
      expect(products[0].id).toBe(1)
    })

    it('totalCount returns product count', () => {
      expect(store.getters['products/totalCount']).toBe(2)
    })

    it('categories returns unique categories', () => {
      const categories = store.getters['products/categories']
      expect(categories).toContain('electronics')
      expect(categories).toContain('books')
    })

    it('productsByCategory filters products by category', () => {
      const filtered = store.getters['products/productsByCategory']('electronics')
      expect(filtered.length).toBe(1)
      expect(filtered[0].id).toBe(1)
    })

    it('searchProducts filters by search term', () => {
      const filtered = store.getters['products/searchProducts']('Product 1')
      expect(filtered.length).toBe(1)
      expect(filtered[0].title).toBe('Product 1')
    })
  })

  describe('Initial State', () => {
    it('initializes with empty products array', () => {
      const newStore = createStore({
        modules: {
          products: productsModule
        }
      })
      expect(newStore.state.products.products).toEqual([])
      expect(newStore.state.products.loading).toBe(false)
      expect(newStore.state.products.error).toBeNull()
    })
  })
})

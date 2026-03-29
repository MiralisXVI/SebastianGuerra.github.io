import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ListaProductosView from '../views/ListaProductosView.vue'
import DetalleProductoView from '../views/DetalleProductoView.vue'
import FavoritosView from '../views/FavoritosView.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: InicioView,
    meta: {
      title: 'ProductCatalog - Inicio'
    }
  },
  {
    path: '/productos',
    name: 'ListaProductos',
    component: ListaProductosView,
    meta: {
      title: 'ProductCatalog - Catálogo de Productos'
    }
  },
  {
    path: '/productos/:id',
    name: 'DetalleProducto',
    component: DetalleProductoView,
    meta: {
      title: 'ProductCatalog - Detalles del Producto'
    }
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: FavoritosView,
    meta: {
      title: 'ProductCatalog - Mis Favoritos'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guard to update page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'ProductCatalog'
  next()
})

export default router

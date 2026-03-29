import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ListaLibrosView from '../views/ListaLibrosView.vue'
import DetalleLibroView from '../views/DetalleLibroView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView,
    meta: { titulo: 'Inicio' }
  },
  {
    path: '/libros',
    name: 'libros',
    component: ListaLibrosView,
    meta: { titulo: 'Lista de Libros' }
  },
  {
    path: '/libros/:id',
    name: 'detalle-libro',
    component: DetalleLibroView,
    meta: { titulo: 'Detalle del Libro' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `BookList SPA - ${to.meta.titulo || 'Página'}`
  next()
})

export default router

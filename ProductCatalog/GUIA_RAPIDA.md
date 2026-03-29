# 🚀 Guía Rápida - ProductCatalog (5 minutos)

## Instalación

```bash
cd ProductCatalog
npm install
npm run dev
```
✅ Abre automáticamente en http://localhost:3000

---

## Estructura Rápida

```
src/
├── App.vue              👈 Navbar + Footer (Vuetify)
├── components/
│   └── ProductCard.vue  👈 Tarjeta reutilizable
├── views/
│   ├── InicioView.vue           👈 Página inicio
│   ├── ListaProductosView.vue   👈 Catálogo (con filtros)
│   ├── DetalleProductoView.vue  👈 Detalle dinámico
│   └── FavoritosView.vue        👈 Mis favoritos
├── store/
│   └── modules/
│       ├── products.js  👈 Fetch API + estado
│       ├── filters.js   👈 Categoría + búsqueda
│       └── favorites.js 👈 Lista favoritos
└── services/
    └── productService.js 👈 API cliente
```

---

## 5 Lecciones en Código

### Lección 1: Componentes & Lifecycle
```vue
mounted() {
  console.log('🚀 Componente montado')
  // Aquí hacer calls API
}
```
**Archivo**: [src/components/ProductCard.vue](src/components/ProductCard.vue)

### Lección 2: API REST
```javascript
// src/services/productService.js
async getAllProducts() {
  const response = await fetch('https://fakestoreapi.com/products')
  return await response.json()
}
```
**Archivo**: [src/store/modules/products.js](src/store/modules/products.js) → action `fetchProducts`

### Lección 3: Vuex Store
```javascript
// store/modules/products.js
state: { products: [], loading: false }
mutations: { SET_PRODUCTS(state, data) { state.products = data } }
actions: { async fetchProducts({ commit }) { ... } }
getters: { allProducts: state => state.products }
```
**Uso en componente:**
```javascript
computed: { ...mapGetters('products', ['allProducts']) }
methods: { ...mapActions('products', ['fetchProducts']) }
```
**Archivo**: [src/views/ListaProductosView.vue](src/views/ListaProductosView.vue)

### Lección 4: Tests
```bash
npm run test              # Jest unitarios
npm run cypress:run       # Cypress E2E
```
**Archivos**: `tests/`, `cypress/e2e/`

### Lección 5: Vuetify UI
```vue
<v-app>
  <v-app-bar color="primary">
    <v-toolbar-title>ProductCatalog</v-toolbar-title>
  </v-app-bar>
  <v-main><router-view></router-view></v-main>
</v-app>
```
**Archivo**: [src/App.vue](src/App.vue)

---

## Scripts Principales

```bash
npm run dev             # Servidor dev (HMR)
npm run build           # Build producción
npm run test            # Tests Jest
npm run cypress         # Cypress interactivo
npm run cypress:run     # Cypress headless
```

---

## Rutas Disponibles

| URL | Vista |
|-----|-------|
| `/` | Inicio |
| `/productos` | Catálogo con filtros |
| `/productos/:id` | Detalles dinámicos |
| `/favoritos` | Mis favoritos |

---

## Features Clave

✅ Catálogo dinámico desde API  
✅ Filtro por categoría  
✅ Búsqueda por texto  
✅ Detalles individuales  
✅ Sistema de favoritos  
✅ Estado centralizado (Vuex)  
✅ UI profesional (Vuetify)  
✅ Responsive (mobile, tablet, desktop)  
✅ Tema claro/oscuro  
✅ Tests unitarios + E2E  

---

## Flujo de Datos

```
Usuario → ListaProductosView
        → dispatch fetchProducts
        → store action → API
        → commit SET_PRODUCTS
        → state.products actualiza
        → computed re-calcula
        → template re-renderiza
        → veView ve productos
```

---

## Cambiar API

En `src/services/productService.js`:
```javascript
this.baseURL = 'TU_API_URL'
```

En `src/store/modules/products.js`:
```javascript
const response = await fetch(TU_API_ENDPOINT)
```

---

## Customizar Colores

En `src/main.js`:
```javascript
theme: {
  light: {
    colors: {
      primary: '#TU_COLOR'    // Cambiar aquí
    }
  }
}
```

---

## ¿Problemas?

### Si no abre en localhost:3000
```bash
npm run dev -- --port 3001
```

### Si no carga productos
- ¿Servidor activo? → `npm run dev`
- ¿API correcta? → ver `productService.js`
- ¿Errores console? → F12 → Console

### Si tests fallan
```bash
npm install      # Reinstalar deps
npm run test
```

---

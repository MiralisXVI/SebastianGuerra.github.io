# ProductCatalog - E-commerce SPA 🛍️

**Aplicación Single Page Application (SPA) moderna para catálogo de productos de e-commerce**, desarrollada con **Vue 3**, **Vuex**, **Vue Router** y **Vuetify**.

## 📋 Descripción General

ProductCatalog es una solución escalable y robusta que permite a usuarios:
- ✅ Visualizar un catálogo dinámico de productos desde una API REST
- ✅ Filtrar y buscar productos por categoría o término
- ✅ Ver detalles individuales de cada producto con rutas dinámicas
- ✅ Mantener una lista personal de productos favoritos
- ✅ Interfaz responsive y profesional con tema claro/oscuro

### Características Técnicas Implementadas

| Lección | Característica | Estado |
|---------|----------------|--------|
| 1 | Componentes reutilizables y ciclo de vida (mounted) | ✅ |
| 2 | Consumo de datos desde API REST con Axios/Fetch | ✅ |
| 3 | Gestión centralizada de estado con Vuex | ✅ |
| 4 | Pruebas unitarias (Jest) y e2e (Cypress) | ✅ |
| 5 | Librería UI profesional (Vuetify) + Responsive | ✅ |

---

## 🚀 Instalación y Uso

### Requisitos Previos
- **Node.js** v14+ (recomendado v16+)
- **npm** v6+ o **yarn**
- Git

### Paso 1: Clonar/Descargar el Proyecto

```bash
cd ProductCatalog
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

Este comando instalará:
- **Vue 3** - Framework progresivo
- **Vue Router 4** - Enrutamiento SPA
- **Vuex 4** - Gestión centralizada de estado
- **Axios** - Cliente HTTP
- **Vuetify 3** - Librería UI Material Design
- **Herramientas de testing** (Jest, Cypress, Vue Test Utils)

### Paso 3: Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### Paso 4: Construir para Producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar.

### Paso 5: Ver Vista Previa de Producción

```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```
ProductCatalog/
├── public/
│   └── index.html              # Página HTML principal
├── src/
│   ├── main.js                 # Inicialización (Vue + Router + Vuex + Vuetify)
│   ├── App.vue                 # Componente raíz (Navbar + Router View + Footer)
│   ├── components/
│   │   └── ProductCard.vue     # Componente reutilizable de tarjeta
│   ├── views/
│   │   ├── InicioView.vue      # Página de bienvenida (Lección 1)
│   │   ├── ListaProductosView.vue  # Catálogo con filtros (Lecciones 2-3)
│   │   ├── DetalleProductoView.vue # Detalles dinámicos (Lección 5)
│   │   └── FavoritosView.vue   # Lista de favoritos
│   ├── router/
│   │   └── index.js            # Configuración de rutas
│   ├── store/
│   │   ├── index.js            # Configuración Vuex
│   │   └── modules/
│   │       ├── products.js     # Módulo productos (fetch, mutations, getters)
│   │       ├── filters.js      # Módulo filtros (categoría, búsqueda)
│   │       └── favorites.js    # Módulo favoritos
│   └── services/
│       └── productService.js   # Cliente API wrapper
├── tests/
│   ├── ProductCard.spec.js     # Tests unitarios de componente
│   └── productStore.spec.js    # Tests unitarios de store
├── cypress/
│   └── e2e/
│       └── filterProducts.cy.js # Tests e2e
├── index.html                  # Página HTML principal
├── package.json                # Dependencias y scripts
├── vite.config.js              # Configuración build
├── .gitignore                  # Archivos ignorados por Git
└── README.md                   # Documentación (este archivo)
```

---

## 🎓 Lecciones Implementadas

### Lección 1: Componentes y Ciclo de Vida
**Objetivo:** Crear estructura base con componentes reutilizables

**Implementación:**
- ✅ `App.vue` - Componente raíz con navbar, router-view y footer
- ✅ `InicioView.vue` - Demostración de mounted() lifecycle hook
- ✅ `ProductCard.vue` - Componente presentacional que recibe props
- ✅ `main.js` - Inicialización de Vue app

**Código Ejemplo:**
```vue
<script>
export default {
  mounted() {
    console.log('🚀 Componente montado en el DOM')
  }
}
</script>
```

---

### Lección 2: Consumo de Datos desde API
**Objetivo:** Integrar datos dinámicos desde API REST

**Implementación:**
- ✅ `productService.js` - Wrapper de Axios para API fakestoreapi.com
- ✅ `ListaProductosView.vue` → call API en mounted()
- ✅ Estados: loading (spinner), error (alert), empty (no results)
- ✅ `ProductCard.vue` → renderiza datos dinámicamente

**Gestión de Estados:**
```
LOADING → API call en progreso (mostrar spinner)
  ↓
ERROR   → API falló (mostrar mensaje error)
  ↓
SUCCESS → Datos cargados (mostrar grid de productos)
```

**API Utilizada:**
- Base: `https://fakestoreapi.com`
- Endpoints:
  - `GET /products` - Lista todos los productos
  - `GET /products/:id` - Detalles de un producto
  - `GET /products/category/:cat` - Productos por categoría
  - `GET /products/categories` - Lista categorías

---

### Lección 3: Gestión de Estado con Vuex
**Objetivo:** Centralizar estado global y lógica de datos

**Arquitectura Vuex (4 módulos):**

#### Módulo `products`
```javascript
state: {
  products: [],        // Array de productos
  loading: false,      // Flag de carga
  error: null,         // Mensaje de error
}

actions: {
  fetchProducts()     // Async: llama API
}

mutations: {
  SET_PRODUCTS()      // Actualiza array
  SET_LOADING()       // Actualiza flag
  SET_ERROR()         // Actualiza error
}

getters: {
  allProducts         // Todos los productos
  categories()        // Categorías únicas
  productsByCategory()  // Filtra por categoría
  searchProducts()    // Busca por término
}
```

#### Módulo `filters`
```javascript
state: {
  selectedCategory: null,
  searchTerm: '',
  sortBy: 'name'      // 'name' | 'price-asc' | 'price-desc' | 'rating'
}

getters: {
  activeFiltersCount()  // Cuántos filtros activos
}
```

#### Módulo `favorites`
```javascript
state: {
  favoriteIds: []     // IDs de productos favoritos
}

mutations: {
  TOGGLE_FAVORITE()   // Agregar/remover favorito
  ADD_FAVORITE()
  REMOVE_FAVORITE()
}
```

**Patrón de Uso en Componentes:**
```vue
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('products', ['allProducts']),
    ...mapGetters('filters', ['selectedCategory'])
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('filters', ['updateCategory'])
  }
}
</script>
```

---

### Lección 4: Pruebas Automatizadas
**Objetivo:** Asegurar calidad con pruebas unitarias y e2e

#### Tests Unitarios (Jest + Vue Test Utils)

**Test 1: ProductCard.spec.js**
```javascript
✓ Renderiza producto con datos correctos
✓ Emite evento view-details al clickear botón
✓ Emite evento toggle-favorite al favorear
✓ Trunca descripciones largas
```

**Test 2: productStore.spec.js**
```javascript
✓ Mutation SET_PRODUCTS actualiza estado
✓ Getter allProducts retorna array completo
✓ Getter productsByCategory filtra correctamente
✓ Estado inicial está vacío
```

#### Tests E2E (Cypress)

**Test 1: filterProducts.cy.js**
```
Escenario: Usuario filtra productos por categoría
  1. Visita app
  2. Navega a catálogo
  3. Abre dropdown de categorías
  4. Selecciona una categoría
  5. ✓ Verifica que aparecen productos filtrados
```

**Test 2: Product Details**
```
Escenario: Usuario ve detalles de un producto
  1. Clickea "Ver Detalles"
  2. ✓ Verifica que URL es /productos/:id (dinámica)
  3. ✓ Verifica que muestra info completa
```

**Ejecución:**
```bash
npm run test              # Tests unitarios
npm run test:coverage     # Reporte de cobertura
npm run cypress           # Cypress interactive
npm run cypress:run       # Tests e2e headless
```

---

### Lección 5: Librerías UI y Diseño Profesional
**Objetivo:** Aplicar diseño visual profesional y responsivo

#### Vuetify Integration
```javascript
// main.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { colors: { primary: '#1976D2', ... } },
      dark: { colors: { primary: '#BB86FC', ... } }
    }
  }
})

app.use(vuetify)
```

#### Componentes Vuetify Utilizados

| Componente | Ubicación | Uso |
|-----------|-----------|-----|
| `v-app-bar` | App.vue | Navbar con ícono menu responsive |
| `v-navigation-drawer` | App.vue | Menú móvil |
| `v-container` | Todas las vistas | Layout contenedor |
| `v-row`, `v-col` | Todas las vistas | Grid responsive (12 columnas) |
| `v-card` | ProductCard.vue | Tarjeta de producto |
| `v-img` | ProductCard.vue | Imagen con skeleton loader |
| `v-text-field` | ListaProductosView | Input búsqueda |
| `v-select` | ListaProductosView | Dropdown categorías |
| `v-btn` | Todas las vistas | Botones estilizados |
| `v-chip` | ProductCard.vue | Badge de categoría |
| `v-progress-circular` | ListaProductosView | Spinner de carga |
| `v-alert` | ListaProductosView | Mensajes error |
| `v-footer` | App.vue | Pie de página |
| `v-icon` | Todas las vistas | Íconos Material Design |

#### Diseño Responsive
```
Desktop (≥960px):  4 columnas (xl: 1/3 ancho)
Tablet (600-960px): 2 columnas (md: 1/2 ancho)
Mobile (<600px):    1 columna (sm: ancho completo)
```

#### Tema Claro/Oscuro
```vue
<script>
toggleTheme() {
  this.isDark = !this.isDark
  this.$vuetify.theme.global.name = this.isDark ? 'dark' : 'light'
}
</script>
```

---

## 🔐 Arquitectura y Patrones

### Patrón MVP (Model-View-Presenter)

```
ProductCard.vue (View)
    ↓ props
    ├─ :product (objeto)
    ├─ :isFavorite (booleano)
    ↓ events
    └─ @toggle-favorite
       @view-details
            ↓
    ListaProductosView.vue (Presenter)
         ↓ métodos
         ├─ handleToggleFavorite
         ├─ handleViewDetails
         ↓ dispatch actions
         └─ store (Model)
              ↓ Vuex
              ├─ state
              ├─ mutations
              ├─ actions
              └─ getters
```

### Flujo de Datos

```
Usuario interactúa
       ↓
    Componente Vue
       ↓
    emit event @ dispatch action
       ↓
    Vuex Store (action async)
       ↓
    Fetch API / Call service
       ↓
    commit mutation
       ↓
    Update state reactivo
       ↓
    Computed props detectan cambio
       ↓
    Component re-render
       ↓
   Usuario ve actualización
```

---

## 🛠️ Configuración y Personalización

### Variables de Entorno

Crear archivo `.env` en raíz:
```env
VITE_API_BASE_URL=https://fakestoreapi.com
VITE_APP_TITLE=ProductCatalog
```

Usar en código:
```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL
```

### Cambiar API
En `src/services/productService.js`:
```javascript
constructor() {
  this.baseURL = 'TU_API_REAL'  // Reemplazar
}
```

En `src/store/modules/products.js`:
```javascript
// En action fetchProducts():
const response = await fetch('TU_API_ENDPOINT')
```

### Customizar Colores Vuetify
En `src/main.js`:
```javascript
const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#TU_COLOR',
          secondary: '#TU_COLOR'
        }
      }
    }
  }
})
```

---

## 🐛 Troubleshooting

### "CORS Error" al cargar productos
- **Causa**: API no permite requests cross-origin
- **Solución**: Usar proxy o API con CORS habilitado
- **Temporal**: Usar `https://fakestoreapi.com` (CORS enabled)

### Tests fallan en Cypress
- **Causa**: Elementos no tienen `data-testid`
- **Solución**: Agregar `data-testid` a elementos importantes
```vue
<button data-testid="favorite-btn">❤️</button>
```

### Vuetify no carga estilos
- **Causa**: Falta import de `'vuetify/styles'`
- **Solución**: Verificar `src/main.js` tenga el import

### Enrutamiento no funciona
- **Causa**: Router no configurado en `main.js`
- **Solución**: Verificar `app.use(router)` antes de `app.mount()`

---

## 📚 Recursos y Referencias

### Documentación Oficial
- [Vue 3 Docs](https://vuejs.org/) - Framework progresivo
- [Vue Router 4](https://router.vuejs.org/) - Enrutamiento SPA
- [Vuex 4](https://vuex.vuejs.org/) - State management
- [Vuetify 3](https://vuetifyjs.com/) - UI Material Design
- [Jest](https://jestjs.io/) - Testing framework
- [Cypress](https://www.cypress.io/) - E2E testing

### Tutoriales Recomendados
- Vue 3 Composition API
- Vuex 4 Module Pattern
- Cypress Best Practices
- Material Design Principles

### Herramientas Útiles
- [Vue DevTools](https://devtools.vuejs.org/) - Debug Vuex store
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Inspector
- [Postman](https://www.postman.com/) - API testing
- [JSON Server](https://github.com/typicode/json-server) - Mock API local

---

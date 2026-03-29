# 🛍️ ProductCatalog - E-commerce SPA

> Aplicación Single Page Application (SPA) moderna con Vue 3, Vuex, Vue Router y Vuetify. 

---

## 🚀 Inicio Rápido (< 5 minutos)

### 1. Instalar
```bash
npm install
```

### 2. Ejecutar
```bash
npm run dev
```

### 3. Abrir
Navega a **http://localhost:3000**

✅ **Listo!** Ya tienes el catálogo funcionando.

---

## 📚 Documentación

### Para Empezar Rápido
👉 **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - 5 minutos de lectura
  - Setup
  - Estructura básica
  - Features principales
  - Troubleshooting

### Para Referencia Completa
👉 **[README.md](README.md)** - Documentación profesional
  - Descripción general
  - Instalación detallada
  - Estructura del proyecto
  - Configuración y personalización
  - Troubleshooting avanzado
  - Referencias y recursos

---

## 🎯 Las 5 Lecciones

| # | Lección | Concepto | Archivos |
|---|---------|----------|----------|
| 1 | Componentes y Ciclo de Vida | `mounted()`, reactividad, props | `ProductCard.vue`, `InicioView.vue` |
| 2 | Consumo de Datos desde API | Fetch, loading, error states | `productService.js`, `ListaProductosView.vue` |
| 3 | Gestión de Estado con Vuex | Modules, mutations, actions, getters | `store/modules/*` |
| 4 | Pruebas Automatizadas | Jest, Vue Test Utils, Cypress | `tests/`, `cypress/` |
| 5 | Librerías UI (Vuetify) | Componentes, responsive, tema | `App.vue`, `ProductCard.vue` |

---

## 📁 Estructura del Proyecto

```
ProductCatalog/
├── 📄 INDEX.md ........................ ← TÚ ESTÁS AQUÍ
├── 📄 GUIA_RAPIDA.md .................. Quick start (5 min)
├── 📄 README.md ....................... Docs completo (profesional)
├── 🌐index.html .................... HTML página principal
├── 📦 package.json .................... Dependencias (Vue, Vuex, Vite, etc.)
├── ⚙️ vite.config.js .................. Configuración build
├── ⚙️ jest.config.js .................. Tests unitarios
├── ⚙️ cypress.config.js ............... Tests E2E
├── ⚙️ .babelrc ........................ Transpilación JS
│
├── 🌐 public/
│   └── index.html .................... HTML página principal
│
├── 📦 src/ ........................... CÓDIGO FUENTE (aquí está todo)
│   ├── main.js ....................... Punto de entrada (Vue + Router + Vuex + Vuetify)
│   ├── App.vue ....................... Componente raíz (Navbar + Router + Footer)
│   │
│   ├── 🧩 components/
│   │   └── ProductCard.vue ........... Tarjeta reutilizable
│   │
│   ├── 📄 views/
│   │   ├── InicioView.vue ............ Página inicio (Lección 1)
│   │   ├── ListaProductosView.vue .... Catálogo con filtros (Lecciones 2-3)
│   │   ├── DetalleProductoView.vue ... Detalles dinámicos (Lección 5)
│   │   └── FavoritosView.vue ......... Lista de favoritos
│   │
│   ├── 🛣️ router/
│   │   └── index.js ................. Rutas (Inicio, Catálogo, Detalle, Favoritos)
│   │
│   ├── 🏪 store/
│   │   ├── index.js ................. Configuración Vuex
│   │   └── modules/
│   │       ├── products.js .......... Fetch API + estado productos (Lección 2-3)
│   │       ├── filters.js ........... Búsqueda y categoría (Lección 3)
│   │       └── favorites.js ......... Lista IDs favoritos (Lección 3)
│   │
│   └── 📡 services/
│       └── productService.js ........ Cliente API wrapper (Lección 2)
│
├── 🧪 tests/ ......................... TESTS UNITARIOS (Jest + Vue Test Utils)
│   ├── ProductCard.spec.js ........... Tests componente
│   └── productStore.spec.js ......... Tests Vuex store
│
└──── 🤖 cypress/ ....................... TESTS E2E (Cypress)
    └── e2e/
        └── filterProducts.cy.js ...... Escenarios E2E
```

---

## ✨ Features Implementadas

✅ **Catálogo dinámico** desde API (Fake Store)  
✅ **Filtro por categoría** y búsqueda por texto  
✅ **Detalles de productos** con rutas dinámicas  
✅ **Sistema de favoritos** persistente en store  
✅ **Gestión centralizada** con Vuex 4  
✅ **Componentes reutilizables** con Vue 3  
✅ **Interfaz profesional** con Vuetify 3  
✅ **Responsive design** (mobile, tablet, desktop)  
✅ **Tema claro/oscuro** con toggle  
✅ **Tests unitarios** (Jest + Vue Test Utils)  
✅ **Tests E2E** (Cypress)  
✅ **Documentación completa** (5 documentos)  

---

## 🔧 Scripts Disponibles

```bash
npm run dev                    # Servidor de desarrollo (localhost:3000)
npm run build                  # Build para producción
npm run preview                # Vista previa del build

npm run test                   # Ejecutar tests Jest
npm run test:watch             # Tests en modo watch
npm run test:coverage          # Reporte de cobertura

npm run cypress                # Cypress interfaz interactiva
npm run cypress:run            # Cypress headless (CI/CD)
```

---

## 🎓 ¿Por dónde empezar?

### Opción 1: Principiante (quiero usar, no entender)
1. Ejecuta `npm run dev`
2. Explora la app en localhost:3000
3. Lee [GUIA_RAPIDA.md](GUIA_RAPIDA.md)

### Opción 2: Avanzado (quiero entender arquitectura)
1. Lee [README.md](README.md) → Arquitectura
2. Abre `src/store/modules/*.js`
3. Ejecuta `npm run test` y revisa `tests/`
4. Ejecuta `npm run cypress` y revisa cypress specs

---

## 🔗 Enlaces Útiles

### Documentación Oficial
- [Vue 3](https://vuejs.org/) - Framework
- [Vue Router 4](https://router.vuejs.org/) - Enrutamiento
- [Vuex 4](https://vuex.vuejs.org/) - State management
- [Vuetify 3](https://vuetifyjs.com/) - UI components
- [Vite](https://vitejs.dev/) - Build tool
- [Jest](https://jestjs.io/) - Testing
- [Cypress](https://www.cypress.io/) - E2E testing

### Desde Este Proyecto
- API: [Fake Store API](https://fakestoreapi.com/)
- Iconos: [Material Design Icons](https://materialdesignicons.com/)
- Fuentes: [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)

---

## 📞 Soporte

- 📖 **Docs**: Lee [README.md](README.md)
- 🐛 **Bug**: Revisa console (F12) 
- 💡 **Idea**: Abre issue o contacta al equipo

---

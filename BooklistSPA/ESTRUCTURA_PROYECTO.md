# 📂 ESTRUCTURA FINAL DEL PROYECTO

```
BooklistSPA/
│
├── 📄 package.json                    # Dependencias: Vue 3, Vue Router, Vite
├── 📄 vite.config.js                  # Configuración de Vite (puerto 3000)
├── 📄 .gitignore                      # Archivos ignorados (node_modules, dist)
│
├── 📄 README.md                       # Documentación completa del proyecto
├── 📄 ENTREGABLES.md                  # Checklist de requerimientos + decisiones técnicas
├── 📄 GUIA_RAPIDA.md                  # Guía de inicio en 5 minutos
├── 📄 GUIA_LECCIONES.md               # Explicaciones detalladas de cada lección
│
├── 📁 public/
│   └── 📄 index.html                  # Página HTML principal
│                                      # - Root div: <div id="app">
│                                      # - Script entry: /src/main.js
│
└── 📁 src/                            # Código fuente de Vue
    │
    ├── 📄 main.js                     # Inicialización de la app
    │                                  # - createApp(App)
    │                                  # - use(router)
    │                                  # - mount('#app')
    │
    ├── 📄 App.vue                     # Componente raíz
    │                                  # - Navbar con navegación
    │                                  # - <router-view> para contenido
    │                                  # - Footer
    │
    ├── 📁 router/
    │   └── 📄 index.js                # Configuración Vue Router
    │                                  # Rutas:
    │                                  # - / → InicioView
    │                                  # - /libros → ListaLibrosView
    │                                  # - /libros/:id → DetalleLibroView
    │
    ├── 📁 views/                      # Componentes de página (vistas)
    │   │
    │   ├── 📄 InicioView.vue          # [LECCIÓN 1] Página principal
    │   │                              # - Contador (incrementar/decrementar)
    │   │                              # - Input con v-model
    │   │                              # - Datos reactivos (data, methods)
    │   │                              # - Computed: totalLibros, totalAutores
    │   │                              # - Estadísticas de biblioteca
    │   │
    │   ├── 📄 ListaLibrosView.vue     # [LECCIONES 2-4] Gestión de libros
    │   │                              # - Formulario (Lección 3: v-model)
    │   │                              # - Inputs: texto, select, textarea
    │   │                              # - Preview en tiempo real
    │   │                              # - Filtros (autor, categoría)
    │   │                              # - lista v-for de libros (Lección 2)
    │   │                              # - v-if: "No hay libros"
    │   │                              # - Eventos: @submit, @click (Lección 4)
    │   │                              # - Componente LibroCard
    │   │
    │   └── 📄 DetalleLibroView.vue    # [LECCIÓN 5] Detalle con rutas dinámicas
    │                                  # - Parámetro de ruta: $route.params.id
    │                                  # - Watcher en ruta
    │                                  # - Modal de edición (v-if)
    │                                  # - Botones: Editar, Eliminar, Volver
    │                                  # - Libros similares (mismo autor)
    │
    ├── 📁 components/                 # Componentes reutilizables
    │   │
    │   └── 📄 LibroCard.vue           # [LECCIÓN 2] Tarjeta de libro
    │                                  # - Props: libro (object)
    │                                  # - v-if: mostrar descripción
    │                                  # - @click: eventos personalizados
    │                                  # - $emit: ver-detalle, eliminar
    │                                  # - Método: truncarDescripcion()
    │
    └── 📁 store/
        │
        └── 📄 bookStore.js            # Store reactivo (MVVM)
                                       # - Datos: array de libros
                                       # - Métodos CRUD:
                                       #   * agregarLibro()
                                       #   * obtenerLibroPorId()
                                       #   * eliminarLibro()
                                       #   * actualizarLibro()
                                       # - Filtros:
                                       #   * obtenerLibrosPorAutor()
                                       #   * obtenerLibrosPorCategoria()
                                       #   * obtenerCategorias()
```

---

## 🧩 Desglose de Componentes

### **App.vue** (Component Raíz)
- Navbar con navigation
- Router-view
- Footer
- Estilos globales

### **InicioView.vue** (Lección 1)
- Data reactivo: contador, nombreUsuario
- Methods: incrementar, decrementar, reiniciar, saludar
- Computed: totalLibros, totalAutores, totalCategorias
- Template con binding: {{ contador }}
- Eventos: @click, @keyup.enter
- Estadísticas dinámicas

### **ListaLibrosView.vue** (Lecciones 2, 3, 4)
- Formulario con v-model (Lección 3)
- v-for para iterar libros (Lección 2)
- v-if para mostrar "sin libros" (Lección 2)
- @submit.prevent y @click (Lección 4)
- Filtros reactivos
- Preview en tiempo real
- Componente hijo: LibroCard

### **DetalleLibroView.vue** (Lección 5)
- Parámetro dinámico: $route.params.id
- Watcher automático
- Modal de edición (v-if)
- Métodos: cargarLibro, editarLibro, guardarCambios, eliminarLibro
- Navegación: router.push()
- Libros similares (filtro por autor)

### **LibroCard.vue** (Lección 2)
- Props: libro (object)
- @emit: ver-detalle, eliminar
- Métodos: truncarDescripcion()
- Template con v-if
- Eventos: @click en botones

### **bookStore.js** (State Management)
- Datos iniciales: 3 libros
- CRUD Complete
- Métodos de búsqueda
- Métodos de filtrado

### **router/index.js** (Vue Router)
- Importar componentes de vistas
- Definir rutas (3 total)
- Configurar router
- Meta información
- beforeEach hook

---

## 🌐 Flujo de Páginas

```
┌─────────────────────────────────────┐
│          Navbar (App.vue)           │
│  Inicio  |  Mis Libros  |  Tema     │
└─────────────────────────────────────┘

        ┌─── Ruta: /
        │
    ┌───┴─────────────────────┬─────────────────┬─────────────┐
    │                         │                 │             │
    ▼                         ▼                 ▼             ▼
┌──────────────┐      ┌──────────────┐    ┌──────────┐    ┌────────────┐
│ InicioView   │      │ListaLibrosView│    │LibroCard │    │DetalleLibro│
│ (/)          │      │ (/libros)     │    │          │    │ (/libros/:id)
│ - Contador   │      │ - Formulario  │◄──►│ card li- │    │ - Detalle  │
│ - Entrada    │      │ - Filtros     │    │  bro    │───►│ - Editar   │
│ - Stats      │      │ - Lista vfor  │    │ click   │    │ - Eliminar │
└──────────────┘      │ - Preview     │    │ emit    │    │ - Similar  │
                      └──────────────┘    │         │    │ - Modal    │
                                          └────┬────┘    └────────────┘
                                               │
                              ┌────────────────┴──────────────┐
                              │                               │
                    Parámetro ruta :id   ◄─────  router.push()
```

---

## 📡 Flujo de Datos (MVVM)

```
USER INTERFACE (Template)              VIEWMODEL (Methods/Computed)        DATA (Store)
┌──────────────────────┐               ┌──────────────────────┐            ┌─────────────┐
│ {{ contador }}       │               │ incrementar()        │            │ contador: 0 │
│ <input v-model>      │◄─────Two──────│ decrementar()        │────────────│ libros: []  │
│ <button @click>      │    Way        │ agregarLibro()       │  Watch &   │ nextId: 1   │
│ <div v-for>          │   Binding    │ computed: total      │  Computed  │             │
│ <div v-if>           │               │ filters: por autor   │            │             │
│                      │      ┌────────│ router.$route.params │            │             │
└──────────────────────┘      │        │                      │            │             │
        ▲                      │        └──────────────────────┘            │             │
        │                      │                                            │             │
        └──────────────────────┴────────────────────────────────────────────┴─────────────┘
               Rendering automático cuando data cambia (Reactividad)
```

---

## 🔄 Ciclo de Vida de Una Vista

```
1. Usuario navega a /libros/:123
   ↓
2. Vue Router activa DetalleLibroView
   ↓
3. mounted() hook executa
   → cargarLibro() (obtiene de store)
   ↓
4. Template renderiza con datos
   → $router.params.id = 123
   → libro.titulo, libro.autor, etc.
   ↓
5. Usuario interactúa
   → @click editar → abre modal
   → @submit guardar → actualiza store
   → @click eliminar → borra y vuelve a /libros
   ↓
6. Si cambia el :id en URL
   → watch($route.params.id) detecta
   → cargarLibro() nuevamente
```

---

## 🎨 Dependencias Instaladas

```json
{
  "dependencies": {
    "vue": "^3.3.4",           // Framework reactivo
    "vue-router": "^4.2.4"     // Enrutamiento SPA
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.3.1",  // Compilador .vue 
    "vite": "^4.4.9"                  // Build rápido
  }
}
```

**Total**: 2 dependencias + 2 dev dependencias  
**Bundle size estimado**: ~120KB minificado + gzip

---

## 🚀 Próximo Paso: Instalación

```bash
# 1. Navega a la carpeta
cd c:\Users\lycan\Documents\BooklistSPA

# 2. Instala dependencias
npm install

# 3. Inicia servidor dev
npm run dev

# 4. ¡Abre http://localhost:3000 en navegador!
```

---

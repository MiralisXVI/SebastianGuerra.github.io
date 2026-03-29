# 📚 BookList SPA - Gestor de Libros Interactivo

## 🎯 Descripción

**BookList SPA** es una Single Page Application (SPA) desarrollada con **Vue.js 3** que permite gestionar un catálogo de libros de forma interactiva. La aplicación implementa crear, leer, actualizar y eliminar libros (CRUD), con navegación dinámica y una interfaz moderna y responsive.

Este proyecto es el prototipo funcional para la **Editorial Nova**, demostrando las capacidades de Vue.js en el desarrollo de interfaces interactivas.

---
---

## 📂 Estructura del Proyecto

```
BooklistSPA/
├── public/
│   └── index.html              # Punto de entrada HTML
├── src/
│   ├── main.js                 # Configuración de Vue y router
│   ├── App.vue                 # Componente raíz de la aplicación
│   ├── router/
│   │   └── index.js            # Configuración de Vue Router
│   ├── views/
│   │   ├── InicioView.vue      # Vista principal con contador
│   │   ├── ListaLibrosView.vue # Vista con formulario y listado
│   │   └── DetalleLibroView.vue# Vista de detalle con rutas dinámicas
│   ├── components/
│   │   └── LibroCard.vue       # Componente reutilizable para mostrar libros
│   └── store/
│       └── bookStore.js        # Store reactivo para gestión de libros
├── package.json                # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
├── .gitignore
└── README.md                   # Este archivo
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- **Node.js** (v14 o superior)
- **npm** o **yarn**

### Pasos para Instalar

1. **Clonar o descargar el proyecto**
   ```bash
   cd BooklistSPA
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación**
   - La aplicación se abrirá automáticamente en `http://localhost:3000`

### Build para Producción
```bash
npm run build
npm run preview
```

---

## 🎓 Lecciones Implementadas

### **Lección 1: Introducción a Vue.js**
- ✅ Componente `App.vue` con estructura template/script/style
- ✅ Datos reactivos (data, computed, methods)
- ✅ Demostración de reactividad con contador en `InicioView.vue`
- ✅ Patrón MVVM implementado

**Conceptos clave:**
- Estructura de componentes Vue
- Propiedades reactivas con `data()`
- Métodos y computed properties
- Event binding con `@`

---

### **Lección 2: Templates y Rendering**
- ✅ Directiva `v-bind` para binding de atributos
- ✅ Directiva `v-if` y `v-show` para condiciones
- ✅ Directiva `v-for` para iterar sobre listas
- ✅ Mensajes condicionales cuando no hay libros

**Componentes:**
- `LibroCard.vue`: Componente que muestra información de cada libro
- `ListaLibrosView.vue`: Renderiza la lista con v-for

**Ejemplo de código:**
```vue
<div v-if="librosFiltrados.length === 0" class="sin-libros">
  <p>📚 No hay libros disponibles. ¡Agrega el primero!</p>
</div>

<div v-else class="libros-grid">
  <libro-card 
    v-for="libro in librosFiltrados" 
    :key="libro.id"
    :libro="libro"
  />
</div>
```

---

### **Lección 3: Binding de Formularios**
- ✅ Directive `v-model` para two-way binding
- ✅ Inputs de texto (`<input>`)
- ✅ Select (`<select>`)
- ✅ Textarea (`<textarea>`)
- ✅ Preview en tiempo real del libro a agregar

**Componente:** `ListaLibrosView.vue`

**Ejemplo:**
```vue
<input v-model="nuevoLibro.titulo" placeholder="Título...">
<select v-model="nuevoLibro.categoria">
  <option value="Novela">Novela</option>
</select>
<textarea v-model="nuevoLibro.descripcion"></textarea>
```

---

### **Lección 4: Manejo de Eventos**
- ✅ `@click` para agregar y eliminar libros
- ✅ `@submit.prevent` para prevenir envío de formulario
- ✅ `@keyup.enter` para enviar formulario con Enter
- ✅ Mensajes de confirmación con transiciones

**Eventos implementados:**
```vue
<button @click="agregarLibro">Agregar</button>
<button @click="eliminarLibro">Eliminar</button>
<form @submit.prevent="agregarLibro">
<input @keyup.enter="saludar">
```

---

### **Lección 5: Manejo de Rutas**
- ✅ Configuración de Vue Router en `router/index.js`
- ✅ Tres rutas principales:
  - `/` → InicioView
  - `/libros` → ListaLibrosView
  - `/libros/:id` → DetalleLibroView (ruta dinámica)
- ✅ `<router-link>` para navegación
- ✅ `<router-view>` para renderizar vistas
- ✅ Acceso a parámetros de ruta con `$route.params.id`

**Ejemplo de ruta dinámica:**
```javascript
{
  path: '/libros/:id',
  name: 'detalle-libro',
  component: DetalleLibroView
}
```

```vue
<router-link :to="`/libros/${libro.id}`">Ver Detalle</router-link>
```

---

## 🎨 Características Principales

### **1. Gestión de Libros**
- Agregar nuevos libros con título, autor, categoría y descripción
- Editar información de libros existentes
- Eliminar libros del catálogo
- Visualizar detalles completos de cada libro

### **2. Filtrado y Búsqueda**
- Buscar libros por autor
- Filtrar libros por categoría
- Limpiar filtros fácilmente

### **3. Navegación Fluida**
- Navegación entre vistas sin recargar la página
- Rutas dinámicas para ver detalles de libros
- Breadcrumb de navegación

### **4. Reactividad**
- Los cambios se reflejan instantáneamente
- Sincronización automática en tiempo real
- Validación de formularios

### **5. Interfaz Moderna**
- Diseño responsivo (mobile-friendly)
- Gradientes y efectos visuales
- Animaciones suaves
- Iconos emoji para mejor UX

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| Vue.js | ^3.3.4 | Framework principal |
| Vue Router | ^4.2.4 | Gestión de rutas |
| Vite | ^4.4.9 | Build tool |
| CSS3 | - | Estilos y animaciones |

---

## 📊 Store Reactivo (bookStore.js)

El archivo `src/store/bookStore.js` centraliza la gestión del estado de la aplicación:

```javascript
export const bookStore = reactive({
  libros: [...],           // Array de libros
  nextId: 4,              // ID para nuevos libros
  
  agregarLibro(libro),     // Agregar nuevo libro
  obtenerLibroPorId(id),   // Buscar por ID
  eliminarLibro(id),       // Eliminar libro
  actualizarLibro(id, libro), // Editar libro
  obtenerLibrosPorAutor(autor), // Filtrar por autor
  obtenerLibrosPorCategoria(categoria), // Filtrar por categoría
  obtenerCategorias()      // Get todas las categorías
})
```

---

## 🧪 Datos de Ejemplo

La aplicación viene con 3 libros pre-cargados:

1. **El Quijote** - Miguel de Cervantes
   - Categoría: Clásico
   - Año: 1605

2. **100 Años de Soledad** - Gabriel García Márquez
   - Categoría: Realismo Mágico
   - Año: 1967

3. **Cien Historias de Vida** - Jorge Luis Borges
   - Categoría: Cuento
   - Año: 1944

Puedes agregar más libros desde la interfaz.

---

## 💡 Patrones Implementados

### **MVVM (Model-View-ViewModel)**
- **Model**: Store reactivo (`bookStore.js`)
- **View**: Templates Vue (`.vue`)
- **ViewModel**: Métodos y propiedades calculadas `computed`

### **Composición de Componentes**
- Componentes reutilizables y modularizados
- Props para pasar datos entre componentes
- Eventos personalizados con `@emit`

### **Reactive State Management**
- Uso de `reactive()` de Vue para estado centralizado
- Watchers para cambios automáticos
- Computed properties para datos derivados

---

## 📞 Soporte y Consultas

Para dudas sobre el proyecto, consulta los manuales de Vue.js:
- [Vue.js Official Guide](https://vuejs.org/guide/introduction.html)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Vue 3 API](https://vuejs.org/api/)

---

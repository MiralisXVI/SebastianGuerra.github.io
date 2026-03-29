# 📚 ÍNDICE GENERAL - BookList SPA

## 🎯 ¿Por Dónde Empezar?

Selecciona según tu necesidad:

### 🚀 **Quiero instalar y ejecutar YA**
→ Lee: [GUIA_RAPIDA.md](./GUIA_RAPIDA.md) (5 minutos)

```bash
npm install
npm run dev
# http://localhost:3000
```

---

### 📖 **Quiero entender cómo funciona el proyecto**
→ Lee: [README.md](./README.md) (15 minutos)
- Descripción completa
- Estructura del proyecto
- Cómo usar cada vista
- Tecnologías utilizadas

---

## 📁 Contenido del Proyecto

```
BooklistSPA/
├── 📖 Documentación/
│   ├── README.md                    ← DOCUMENTACIÓN PRINCIPAL
│   ├── GUIA_RAPIDA.md              ← INICIO RÁPIDO
│   ├── GUIA_LECCIONES.md           ← APRENDE CONCEPTOS
│   ├── ENTREGABLES.md              ← VALIDACIÓN
│   ├── ESTRUCTURA_PROYECTO.md      ← VISTA GENERAL
│   └── INDEX.md                    ← TÚ ESTÁS AQUÍ
│
├── 💾 Config/
│   ├── package.json                ← Dependencias
│   ├── vite.config.js              ← Build config
│   └── .gitignore                  ← Git ignore
│
└── 💻 Código Fuente/
    ├── public/
    │   └── index.html              ← Página HTML
    └── src/
        ├── main.js                 ← Entrada
        ├── App.vue                 ← Componente raíz
        ├── router/index.js         ← Rutas
        ├── views/                  ← 3 páginas
        ├── components/             ← Componentes reutilizables
        └── store/bookStore.js      ← Estado
```

---

## 🎓 Las 5 Lecciones

| # | Lección | Conceptos | Archivos |
|---|---------|-----------|----------|
| 1 | Intro Vue | data(), methods, MVVM | InicioView.vue |
| 2 | Templates | v-if, v-for, v-bind | LibroCard.vue, ListaLibrosView.vue |
| 3 | Formularios | v-model, two-way | ListaLibrosView.vue, DetalleLibroView.vue |
| 4 | Eventos | @click, @submit, modifiers | Todos los .vue |
| 5 | Rutas | Vue Router, params dinámicos | router/index.js, DetalleLibroView.vue |


---

## 🚀 Instalación en 3 Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
http://localhost:3000
```

Para más detalles: [GUIA_RAPIDA.md](./GUIA_RAPIDA.md)

---

## 🔧 Tecnologías Usadas

- **Vue.js 3**: Framework reactivo moderno
- **Vue Router 4**: Enrutamiento SPA
- **Vite**: Build tool ultrarrápido
- **CSS3**: Estilos modernos y responsive
- **JavaScript ES6+**: Código limpio y actualizado

---

## 📚 Archivos de Documentación

### Detallados
- **[README.md](./README.md)** - Completo y profesional

### Rápidos
- **[GUIA_RAPIDA.md](./GUIA_RAPIDA.md)** - Quick start
- **[ESTRUCTURA_PROYECTO.md](./ESTRUCTURA_PROYECTO.md)** - Visual

---

## 🎭 Las 3 Vistas

### 1️⃣ **Inicio** (`/`)
Página principal con:
- Contador demo (Lección 1)
- Entrada personalizada
- Estadísticas de biblioteca
- Features de la app

→ Código: `src/views/InicioView.vue`

### 2️⃣ **Mis Libros** (`/libros`)
Gestión de libros con:
- Formulario para agregar (Lección 3)
- Filtros dinámicos (Lección 2)
- Lista con tarjetas (Lección 2)
- Eventos para eliminar (Lección 4)

→ Código: `src/views/ListaLibrosView.vue` + `src/components/LibroCard.vue`

### 3️⃣ **Detalle del Libro** (`/libros/:id`)
Información individual con:
- Parámetro dinámico `:id` (Lección 5)
- Modal de edición
- Botones para acciones
- Libros similares (mismo autor)

→ Código: `src/views/DetalleLibroView.vue`

---

## ❓ Preguntas Frecuentes

**¿Dónde están los datos guardados?**
→ En `src/store/bookStore.js` - Se pierden al recargar (mejora futura: localStorage)

**¿Cómo agregar más bookos?**
→ Navega a /libros, completa el formulario, clic en "Agregar Libro"

**¿Cómo editar un libro?**
→ En /libros/:id, clic en "Editar Libro", edita en modal, guarda

**¿Cómo eliminar un libro?**
→ Botón rojo "Eliminar" en tarjeta o detalle, confirma en dialog

**¿Cómo cambiar colores?**
→ Busca `#667eea` y `#764ba2` en archivos .vue

**¿Puedo usar en producción?**
→ Sí, pero primero agregar backend/database y localStorage

---

## 📞 Recursos Externos

- [Vue.js Official Docs](https://vuejs.org)
- [Vue Router Docs](https://router.vuejs.org)
- [Vite Docs](https://vite.dev)
- [Vue 3 Playground](https://play.vuejs.org)

---

→ Ver más en [README.md](./README.md#próximas-mejoras-opcionales)

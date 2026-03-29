# 🚀 Guía Rápida - BookList SPA

## ⚡ Inicio Rápido (5 minutos)

### 1️⃣ Instalar Dependencias
```bash
cd BooklistSPA
npm install
```

### 2️⃣ Ejecutar Dev Server
```bash
npm run dev
```

### 3️⃣ ¡Listo!
- Se abrirá automáticamente en `http://localhost:3000` 🎉

---

## 📱 Pantallas Principales

### **Inicio** (`/`)
- 📊 Estadísticas de la biblioteca
- 🔢 Contador demo (reactividad)
- 👋 Saludo personalizado
- ✨ Features de la aplicación

### **Mis Libros** (`/libros`)
- ➕ Formulario para agregar libros
- 🔍 Filtros por autor y categoría
- 📚 Grid con tarjetas de libros
- 🗑️ Botón para eliminar

### **Detalle del Libro** (`/libros/:id`)
- 📖 Información completa
- ✏️ Editar libro
- 🗑️ Eliminar libro
- 📕 Libros del mismo autor

---

## 🎮 Casos de Uso Comunes

### Agregar un Libro
```
1. Ir a "Mis Libros" 
2. Completar campos: Título, Autor, Categoría
3. Clic en "➕ Agregar Libro"
4. ✅ Aparece en la lista
```

### Ver Detalle de Libro
```
1. En lista, hacer clic en "👁️ Ver Detalle"
2. Se abre /libros/[id]
3. Aparece información completa
```

### Filtrar Libros
```
1. Escribir en "Por Autor"
2. O seleccionar "Por Categoría"
3. ✅ Lista se filtra automáticamente en tiempo real
```

### Editar Libro
```
1. Ir a detalle del libro
2. Clic en "✏️ Editar Libro"
3. Modal con formulario de edición
4. Clic en "Guardar Cambios"
5. ✅ Se actualiza
```

### Eliminar Libro
```
1. En tarjeta: clic en "🗑️ Eliminar"
2. O en detalle: clic en "🗑️ Eliminar Libro"
3. Confirma en dialog
4. ✅ Se elimina de la lista
```

---

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor con HMR

# Producción
npm run build        # Genera carpeta dist/
npm run preview      # Previsualiza build final
```

---

## 📂 Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `src/main.js` | Punto de entrada |
| `src/App.vue` | Componente raíz |
| `src/router/index.js` | Rutas |
| `src/views/*.vue` | Páginas |
| `src/components/*.vue` | Componentes |
| `src/store/bookStore.js` | Datos |

---

## 💾 Donde Están los Datos

Los datos se guardan en `bookStore.js`:
```javascript
bookStore.libros = [
  {
    id: 1,
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes',
    categoria: 'Clásico',
    descripcion: '...',
    año: 1605
  }
]
```

⚠️ **Nota**: Al recargar la página, los cambios se pierden. Para persistencia, hay que implementar localStorage.

---

## 🎨 Personalización Rápida

### Cambiar Color Primario
En `src/App.vue` y otros archivos, busca:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Reemplaza `#667eea` y `#764ba2` con tus colores.

### Cambiar Nombre de App
En `public/index.html`:
```html
<title>BookList SPA - Gestor de Libros</title>
```

---

## 🧪 Prueba Rápida

1. Abrir app en `http://localhost:3000`
2. Navegar a "Mis Libros"
3. Agregar 2-3 libros
4. Filtrar por autor
5. Ver detalle de uno
6. Editar información
7. Eliminar uno
8. ✅ Todo funciona

---

## 🐛 Troubleshooting

### Puerto 3000 en uso
```bash
# Cambiar puerto en vite.config.js
port: 3001  // o el que prefieras
```

### Dependencias no instalan
```bash
npm install --legacy-peer-deps
```

### Cambios no se reflejan
- Verifica que `npm run dev` esté activo
- Borra carpeta `node_modules/` e instala de nuevo
- Limpia caché del navegador (Ctrl+Shift+Delete)

---

## 📚 Recursos Útiles

- **Vue Docs**: https://vuejs.org
- **Router Docs**: https://router.vuejs.org
- **Vite Docs**: https://vite.dev
- **Playground**: https://play.vuejs.org

---

## ✨ Tips Pro

1. **Hot Reload**: Los cambios se aplican automáticamente sin recargar
2. **Vue DevTools**: Instala extensión de Chrome para debuggingjährig
3. **Console**: Accede a `this.$router` y `bookStore` en console
4. **Network**: Abre DevTools para ver requests (aunque sin backend no hay)

---

**¡Disfruta usando BookList SPA!** 📚✨

**Soporte rápido**: Revisa README.md para más detalles

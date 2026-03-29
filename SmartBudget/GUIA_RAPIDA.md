# 🚀 GUÍA RÁPIDA - SmartBudget Frontend

## Inicio en 3 Pasos

### 1️⃣ Instalar SASS
```bash
npm install
```

### 2️⃣ Compilar Estilos
```bash
npm run sass:watch
```

### 3️⃣ Abrir en Navegador
```bash
open index.html
```

---

## 📝 Comandos Disponibles

| Comando | Propósito | Uso |
|---|---|---|
| `npm run sass` | Compilar una vez | Compilación rápida |
| `npm run sass:watch` | Vigila cambios | **Desarrollo** ⭐ |
| `npm run sass:prod` | Minificado | Producción |
| `npm run sass:debug` | Con source maps | Debugging |

---

## 📂 Modificar Estilos

Cambiar **color de marca primario**:

```bash
# 1. Abrir archivo de variables
editor scss/abstracts/_variables.scss

# 2. Buscar línea:
$color-primary: #6366f1;

# 3. Cambiar a nuevo color, e.g.:
$color-primary: #8b5cf6;  // Púrpura

# 4. Guardar - El CSS se recompila automáticamente
```

Agregar **nuevo componente**:

```bash
# 1. Crear archivo
touch scss/components/_modals.scss

# 2. Escribir estilos BEM
.modal { }
.modal--lg { }
.modal__header { }

# 3. Importar en main.scss
@import 'components/modals';

# 4. ¡Listo! Se compila automáticamente
```

---

## 📱 Breakpoints (Tamaños)

```
📱 Móvil:   0 - 575px   (estilo base)
📱 Pequeño: 576px+      @include media-sm
📱 Tablet:  768px+      @include media-md ⭐
💻 Desktop: 992px+      @include media-lg ⭐
🖥️  Laptop: 1200px+     @include media-xl
📺 4K:      1400px+     @include media-xxl
```

---

## 🎨 Variables Principales

### Colores

```scss
$color-primary:     #6366f1  (Índigo - Botones principales)
$color-secondary:   #10b981  (Verde - Secundario)
$color-success:     #10b981  (Operación exitosa)
$color-danger:      #ef4444  (Errores)
$color-warning:     #f59e0b  (Advertencias)
$color-info:        #06b6d4  (Información)
```

### Espaciado

```scss
$spacing-8:    1rem     (16px - estándar)
$spacing-12:   1.5rem   (24px)
$spacing-16:   2rem     (32px)
$spacing-24:   3rem     (48px)
$spacing-32:   4rem     (64px)
```

---

## 🧩 Componentes Creados

### ✅ Botones
```html
<button class="btn btn--primary">Primario</button>
<button class="btn btn--secondary">Secundario</button>
<button class="btn btn--outline">Outline</button>
<button class="btn btn--lg">Grande</button>
```

### ✅ Cards
```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Título</h3>
  </div>
  <div class="card__body">Contenido</div>
</div>
```

### ✅ Navbar
```html
<header class="navbar">
  <nav class="navbar__container">
    <a href="#" class="navbar__brand">Logo</a>
    <ul class="navbar__menu">
      <li><a href="#" class="navbar__link">Enlace</a></li>
    </ul>
  </nav>
</header>
```

### ✅ Formularios
```html
<div class="form-group">
  <label class="label">Campo</label>
  <input type="text" class="input">
  <span class="help-text">Texto de ayuda</span>
</div>
```

### ✅ Grid Responsivo
```html
<div class="container">
  <div class="row">
    <div class="col col--md-6 col--lg-4">Item</div>
  </div>
</div>
```

---

## 🎯 Estructura de Carpetas SASS

```
scss/
├── abstracts/      Variables, mixins, funciones
├── base/          Reset, tipografía global
├── components/    Botones, cards, navbar (¡Editar aquí!)
├── layout/        Grids, contenedores
├── pages/         Estilos de página home
├── themes/        Temas futuros
├── vendors/       Bootstrap (futuro)
└── main.scss      Orquestador principal
```

**Dónde agregar nuevos elementos (Prioridad):**
1. `components/` - Componentes reutilizables
2. `layout/` - Sistemas de layout
3. `pages/` - Estilos específicos de página
4. `abstracts/` - Solo variables/mixins

---

## 🔍 Validación BEM

Checklist para verificar que un componente sigue BEM:

```
✅ ¿Tiene nombre claro?
   .boton, .tarjeta, .navegacion

✅ ¿Los elementos usan __ ?
   .boton__icono, .tarjeta__titulo

✅ ¿Las variantes usan -- ?
   .boton--grande, .boton--peligro

✅ ¿Es independiente?
   No depende de otros componentes

✅ ¿Se puede reutilizar?
   Funciona en diferentes contextos

❌ ¿Tiene anidamiento profundo?
   Evitar: .boton__icono__contenedor
```

---

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio el color primario?**  
R: Edita `scss/abstracts/_variables.scss` línea `$color-primary`

**P: ¿Dónde agrego nuevo componente?**  
R: Crea archivo en `scss/components/_tucomponente.scss` + importa en `main.scss`

**P: ¿El CSS se actualiza automáticamente?**  
R: Sí, si tienes `npm run sass:watch` ejecutándose

**P: ¿Puedo usar Bootstrap sin personalizar?**  
R: Sí, Bootstrap está vía CDN en `index.html`

**P: ¿Cómo agrego una nueva página?**  
R: 1) Crea `pages/tupage.html`  
    2) Crea `scss/pages/_tupage.scss`  
    3) Importa en `main.scss`

---

## 🔗 Enlaces Útiles

- [Sass Docs](https://sass-lang.com/documentation/)
- [BEM Methodology](https://getbem.com/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## 🎓 Referencia Rápida BEM

```scss
// CORRECTO ✅
.boton { }
.boton--grande { }
.boton__icono { }
.boton--grande__icono { }

// INCORRECTO ❌
.boton_grande { }      (No usar guion bajo)
.boton .icono { }      (No anidar en HTML)
.boton-grande { }      (Es variante, usar --)

// PERFECTO 🌟
.boton { }
.boton--lg { }
.boton--primary { }
.boton__icon { }
```

---

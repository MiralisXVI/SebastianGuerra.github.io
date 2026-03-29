# SmartBudget - Documentación Técnica

## 📋 Índice General

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Decisiones Técnicas](#decisiones-técnicas)
3. [Metodología CSS - BEM](#metodología-css---bem)
4. [SASS y Patrón 7-1](#sass-y-patrón-7-1)
5. [Configuración y Compilación](#configuración-y-compilación)
6. [Guía de Componentes](#guía-de-componentes)
7. [Responsive Design](#responsive-design)
8. [Integración Bootstrap](#integración-bootstrap)

---

## Estructura del Proyecto

```
SmartBudget/
├── index.html                 # Página principal HTML5 semántico
├── scss/                      # Archivos SASS (Patrón 7-1)
│   ├── main.scss             # Archivo principal
│   ├── abstracts/            # Variables, mixins, funciones
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── base/                 # Reset, tipografía base
│   │   └── _reset.scss
│   ├── components/           # Componentes reutilizables
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _navbar.scss
│   │   ├── _forms.scss
│   │   └── _badges.scss
│   ├── layout/              # Grids, contenedores, layouts
│   │   └── _layout.scss
│   ├── pages/               # Estilos específicos de páginas
│   │   └── _home.scss
│   ├── themes/              # Temas y variaciones (futuro)
│   └── vendors/             # Librerías externas (futuro)
├── css/                      # CSS compilado
│   └── main.css             # CSS resultado de compilar main.scss
├── assets/
│   ├── images/              # Imágenes del proyecto
│   └── fonts/               # Fuentes personalizadas
└── DOCUMENTACION_TECNICA.md # Este archivo
```

---

## Decisiones Técnicas

### 1. **Metodología CSS: BEM (Block Element Modifier)**

**¿Por qué BEM?**
- **Escalabilidad**: Fácil de extender con nuevos componentes
- **Mantenibilidad**: Nombres claros y predecibles
- **Modularidad**: Componentes independientes sin conflictos
- **Consistencia**: Nomenclatura uniforme en todo el proyecto

**Estructura BEM:**
```
.componente                    /* Block */
├── .componente__elemento      /* Element */
├── .componente--variante      /* Modifier */
└── .componente__elemento--variante
```

**Ejemplos en el proyecto:**
```css
/* Botón base */
.btn { }

/* Variante de tamaño */
.btn--lg { }
.btn--sm { }

/* Variante de estilo */
.btn--primary { }
.btn--outline { }

/* Elemento dentro del botón */
.btn__icon { }
.btn__text { }
```

### 2. **Preprocesador SASS - Patrón 7-1**

**¿Por qué SASS?**
- Variables reutilizables
- Mixins para código DRY
- Nesting para mejor organización
- Funciones para cálculos
- Modularización automática

**Patrón 7-1:**
Organiza los archivos SASS en 7 carpetas temáticas:

1. **abstracts/** - Variables, funciones, mixins (sin genera CSS)
2. **vendors/** - Librerías externas como Bootstrap
3. **base/** - Reset, tipografía, estilos globales
4. **layout/** - Contenedores, grids, sistemas de layout
5. **components/** - Componentes reutilizables
6. **pages/** - Estilos específicos de páginas
7. **themes/** - Variaciones de temas

### 3. **HTML5 Semántico**

Uso de etiquetas semánticas para mejor accesibilidad y SEO:
- `<header>` para navegación principal
- `<main>` para contenido principal
- `<section>` para grupos de contenido
- `<article>` para contenido independiente
- `<nav>` para navegación
- `<footer>` para pie de página

### 4. **Responsive Design - Mobile First**

**Estrategia:**
- Estilos base para dispositivos móviles
- Media queries incrementales (Flexbox + CSS Grid)
- Breakpoints definidos:
  - `sm`: 576px
  - `md`: 768px
  - `lg`: 992px
  - `xl`: 1200px
  - `xxl`: 1400px

**Mixins de media queries:**
```scss
@include media-sm { }   // Min-width: 576px
@include media-md { }   // Min-width: 768px
@include media-lg { }   // Min-width: 992px
```

### 5. **Bootstrap 4 CDN**

Integración vía CDN para:
- Componentes predefinidos
- Sistema de grid responsive
- Utilidades CSS
- Compatibilidad entre navegadores

---

## Metodología CSS - BEM

### Ventajas Implementadas

```scss
// ✅ Componente modular
.card {
  background: white;
  border-radius: 8px;
}

// ✅ Sin conflictos de nombres
.card__header { padding: 1rem; }
.card__body { padding: 1rem; }

// ✅ Variantes claras
.card--featured { border: 2px solid #6366f1; }
.card--flat { box-shadow: none; }

// ✅ Fácil de mantener
.btn--primary { background: #6366f1; }
.btn--primary:hover { background: #4f46e5; }
```

### Uso en Componentes

**Botones:**
```html
<button class="btn btn--primary btn--lg">
  <i class="btn__icon fas fa-rocket"></i>
  <span class="btn__text">Comenzar</span>
</button>
```

**Cards:**
```html
<div class="card card--featured">
  <div class="card__header">
    <h3 class="card__title">Título</h3>
  </div>
  <div class="card__body">
    <p class="card__text">Contenido</p>
  </div>
</div>
```

---

## SASS y Patrón 7-1

### Variables Definidas

```scss
// Colores
$color-primary: #6366f1;      // Índigo
$color-secondary: #10b981;    // Verde
$color-success: #10b981;
$color-danger: #ef4444;

// Tipografía
$font-size-base: 1rem;
$font-size-lg: 1.125rem;
$font-weight-bold: 700;

// Espaciado (escala 8px)
$spacing-8: 1rem;    // 16px
$spacing-16: 2rem;   // 32px

// Breakpoints
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
```

### Mixins Principales

```scss
// Flexbox
@mixin flex($direction: row, $justify: flex-start, $align: stretch) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}

// Media queries
@mixin media-md {
  @media (min-width: $breakpoint-md) {
    @content;
  }
}

// Transiciones
@mixin transition($properties: all, $duration: 250ms) {
  transition: $properties $duration ease-in-out;
}

// Sombras
@mixin shadow($level: 'base') {
  box-shadow: $box-shadow-#{$level};
}
```

### Importación en main.scss

```scss
// 1. Abstracts (sin genera CSS)
@import 'abstracts/variables';
@import 'abstracts/mixins';

// 2. Vendors
@import 'vendors/bootstrap';

// 3. Base
@import 'base/reset';

// 4. Layout
@import 'layout/layout';

// 5. Components
@import 'components/buttons';
@import 'components/cards';
// ...

// 6. Pages
@import 'pages/home';

// 7. Themes (vacío para futuro)
```

---

## Configuración y Compilación

### Instalación de SASS

**Con NPM:**
```bash
npm install -g sass
```

**Verificar instalación:**
```bash
sass --version
```

### Compilar SASS a CSS

**Opción 1: Una sola vez**
```bash
sass scss/main.scss css/main.css
```

**Opción 2: Modo watch (vigilancia automática)**
```bash
sass --watch scss:css
```

**Opción 3: Minificado para producción**
```bash
sass --style=compressed scss/main.scss css/main.css
```

### Archivo package.json (Recomendado)

```json
{
  "name": "smartbudget",
  "version": "1.0.0",
  "scripts": {
    "sass": "sass scss/main.scss css/main.css",
    "sass:watch": "sass --watch scss:css",
    "sass:prod": "sass --style=compressed scss/main.scss css/main.css"
  },
  "devDependencies": {
    "sass": "^1.69.0"
  }
}
```

Luego ejecutar:
```bash
npm run sass:watch
```

---

## Guía de Componentes

### Button

```html
<!-- Variantes de estilo -->
<button class="btn btn--primary">Primario</button>
<button class="btn btn--secondary">Secundario</button>
<button class="btn btn--outline">Outline</button>
<button class="btn btn--danger">Peligro</button>

<!-- Variantes de tamaño -->
<button class="btn btn--primary btn--sm">Pequeño</button>
<button class="btn btn--primary">Normal</button>
<button class="btn btn--primary btn--lg">Grande</button>

<!-- Con icono -->
<button class="btn btn--primary">
  <i class="btn__icon fas fa-rocket"></i>
  Comenzar
</button>

<!-- Ancho completo -->
<button class="btn btn--primary btn--full">Ancho Completo</button>
```

### Card

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Título</h3>
  </div>
  <img src="imagen.jpg" class="card__image" />
  <div class="card__body">
    <p class="card__text">Contenido de la card</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Acción</button>
  </div>
</div>

<!-- Card destacada -->
<div class="card card--featured">
  <!-- Contenido -->
</div>
```

### Navbar

```html
<header class="navbar">
  <nav class="navbar__container">
    <a href="#" class="navbar__brand">SmartBudget</a>
    
    <ul class="navbar__menu">
      <li class="navbar__item">
        <a href="#" class="navbar__link">Enlace</a>
      </li>
    </ul>
    
    <button class="navbar__toggle" id="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</header>
```

### Forms

```html
<div class="form-group">
  <label class="label">Nombre completo</label>
  <input type="text" class="input" placeholder="Tu nombre">
  <span class="help-text">Este campo es requerido</span>
</div>

<!-- Con estado de error -->
<div class="form-group">
  <label class="label">Email</label>
  <input type="email" class="input input--error">
  <span class="error-text">Email inválido</span>
</div>

<!-- Con estado de éxito -->
<div class="form-group">
  <label class="label">Contraseña</label>
  <input type="password" class="input input--success">
  <span class="success-text">Contraseña cumple requisitos</span>
</div>
```

---

## Responsive Design

### Sistema Grid Flexible

```html
<!-- Grid con 12 columnas -->
<div class="container">
  <div class="row">
    <!-- Full width en móvil -->
    <div class="col col--md-6 col--lg-4">
      Contenido
    </div>
    
    <div class="col col--md-6 col--lg-4">
      Contenido
    </div>
    
    <div class="col col--md-6 col--lg-4">
      Contenido
    </div>
  </div>
</div>
```

### Breakpoints en Acción

```scss
// Diseño móvil primero
.hero {
  padding: 2rem;  // Móvil
  
  @include media-md {
    padding: 4rem;  // Tablets
  }
  
  @include media-lg {
    padding: 6rem;  // Desktops
  }
}
```

### Flexbox y Grid

```html
<!-- Flexbox automático -->
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- CSS Grid -->
<div class="grid grid--3-cols">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Integración Bootstrap

### CDN Links

Bootstrap y dependencias están importados desde CDN en `index.html`:

```html
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

<!-- Font Awesome Iconos -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Bootstrap JS y jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
```

### Colores Bootstrap Usados

- Primary: `#6366f1` (Índigo)
- Secondary: `#10b981` (Verde)
- Success: `#10b981`
- Danger: `#ef4444`
- Warning: `#f59e0b`
- Info: `#06b6d4`

### Orador de Estilos Personalizados

Los estilos personalizados en `css/main.css` NO sobrescriben Bootstrap, sino que:
- Extienden componentes
- Añaden nuevas variantes
- Mantienen consistencia de marca

---

## Flujo de Desarrollo

### 1. Modificar Estilos

```bash
# Abrir archivo SCSS
editor scss/components/_buttons.scss

# O crear nuevo componente
editor scss/components/_modals.scss
```

### 2. Compilar Cambios

```bash
# Vigila cambios automáticamente
npm run sass:watch
```

### 3. Verificar en Navegador

```bash
# Abre index.html en navegador
# El archivo CSS se actualiza automáticamente
```

### 4. Para Producción

```bash
# Minifica el CSS
npm run sass:prod

# Resultado: css/main.css comprimido
```

---

## Recursos Útiles

- [Sass Documentation](https://sass-lang.com/documentation/)
- [BEM Methodology](https://getbem.com/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Box Model](https://css-tricks.com/the-css-box-model/)
- [Google HTML/CSS Guide](https://google.com/styleguide/htmlcssguide.html)

---

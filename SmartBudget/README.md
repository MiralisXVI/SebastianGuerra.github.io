# SmartBudget - Frontend Web

**Una aplicación moderna para gestionar finanzas personales con inteligencia y seguridad.**

## 🚀 Inicio Rápido

### Requisitos
- Node.js 14+ (para compilar SASS)
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Instalación

```bash
# Clonar/descargar el proyecto
cd SmartBudget

# Instalar dependencias (SASS)
npm install

# Iniciar el servidor de desarrollo
npm run sass:watch

# Abrir index.html en navegador
open index.html
```

## 📁 Estructura del Proyecto

```
SmartBudget/
├── index.html                    # Página principal (HTML5)
├── scss/                         # Archivos SASS (Patrón 7-1)
│   ├── main.scss                # Archivo principal de importación
│   ├── abstracts/               # Variables, mixins, funciones
│   ├── base/                    # Reset, tipografía
│   ├── components/              # Componentes reutilizables
│   ├── layout/                  # Grids, contenedores
│   ├── pages/                   # Estilos de páginas
│   ├── themes/                  # Temas (futuro)
│   └── vendors/                 # Librerías externas
├── css/
│   └── main.css                 # CSS compilado (auto-generado)
├── assets/
│   ├── images/                  # Imágenes del sitio
│   └── fonts/                   # Fuentes personalizadas
└── DOCUMENTACION_TECNICA.md    # Documentación completa
```

## 🎨 Tecnologías Utilizadas

### Frontend
- **HTML5** - Semántico y accesible
- **SASS/SCSS** - Preprocesador CSS con patrón 7-1
- **CSS3** - Diseño moderno (Flexbox, Grid)
- **Bootstrap 4** - Marcos de componentes
- **Font Awesome 6** - Iconografía

### Metodologías
- **BEM** - Block Element Modifier para CSS
- **Mobile First** - Responsive design
- **Semantic HTML5** - Estructura semántica

## 📱 Características de Diseño

### Responsive
- ✅ Optimizado para móvil, tablet y desktop
- ✅ Media queries con breakpoints (sm, md, lg, xl, xxl)
- ✅ Flexbox y CSS Grid

### Componentes
- ✅ Botones (primario, secundario, outline, danger)
- ✅ Cards (normal, featured, flat)
- ✅ Navbar responsiva con menú mobile
- ✅ Formularios accesibles
- ✅ Badges y alertas
- ✅ Sistema de layout (container, row, col)

### Secciones de la Landing Page
1. **Header/Navbar** - Navegación sticky
2. **Hero** - Sección principal con CTA
3. **Features** - 6 características principales
4. **Pricing** - 3 planes de precios
5. **CTA Final** - Llamada a la acción
6. **Footer** - Enlaces y redes sociales

## 🎯 Decisiones Metodológicas

### Por qué BEM?
- Escalabilidad sin conflictos de nombres
- Componentes independientes y modulares
- Fácil de mantener y extender
- Nomenclatura clara y predecible

### Por qué Patrón 7-1 SASS?
- Organización lógica de archivos
- Separación de responsabilidades
- Fácil de escalar
- Reutilización de variables y mixins

### Por qué Mobile First?
- Mejor performance en dispositivos móviles
- Menos CSS innecesario
- Escalado progresivo de complejidad
- Mejor experiencia de desarrollo

### Por qué Bootstrap 4?
- Componentes listos para usar
- Compatibilidad entre navegadores
- Amplio ecosistema y documentación
- SIN sobrescrituras innecesarias (customización mínima)

## 🛠️ Compilar SASS

### Modo Development (Watch)
```bash
npm run sass:watch
```
Vigila cambios y recompila automáticamente.

### Compilación Única
```bash
npm run sass
```

### Producción (Minificado)
```bash
npm run sass:prod
```

## 📊 Variables SASS Disponibles

### Colores
```scss
$color-primary: #6366f1;      // Índigo
$color-secondary: #10b981;    // Verde
$color-success: #10b981;
$color-danger: #ef4444;
$color-warning: #f59e0b;
$color-info: #06b6d4;
```

### Espaciado (Escala 8px)
```scss
$spacing-8: 1rem;    // 16px
$spacing-12: 1.5rem; // 24px
$spacing-16: 2rem;   // 32px
$spacing-24: 3rem;   // 48px
```

### Breakpoints
```scss
$breakpoint-sm: 576px;   // Small
$breakpoint-md: 768px;   // Tablets
$breakpoint-lg: 992px;   // Desktops
$breakpoint-xl: 1200px;  // Large
```

## 📝 Ejemplos de Uso

### Botón
```html
<button class="btn btn--primary btn--lg">
  <i class="fas fa-rocket"></i> Comenzar
</button>
```

### Card
```html
<div class="card card--featured">
  <div class="card__header">
    <h3 class="card__title">Título</h3>
  </div>
  <div class="card__body">Contenido</div>
</div>
```

### Grid Responsivo
```html
<div class="container">
  <div class="row">
    <div class="col col--md-6 col--lg-4">Item 1</div>
    <div class="col col--md-6 col--lg-4">Item 2</div>
    <div class="col col--md-6 col--lg-4">Item 3</div>
  </div>
</div>
```

## ✨ Características Prominentes

- 🎨 **Diseño moderno** con gradientes y animaciones
- 📱 **100% Responsivo** en todos los dispositivos
- ♿ **Accesible** con HTML5 semántico
- ⚡ **Rendimiento optimizado** con CSS modular
- 🔒 **Seguridad** de datos integrada en el copy
- 🎯 **Enfoque conversion** con CTAs claros


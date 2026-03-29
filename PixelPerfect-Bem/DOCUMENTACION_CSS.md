# Documentación Técnica: Estructura CSS/SCSS
## PixelPerfect Studio - Proyecto Course Card

---

## 📂 Estructura de Carpetas

```
PixelPerfect-Bem/
│
├── scss/                          # Carpeta fuente SCSS (PREPROCESSADA)
│   │
│   ├── config/                    # Configuración global
│   │   ├── _variables.scss        # Variables: colores, tipografía, espaciado
│   │   └── _reset.scss            # Reset CSS normalizado
│   │
│   ├── components/                # Componentes reutilizables (BEM)
│   │   └── _course-card.scss      # Componente principal: tarjeta de curso
│   │
│   └── main.scss                  # Archivo principal (punto de entrada)
│
├── styles.css                     # CSS compilado (GENERADO, no editar manualmente)
│
├── index.html                     # Demostración interactiva
│
├── INFORME_TECNICO.md             # Informe completo del proyecto
│
├── DOCUMENTACION_CSS.md           # Este archivo
│
└── README.md                      # Guía rápida del proyecto
```

---

## 🔧 Cómo Compilar SCSS a CSS

### Opción 1: Compilador SCSS desde línea de comandos
```bash
# Instalar Node-SASS o Dart-SASS
npm install -g sass

# Compilar
sass scss/main.scss styles.css

# Compilar en modo watch (automático)
sass --watch scss:styles.css
```

### Opción 2: IDE/Editor con compilador automático
- **VS Code:** Extensión "Live Sass Compiler" o "Easy SASS"
- **PyCharm/WebStorm:** Soporte nativo de SCSS
- **Sublime Text:** Complementos disponibles

### Opción 3: Herramientas de build
```bash
# Con Webpack
npm run build

# Con Gulp
gulp styles

# Con Parcel
parcel index.html
```

---

## 📋 Descripción de Cada Archivo

### `scss/config/_variables.scss`

**Propósito:** Centralizar todos los valores reutilizables

**Contenido:**

| Sección | Ejemplo | Uso |
|---------|---------|-----|
| **Colores Primarios** | `$color-primary: #6366f1` | Colores de marca |
| **Colores Gray Scale** | `$color-gray-50` a `$color-gray-900` | Backgrounds, textos, bordes |
| **Colores de Estado** | `$color-success`, `$color-danger` | Feedback al usuario |
| **Tipografía** | `$font-family-sans`, `$font-size-*` | Textos monolíticos |
| **Espaciado** | `$spacing-xs` a `$spacing-3xl` (4px escala) | Padding, margin, gap |
| **Border Radius** | `$border-radius-*` | Esquinas redondeadas |
| **Sombras** | `$shadow-sm` a `$shadow-xl` | Profundidad visual |
| **Transiciones** | `$transition-fast` a `$transition-slow` | Animaciones suaves |
| **Breakpoints** | `$breakpoint-sm` a `$breakpoint-2xl` | Responsiveness |

**¿Por qué es importante?**
- Cambio global: editar 1 variable cambia todo el proyecto
- Consistencia garantizada
- Escalable a temas/dark mode

---

### `scss/config/_reset.scss`

**Propósito:** Normalizar comportamiento por defecto del navegador

**Qué hace:**
```scss
* { margin: 0; padding: 0; box-sizing: border-box; }
  ↓ Elimina márgenes/paddings por defecto en TODOS los elementos
  ↓ box-sizing: border-box es mejor para cálculos de tamaño

body { font-family: system; font-size: 16px; }
  ↓ Tipografía base consistente en todos los navegadores

h1, h2, h3 { font-weight: bold; line-height: 1.2; }
  ↓ Encabezados coherentes

a { color: primary; text-decoration: none; }
  ↓ Enlaces sin subrayado por defecto (BEM los maneja)

button { cursor: pointer; border: none; }
  ↓ Botones sin estilos por defecto del navegador
```

**¿Por qué es importante?**
- Sin reset, CSS se vuelve caótico: diferentes navegadores, diferentes comportamientos
- Reset crea base consistente
- Podemos asumir márgenes = 0 en todo punto de partida

---

### `scss/components/_course-card.scss`

**Propósito:** Componente reutilizable de tarjeta de curso (BEM)

**Estructura BEM:**

```
BLOCK: .course-card
├── ELEMENT: .__header         (Encabezado: imagen + badge)
│   ├── .__image               (Imagen del curso)
│   └── .__badge               (Etiqueta categoría)
│
├── ELEMENT: .__content        (Contenido principal)
│   ├── .__title               (Título del curso)
│   ├── .__description         (Descripción)
│   ├── .__meta                (Metadata: horas, nivel, estudiantes)
│   ├── .__rating              (Calificación/reviews)
│   └── .__price               (Precio)
│
├── ELEMENT: .__footer         (Pie de tarjeta)
│   ├── .__instructor          (Profesor)
│   └── .__cta                 (Botón "Enroll Now")
│
└── MODIFIERS:
    ├── .--featured            (Tarjeta premium con borde)
    ├── .--compact             (Versión pequeña)
    └── .--bestseller          (Indicador top-rated)
```

### Explicación de Cada Elemento

#### `.course-card` (BLOQUE)
```scss
.course-card {
  display: flex;
  flex-direction: column;           // Elementos apilados verticalmente
  height: 100%;                     // Ocupa altura completa del contenedor
  background-color: white;
  border-radius: $border-radius-lg; // 12px
  box-shadow: $shadow-md;           // Sombra sutil
  overflow: hidden;                 // Imagen no se desborda de corners
  
  transition: transform 300ms ease-in-out;
  
  &:hover {
    transform: translateY(-8px);    // "Elevación" en hover
    box-shadow: $shadow-lg;         // Sombra más pronunciada
  }
}
```

**¿Qué hace?**
- Contenedor flexible (todos los elementos dentro se alinean)
- Altura 100% permite que tarjetas tengan altura igual (en grilla)
- Transición suave da feedback al usuario
- Hover elevación = efecto profesional

---

#### `.course-card__header` (ELEMENTO)
```scss
.course-card__header {
  position: relative;               // Para posicionar badge en esquina
  overflow: hidden;                 // Imagen no se desborda
  height: 200px;
  background: linear-gradient(135deg, $color-primary-light, $color-primary);
}
```

**¿Para qué?**
- Contenedor de imagen + badge
- `position: relative` permite posicionar badge con `position: absolute`
- `overflow: hidden` recorta imagen a esquinas redondeadas del padre

---

#### `.course-card__image` (ELEMENTO)
```scss
.course-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;                // Imagen llena el espacio sin distorsionarse
  transition: transform 300ms ease-in-out;
}

.course-card:hover .course-card__image {
  transform: scale(1.05);           // Zoom sutil al pasar mouse
}
```

**¿Para qué?**
- Imagen responsiva que llena el espacio exacto
- `object-fit: cover` = la imagen se recorta, no se estira
- Zoom en hover = detalle interactivo

---

#### `.course-card__badge` (ELEMENTO)
```scss
.course-card__badge {
  position: absolute;               // Posicionado sobre imagen
  top: $spacing-lg;                 // 16px desde arriba
  right: $spacing-lg;               // 16px desde derecha
  display: inline-block;
  padding: $spacing-sm $spacing-md;
  background-color: $color-secondary; // Rosado
  color: white;
  font-size: $font-size-xs;         // 12px
  font-weight: $font-weight-semibold;
  border-radius: $border-radius-full; // 9999px (completamente redondeado)
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

**¿Para qué?**
- Etiqueta de categoría (PROGRAMACIÓN, DISEÑO, etc.)
- Posicionada en esquina superior derecha
- Letras mayúsculas + spacing = profesional

---

#### `.course-card__content` (ELEMENTO)
```scss
.course-card__content {
  flex: 1;                          // Crece para llenar espacio disponible
  padding: $spacing-xl;             // 24px
  display: flex;
  flex-direction: column;
  gap: $spacing-md;                 // 12px entre elementos
}
```

**¿Para qué?**
- Contenedor del contenido principal
- `flex: 1` = expande para llenar espacio (importante cuando tarjeta está en grilla)
- Subelementos automáticamente espaciados

---

#### `.course-card__title` (ELEMENTO)
```scss
.course-card__title {
  font-size: $font-size-lg;         // 18px
  font-weight: $font-weight-bold;   // 700
  color: $color-gray-900;           // Casi negro
  line-height: $line-height-tight;  // 1.2
  margin: 0;                        // Resetear margin por defecto
}
```

**¿Para qué?**
- Título del curso
- Tamaño y peso claros
- `line-height: 1.2` = más compacto pero legible

---

#### `.course-card__description` (ELEMENTO)
```scss
.course-card__description {
  font-size: $font-size-sm;         // 14px
  color: $color-gray-600;           // Gris oscuro (menos énfasis que título)
  line-height: $line-height-normal; // 1.5
  display: -webkit-box;
  -webkit-line-clamp: 2;            // Máximo 2 líneas
  -webkit-box-orient: vertical;
  overflow: hidden;                 // Elipsis (...) si sobrepasa
}
```

**¿Para qué?**
- Descripción corta del curso
- Limitada a 2 líneas máximo (...truncada si es más larga)
- Legibilidad mejorada con line-height 1.5

---

#### `.course-card__footer` (ELEMENTO)
```scss
.course-card__footer {
  padding: 0 $spacing-xl $spacing-xl;
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;                 // 16px entre instructor y botón
  border-top: 1px solid $color-gray-200;
  margin-top: auto;                 // Posiciona en FONDO de la tarjeta
}
```

**¿Para qué?**
- Sección inferior con instructor y botón
- `margin-top: auto` = siempre en fondo, incluso si contenido es corto
- Border-top visual = separación clara

---

#### `.course-card__cta` (ELEMENTO)
```scss
.course-card__cta {
  width: 100%;                      // Ancho completo
  padding: $spacing-md;
  background-color: $color-primary; // Azul
  color: white;
  font-weight: $font-weight-semibold;
  border-radius: $border-radius-md; // 8px
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
  border: none;                     // Sin borde
  font-size: $font-size-sm;
}

&__cta:hover {
  background-color: $color-primary-dark; // Azul más oscuro
}

&__cta:active {
  transform: scale(0.98);           // "Presión" visual
}
```

**¿Para qué?**
- Botón principal de acción (CTA = Call To Action)
- Cambio color en hover
- `transform: scale(0.98)` = feedback de clic
- Ancho 100% = fácil de hacer clic

---

### Modificadores (MODIFIERS)

#### `.course-card--featured`
```scss
.course-card--featured {
  border: 2px solid $color-primary; // Borde azul
  
  .course-card__header {
    height: 250px;                  // Más alto (200px → 250px)
    background: linear-gradient(135deg, $color-primary, $color-primary-dark);
  }
  
  .course-card__cta {
    background-color: $color-secondary; // Botón rosa en lugar de azul
  }
}
```

**Uso:** Destacar cursos premium, populares o recomendados

**HTML:**
```html
<div class="course-card course-card--featured">
  <!-- Contenido igual -->
</div>
```

---

#### `.course-card--compact`
```scss
.course-card--compact {
  .course-card__header {
    height: 150px;                  // 200px → 150px (más pequeño)
  }
  
  .course-card__content {
    padding: $spacing-lg;           // Menos padding
  }
  
  .course-card__description {
    display: none;                  // Ocultar descripción
  }
}
```

**Uso:** Grillas densas con muchas tarjetas

**HTML:**
```html
<div class="course-card course-card--compact">
  <!-- Contenido igual, se adapta automáticamente -->
</div>
```

---

#### `.course-card--bestseller`
```scss
.course-card--bestseller {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, $color-success, $color-warning);
  }
  
  .course-card__badge {
    background-color: $color-success; // Verde en lugar de rosa
  }
}
```

**Uso:** Cursos más vendidos / mejor rating

**HTML:**
```html
<div class="course-card course-card--bestseller">
  <!-- Contenido igual -->
</div>
```

---

### Responsiveness

```scss
@media (max-width: $breakpoint-md) {  // 768px
  .course-card__header {
    height: 160px;                    // Más pequeño en mobile
  }
  
  .course-card__content {
    padding: $spacing-lg;             // Menos padding
    gap: $spacing-sm;                 // Menos espacio
  }
  
  .course-card__title {
    font-size: $font-size-md;         // Texto más pequeño
  }
}
```

**¿Por qué es importante?**
- Tarjetas se adaptan a pantallas pequeñas
- Padding reducido = más espacio para contenido
- Tipografía más pequeña = cabe mejor en mobile

---

## 🎯 Flujo de Importación

```scss
/* main.scss (punto de entrada) */

@import 'config/variables';      // 1. Variables globales primero
                                 //    (otros archivos las usan)

@import 'config/reset';          // 2. Reset CSS normalizado
                                 //    (preparar base limpia)

@import 'components/course-card'; // 3. Componentes (usan variables)
```

**¿Por qué este orden?**
- Variables primero: otros archivos las necesitan
- Reset segundo: base limpia para componentes
- Componentes tercero: usan variables + reset

---

## 📊 Hoja de Referencia Rápida

### Variables Usadas en Course Card

| Variable | Valor | Uso |
|----------|-------|-----|
| `$color-primary` | #6366f1 | Botón, borde featured |
| `$color-secondary` | #ec4899 | Badge, botón featured |
| `$color-gray-900` | #111827 | Texto principal |
| `$color-gray-600` | #4b5563 | Texto secundario |
| `$color-gray-200` | #e5e7eb | Bordes |
| `$font-size-lg` | 18px | Título |
| `$font-size-sm` | 14px | Badge, descripción |
| `$font-weight-bold` | 700 | Título, precio |
| `$spacing-lg` | 16px | Padding card |
| `$spacing-xl` | 24px | Padding content |
| `$border-radius-lg` | 12px | Card corners |
| `$border-radius-full` | 9999px | Badge |
| `$shadow-md` | 0 4px 6px... | Sombra normal |
| `$transition-normal` | 300ms | Hover animation |

---

## 🔍 Chequeo de Calidad

### Validación CSS
```bash
# Verificar sintaxis SCSS
sass --check scss/

# Linting (opcional con stylelint)
npx stylelint styles.css
```

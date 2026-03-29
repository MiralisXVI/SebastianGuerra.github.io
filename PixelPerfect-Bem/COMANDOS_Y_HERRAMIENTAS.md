# Comandos y Herramientas: PixelPerfect Studio Proyecto BEM

## 📦 Requisitos

### Software Necesario
- **Node.js** 14.0 o superior (para npm)
- **npm** 6.0 o superior (incluido con Node.js)
- **Navegador moderno** (Chrome, Firefox, Safari, Edge)

### Verificar Instalación
```powershell
# Windows PowerShell
node --version
npm --version
```

---

## 🔧 Configuración Inicial

### 1. Instalar Herramienta SCSS Global (Recomendado)

```bash
# Instalar Dart Sass globalmente
npm install -g sass

# Verificar instalación
sass --version
```

### 2. Crear package.json (Opcional - Para Proyecto Local)

```bash
cd "c:\Users\lycan\Documents\PixelPerfect-Bem"
npm init -y
```

### 3. Instalar Dependencias Locales

```bash
# Dev dependency: Sass local
npm install --save-dev sass

# Opcional: Linting
npm install --save-dev stylelint stylelint-config-recommended

# Opcional: Automatización
npm install --save-dev npm-watch
```

---

## 🛠️ Compilación SCSS a CSS

### Opción 1: Compilador Global Sass (Más Simple)

```bash
# Compilar UNA VEZ
sass "c:\Users\lycan\Documents\PixelPerfect-Bem\scss\main.scss" "c:\Users\lycan\Documents\PixelPerfect-Bem\styles.css"

# OU compilar con rutas cortas (si estás en la carpeta):
cd "c:\Users\lycan\Documents\PixelPerfect-Bem"
sass scss/main.scss styles.css
```

### Opción 2: Watch Mode (Compilar Automáticamente)

```bash
# Activar "watch" en carpeta scss (compilar cambios automáticamente)
sass --watch scss:. --style=compressed
```

Esto:
- Monitorea cambios en archivos `.scss`
- Compila automáticamente a `styles.css`
- `--style=compressed` = minifica el CSS

### Opción 3: Compilador Local del Proyecto

Si instalaste sass localmente:

```bash
# Compilar UNA VEZ
npx sass scss/main.scss styles.css

# Watch mode
npx sass --watch scss:. --style=compressed
```

### Opción 4: VS Code Extension (Recomendado si usas VS Code)

1. Instalar: **Live Sass Compiler** (Ritwick Dey)
2. Click en "Watch Sass" en esquina inferior
3. Compila automáticamente mientras editas

---

## 📝 Scripts en package.json

Si creaste `package.json`, agrega estos scripts:

**Archivo: `package.json`**
```json
{
  "scripts": {
    "build:sass": "sass scss/main.scss styles.css",
    "build:sass:watch": "sass --watch scss:. --style=compressed",
    "build:sass:minify": "sass scss/main.scss styles.min.css --style=compressed",
    "lint:css": "stylelint styles.css",
    "lint:scss": "stylelint scss/**/*.scss",
    "serve": "http-server -p 8000",
    "quality": "npm run build:sass && npm run lint:scss"
  }
}
```

**Uso:**
```bash
npm run build:sass        # Compilar SCSS
npm run build:sass:watch  # Compilar automáticamente
npm run build:sass:minify # Compilar + minificar
npm run lint:scss         # Validar BEM naming
npm run quality           # Compilar + validar calidad
```

---

## 🎨 Compilación SCSS: Explicacion

### Entrada (Source)
```
scss/main.scss (punto de entrada)
  └─ @import config/_variables.scss
  └─ @import config/_reset.scss
  └─ @import components/_course-card.scss
```

### Salida (Output)
```
styles.css (archivo compilado - usa ESTE en HTML)
```

### Proceso
1. Sass lee `scss/main.scss`
2. Procesa imports en orden
3. Expande variables a valores
4. Expande nesting a selectores planos
5. Genera `styles.css` final

### Ejemplo de Compilación

**Input SCSS:**
```scss
// _variables.scss
$color-primary: #6366f1;

// _course-card.scss
.course-card {
  &__title {
    color: $color-primary;
  }
}
```

**Output CSS:**
```css
.course-card__title {
  color: #6366f1;
}
```

---

## 🔍 Validar Estructura BEM

### Con Stylelint (Linting automático)

**Crear `.stylelintrc.json`:**
```json
{
  "extends": "stylelint-config-recommended",
  "rules": {
    "selector-class-pattern": "^[a-z]+(?:(?:__|-)[a-z0-9]+)*(?:--[a-z0-9]+)*$"
  }
}
```

**Usa:**
```bash
npx stylelint scss/**/*.scss
```

Esto verifica que todos los nombres de clase sigan patrón BEM:
- `✓ .course-card`
- `✓ .course-card__title`
- `✓ .course-card--featured`
- `✗ .courseCard` (camelCase incorrecto)
- `✗ .course_card` (underscore incorrecto)

---

## 📂 Estructura de Archivos y Compilación

```
scss/
├── config/
│   ├── _variables.scss    (Variables globales)
│   └── _reset.scss        (Reset CSS)
│
├── components/
│   └── _course-card.scss  (Componente principal)
│
└── main.scss              (Archivo input - aquí van @imports)
                           
                 ↓ [COMPILAR CON SASS]
                 
styles.css                (Archivo output - FINAL CSS)
                           ↓ [USAR EN HTML]
                           
index.html                (Referencia: <link rel="stylesheet" href="styles.css">)
```

---

## 🚀 Flujo de Desarrollo Típico

### 1. Iniciar Sesión de Desarrollo

```bash
# Ir a carpeta proyecto
cd "c:\Users\lycan\Documents\PixelPerfect-Bem"

# Iniciar watch (abre nueva terminal)
sass --watch scss:. --style=compressed

# En otra terminal, servir proyecto
python -m http.server 8000
```

### 2. Editar SCSS
Edita archivos en `scss/` → Sass compila automáticamente

### 3. Ver Cambios
Recarga navegador (F5) → ves cambios en `styles.css`

### 4. Verificar Calidad
```bash
npm run lint:scss  # Validar BEM
npm run lint:css   # Validar CSS
```

---

## 🔨 Tareas Comunes

### Cambiar Color Primario

**Archivo:** `scss/config/_variables.scss`
```scss
$color-primary: #6366f1;  // ← Cambiar este valor
```

Guardas → Sass compila → Recarga HTML → Cambio aplicado a todo

### Agregar Nuevo Componente

```bash
# 1. Crear archivo
touch scss/components/_button.scss

# 2. Editar _button.scss con contenido BEM
# .button { } .button__text { } .button--primary { }

# 3. Importar en main.scss
# @import 'components/button';

# 4. Guardar → Sass compila automáticamente
```

### Cambiar Espaciado Global

**Archivo:** `scss/config/_variables.scss`
```scss
$spacing-lg: 16px;  // ← Cambiar (p.ej. a 20px)
```

Todas las tarjetas se adaptan automáticamente.

---

## 💻 Comandos Powershell / Terminal

### Navegar a Proyecto
```powershell
cd "c:\Users\lycan\Documents\PixelPerfect-Bem"
```

### Ver Archivos SCSS
```powershell
tree scss /F
# O más simple:
ls -R scss
```

### Crear Archivo SCSS
```powershell
# Windows
New-Item scss/components/_nuevo.scss

# O manualmente en editor
```

### Compilar con Full Path
```powershell
sass "C:\Users\lycan\Documents\PixelPerfect-Bem\scss\main.scss" "C:\Users\lycan\Documents\PixelPerfect-Bem\styles.css"
```

### Abrir en VS Code
```powershell
code "C:\Users\lycan\Documents\PixelPerfect-Bem"
```

### Abrir HTML en Navegador predeterminado
```powershell
Invoke-Item "C:\Users\lycan\Documents\PixelPerfect-Bem\index.html"
```

### Servir localmente
```powershell
# Python 3
python -m http.server 8000

# Node.js (si instalaste http-server)
npx http-server -p 8000

# Luego abrir: http://localhost:8000
```

---

## 🐛 Troubleshooting

### Problema: "sass command not found"

**Solución 1:** Instalar globalmente
```bash
npm install -g sass
sass --version  # Verificar
```

**Solución 2:** Usar npx (sin instalar)
```bash
npx sass scss/main.scss styles.css
```

### Problema: CSS no se actualiza después de editar SCSS

**Solución:**
1. ¿Iniciaste watch mode?
   ```bash
   sass --watch scss:.
   ```
2. ¿Guardaste el archivo SCSS?
3. ¿Recargaste el navegador (F5)?

### Problema: Estilos no aplican

**Checklist:**
- [ ] `index.html` referencia `styles.css` correcto?
  ```html
  <link rel="stylesheet" href="styles.css">
  ```
- [ ] `styles.css` fue compilado correctamente?
  ```bash
  sass scss/main.scss styles.css  # recompila
  ```
- [ ] Limpiar caché navegador (Ctrl+Shift+Del)

### Problema: Errores de compilación SCSS

**Ejemplo:**
```
Error: Undefined variable: "$color-primary"
```

**Solución:**
- Verificar que `_variables.scss` está importado PRIMERO en `main.scss`
- Verificar sintaxis: `$variable-name`  (con dólar, guion, minúsculas)

---

## 📊 Archivos Generados

### Antes de Compilar
```
scss/
├── config/
│   ├── _variables.scss    (5KB)
│   └── _reset.scss        (3KB)
├── components/
│   └── _course-card.scss  (12KB)
└── main.scss              (0.5KB)

TOTAL: ~20KB (no son útiles aún, son fuentes)
```

### Después de Compilar
```
styles.css                (8KB compilado)
                          ↓
                    (ESTE usa HTML)
```

### Versión Minificada
```bash
sass scss/main.scss styles.min.css --style=compressed
```

Resultado:
```
styles.min.css            (4.5KB minificado)
                          ↓
                    (Mejor para producción)
```

---

## 📚 Recursos Útiles

### Documentación Oficial
- [Sass Documentation](https://sass-lang.com/documentation)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

### BEM Nombrado
- [BEM Official Site](https://bem.info/)
- [BEM 101](https://css-tricks.com/bem-101/)

### Herramientas Online
- [Sass Playground](https://sass-lang.com/playground)
- [CSS Analyzer](https://www.cssstats.com/)



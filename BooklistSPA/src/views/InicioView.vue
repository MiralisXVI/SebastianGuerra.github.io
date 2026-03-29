<template>
  <div class="inicio-container">
    <!-- Contador (Lección 1) -->
    <div class="welcome-section">
      <h2>Bienvenido a BookList SPA</h2>
      <p class="subtitle">Gestor de Libros Interactivo para la Editorial Nova</p>
      
      <div class="contador-card">
        <div class="contador-content">
          <h3>Demostración de Reactividad</h3>
          <p>Contador: <strong class="contador-numero">{{ contador }}</strong></p>
          <div class="button-group">
            <button @click="incrementar" class="btn btn-primary">
              ➕ Incrementar
            </button>
            <button @click="decrementar" class="btn btn-secondary">
              ➖ Decrementar
            </button>
            <button @click="reiniciar" class="btn btn-danger">
              🔄 Reiniciar
            </button>
          </div>
        </div>
      </div>

      <div class="user-info">
        <p>Usuario: <strong>{{ nombreUsuario }}</strong></p>
        <input 
          v-model="nombreUsuario" 
          placeholder="Escribe tu nombre"
          class="input-campo"
          @keyup.enter="saludar"
        >
        <p v-if="mensaje" class="saludo">{{ mensaje }}</p>
      </div>
    </div>

    <!-- Estadísticas de Libros -->
    <div class="stats-section">
      <h3>Estadísticas de la Biblioteca</h3>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number">{{ totalLibros }}</span>
          <span class="stat-label">Libros Registrados</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ totalAutores }}</span>
          <span class="stat-label">Autores Distintos</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ totalCategorias }}</span>
          <span class="stat-label">Categorías</span>
        </div>
      </div>
    </div>

    <!-- Botón de Acción -->
    <div class="cta-section">
      <router-link to="/libros" class="btn btn-large">
        Ir a Mis Libros →
      </router-link>
    </div>

    <!-- Información de Características -->
    <div class="features-section">
      <h3>Características de la Aplicación</h3>
      <ul class="features-list">
        <li>✅ Agregar nuevos libros con título, autor y categoría</li>
        <li>✅ Ver lista completa de libros registrados</li>
        <li>✅ Consultar detalles individuales de cada libro</li>
        <li>✅ Filtrar libros por autor o categoría</li>
        <li>✅ Editar información de libros existentes</li>
        <li>✅ Eliminar libros del catálogo</li>
        <li>✅ Navegación fluida entre vistas con Vue Router</li>
        <li>✅ Interfaz reactiva y moderna</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { bookStore } from '../store/bookStore'

export default {
  name: 'InicioView',
  data() {
    return {
      contador: 0,
      nombreUsuario: 'Visitante',
      mensaje: '',
      bookStore: bookStore
    }
  },
  computed: {
    totalLibros() {
      return this.bookStore.libros.length
    },
    totalAutores() {
      return new Set(this.bookStore.libros.map(l => l.autor)).size
    },
    totalCategorias() {
      return new Set(this.bookStore.libros.map(l => l.categoria)).size
    }
  },
  methods: {
    incrementar() {
      this.contador++
    },
    decrementar() {
      this.contador--
    },
    reiniciar() {
      this.contador = 0
    },
    saludar() {
      this.mensaje = `¡Hola, ${this.nombreUsuario}! Bienvenido a BookList SPA 📚`
      setTimeout(() => {
        this.mensaje = ''
      }, 3000)
    }
  }
}
</script>

<style scoped>
.inicio-container {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-section h2 {
  color: #667eea;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.contador-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem 0;
}

.contador-content h3 {
  margin-bottom: 1rem;
}

.contador-numero {
  font-size: 3rem;
  display: block;
  margin: 1rem 0;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #50c878;
  color: white;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(80, 200, 120, 0.4);
}

.btn-danger {
  background: #ff6b6b;
  color: white;
}

.btn-danger:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}

.btn-large {
  padding: 1rem 3rem;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-large:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.user-info {
  margin-top: 2rem;
}

.input-campo {
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  margin: 1rem 0;
  width: 300px;
  max-width: 100%;
  transition: border-color 0.3s ease;
}

.input-campo:focus {
  outline: none;
  border-color: #667eea;
}

.saludo {
  color: #50c878;
  font-size: 1.1rem;
  margin-top: 1rem;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stats-section {
  margin: 3rem 0;
}

.stats-section h3 {
  color: #333;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  display: block;
  font-size: 0.95rem;
  opacity: 0.9;
}

.cta-section {
  text-align: center;
  margin: 3rem 0;
}

.features-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
}

.features-section h3 {
  color: #333;
  margin-bottom: 1.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.75rem 0;
  color: #555;
  font-size: 1.05rem;
  border-bottom: 1px solid #ddd;
}

.features-list li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .inicio-container {
    padding: 1rem;
  }

  .welcome-section h2 {
    font-size: 2rem;
  }

  .button-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .input-campo {
    width: 100%;
  }

  .btn-large {
    width: 100%;
  }
}
</style>

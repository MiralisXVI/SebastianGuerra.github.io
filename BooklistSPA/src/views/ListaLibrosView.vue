<template>
  <div class="lista-libros-container">
    <!-- Formulario para Agregar Libros (Lección 3) -->
    <div class="formulario-section">
      <h2>Agregar Nuevo Libro</h2>
      
      <form @submit.prevent="agregarLibro" class="form">
        <div class="form-group">
          <label for="titulo">Título del Libro:</label>
          <input 
            id="titulo"
            v-model="nuevoLibro.titulo" 
            type="text" 
            placeholder="Ej: El Código Da Vinci"
            required
            class="form-input"
          >
        </div>

        <div class="form-group">
          <label for="autor">Autor:</label>
          <input 
            id="autor"
            v-model="nuevoLibro.autor" 
            type="text" 
            placeholder="Ej: Dan Brown"
            required
            class="form-input"
          >
        </div>

        <div class="form-group">
          <label for="categoria">Categoría:</label>
          <select 
            id="categoria"
            v-model="nuevoLibro.categoria"
            required
            class="form-input"
          >
            <option value="">Selecciona una categoría</option>
            <option value="Novela">Novela</option>
            <option value="Clásico">Clásico</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Misterio">Misterio</option>
            <option value="Realismo Mágico">Realismo Mágico</option>
            <option value="Cuento">Cuento</option>
            <option value="Ensayo">Ensayo</option>
            <option value="Poesía">Poesía</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div class="form-group">
          <label for="descripcion">Descripción:</label>
          <textarea 
            id="descripcion"
            v-model="nuevoLibro.descripcion" 
            placeholder="Breve descripción del libro..."
            rows="4"
            class="form-textarea"
          ></textarea>
        </div>

        <!-- Preview en tiempo real -->
        <div class="preview-section" v-if="mostrarPreview">
          <h4>Vista Previa:</h4>
          <div class="preview-card">
            <p><strong>Título:</strong> {{ nuevoLibro.titulo || 'No especificado' }}</p>
            <p><strong>Autor:</strong> {{ nuevoLibro.autor || 'No especificado' }}</p>
            <p><strong>Categoría:</strong> {{ nuevoLibro.categoria || 'No especificada' }}</p>
            <p><strong>Descripción:</strong> {{ nuevoLibro.descripcion || 'Sin descripción' }}</p>
          </div>
        </div>

        <button type="submit" class="btn btn-submit">
          ➕ Agregar Libro
        </button>
      </form>

      <!-- Mensaje de confirmación (Lección 4) -->
      <transition name="fade">
        <div v-if="mensajeConfirmacion" class="mensaje-exito">
          {{ mensajeConfirmacion }}
        </div>
      </transition>
    </div>

    <!-- Filtros (Lección 2) -->
    <div class="filtros-section">
      <h3>Filtrar Libros</h3>
      <div class="filtros">
        <div class="filtro-group">
          <label>Por Autor:</label>
          <input 
            v-model="filtroAutor" 
            type="text" 
            placeholder="Buscar por autor..."
            class="form-input"
          >
        </div>

        <div class="filtro-group">
          <label>Por Categoría:</label>
          <select v-model="filtroCategoria" class="form-input">
            <option value="">Todas las categorías</option>
            <option v-for="cat in obtenerCategorias" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <button @click="limpiarFiltros" class="btn btn-secondary">
          🔄 Limpiar Filtros
        </button>
      </div>
    </div>

    <!-- Lista de Libros (Lección 2 - v-if, v-for) -->
    <div class="lista-section">
      <h3>Libros Registrados ({{ librosFiltrados.length }})</h3>

      <!-- Mensaje si no hay libros -->
      <div v-if="librosFiltrados.length === 0" class="sin-libros">
        <p>📚 No hay libros disponibles. ¡Agrega el primero!</p>
      </div>

      <!-- Lista de libros -->
      <div v-else class="libros-grid">
        <libro-card 
          v-for="libro in librosFiltrados" 
          :key="libro.id"
          :libro="libro"
          @ver-detalle="irADetalle"
          @eliminar="eliminarLibro"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { bookStore } from '../store/bookStore'
import LibroCard from '../components/LibroCard.vue'

export default {
  name: 'ListaLibrosView',
  components: {
    LibroCard
  },
  data() {
    return {
      nuevoLibro: {
        titulo: '',
        autor: '',
        categoria: '',
        descripcion: ''
      },
      filtroAutor: '',
      filtroCategoria: '',
      mensajeConfirmacion: '',
      bookStore: bookStore,
      mostrarPreview: false
    }
  },
  computed: {
    librosFiltrados() {
      let filtrados = this.bookStore.libros

      if (this.filtroAutor) {
        filtrados = filtrados.filter(libro =>
          libro.autor.toLowerCase().includes(this.filtroAutor.toLowerCase())
        )
      }

      if (this.filtroCategoria) {
        filtrados = filtrados.filter(libro =>
          libro.categoria === this.filtroCategoria
        )
      }

      return filtrados
    },
    obtenerCategorias() {
      return this.bookStore.obtenerCategorias()
    }
  },
  watch: {
    nuevoLibro: {
      handler() {
        this.mostrarPreview = this.nuevoLibro.titulo && this.nuevoLibro.autor
      },
      deep: true
    }
  },
  methods: {
    agregarLibro() {
      if (this.nuevoLibro.titulo && this.nuevoLibro.autor && this.nuevoLibro.categoria) {
        this.bookStore.agregarLibro(this.nuevoLibro)
        
        this.mensajeConfirmacion = `✅ Libro "${this.nuevoLibro.titulo}" agregado correctamente`
        
        // Reiniciar formulario
        this.nuevoLibro = {
          titulo: '',
          autor: '',
          categoria: '',
          descripcion: ''
        }
        
        // Limpiar mensaje después de 3 segundos
        setTimeout(() => {
          this.mensajeConfirmacion = ''
        }, 3000)
      }
    },
    eliminarLibro(id) {
      if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
        this.bookStore.eliminarLibro(id)
      }
    },
    irADetalle(id) {
      this.$router.push(`/libros/${id}`)
    },
    limpiarFiltros() {
      this.filtroAutor = ''
      this.filtroCategoria = ''
    }
  }
}
</script>

<style scoped>
.lista-libros-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Formulario */
.formulario-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.formulario-section h2 {
  color: #667eea;
  margin-bottom: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #333;
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.preview-section {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.preview-section h4 {
  color: #667eea;
  margin-bottom: 0.75rem;
}

.preview-card {
  background: white;
  padding: 1rem;
  border-left: 4px solid #667eea;
  border-radius: 4px;
}

.preview-card p {
  margin: 0.5rem 0;
  color: #555;
}

.btn-submit {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.mensaje-exito {
  background: #50c878;
  color: white;
  padding: 1rem;
  border-radius: 6px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Filtros */
.filtros-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.filtros-section h3 {
  color: #333;
  margin-bottom: 1.5rem;
}

.filtros {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  align-items: flex-end;
}

.filtro-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filtro-group label {
  font-weight: 600;
  color: #333;
}

.btn-secondary {
  background: #50c878;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(80, 200, 120, 0.4);
}

/* Lista de Libros */
.lista-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.lista-section h3 {
  color: #333;
  margin-bottom: 1.5rem;
}

.sin-libros {
  text-align: center;
  padding: 3rem 1rem;
  color: #999;
  font-size: 1.2rem;
}

.libros-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .formulario-section,
  .filtros-section,
  .lista-section {
    padding: 1.5rem;
  }

  .filtros {
    grid-template-columns: 1fr;
  }

  .libros-grid {
    grid-template-columns: 1fr;
  }
}
</style>

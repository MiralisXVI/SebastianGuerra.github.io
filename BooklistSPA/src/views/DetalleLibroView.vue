<template>
  <div class="detalle-libro-container">
    <!-- Botón para volver -->
    <router-link to="/libros" class="btn-back">
      ← Volver a la Lista
    </router-link>

    <!-- Detalle del Libro (Lección 5 - Rutas Dinámicas) -->
    <div v-if="libro" class="libro-detalle">
      <div class="libro-header">
        <div class="libro-icon">📖</div>
        <div class="libro-header-content">
          <h1>{{ libro.titulo }}</h1>
          <p class="autor">por <strong>{{ libro.autor }}</strong></p>
        </div>
      </div>

      <div class="libro-info">
        <div class="info-card">
          <h3>Información del Libro</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>Categoría:</label>
              <span class="badge">{{ libro.categoria }}</span>
            </div>
            <div class="info-item">
              <label>Año de Publicación:</label>
              <span>{{ libro.año }}</span>
            </div>
            <div class="info-item">
              <label>ID del Libro:</label>
              <span class="id">#{{ libro.id }}</span>
            </div>
          </div>
        </div>

        <div class="info-card">
          <h3>Descripción</h3>
          <p class="descripcion">{{ libro.descripcion || 'Sin descripción disponible' }}</p>
        </div>

        <!-- Similares (opcional) -->
        <div class="info-card" v-if="librosSimilares.length > 0">
          <h3>Libros del Mismo Autor</h3>
          <ul class="similar-list">
            <li v-for="similar in librosSimilares" :key="similar.id">
              <router-link :to="`/libros/${similar.id}`" class="link-similar">
                {{ similar.titulo }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Acciones -->
      <div class="acciones">
        <button @click="editarLibro" class="btn btn-edit">
          ✏️ Editar Libro
        </button>
        <button @click="eliminarLibro" class="btn btn-delete">
          🗑️ Eliminar Libro
        </button>
      </div>

      <!-- Modal de Edición -->
      <div v-if="mostrarEdicion" class="modal-overlay" @click="cerrarEdicion">
        <div class="modal" @click.stop>
          <h2>Editar Libro</h2>
          <form @submit.prevent="guardarCambios">
            <div class="form-group">
              <label>Título:</label>
              <input v-model="libroEditado.titulo" type="text" class="form-input">
            </div>
            <div class="form-group">
              <label>Autor:</label>
              <input v-model="libroEditado.autor" type="text" class="form-input">
            </div>
            <div class="form-group">
              <label>Categoría:</label>
              <input v-model="libroEditado.categoria" type="text" class="form-input">
            </div>
            <div class="form-group">
              <label>Descripción:</label>
              <textarea v-model="libroEditado.descripcion" class="form-textarea"></textarea>
            </div>
            <div class="modal-actions">
              <button type="submit" class="btn btn-primary">Guardar Cambios</button>
              <button type="button" @click="cerrarEdicion" class="btn btn-secondary">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Si el libro no existe -->
    <div v-else class="libro-no-encontrado">
      <p>📚 El libro que buscas no existe.</p>
      <router-link to="/libros" class="btn btn-primary">
        Volver a la Lista de Libros
      </router-link>
    </div>
  </div>
</template>

<script>
import { bookStore } from '../store/bookStore'

export default {
  name: 'DetalleLibroView',
  data() {
    return {
      libro: null,
      libroEditado: {},
      mostrarEdicion: false,
      bookStore: bookStore
    }
  },
  computed: {
    librosSimilares() {
      if (!this.libro) return []
      return this.bookStore.libros.filter(l => 
        l.autor === this.libro.autor && l.id !== this.libro.id
      )
    }
  },
  methods: {
    cargarLibro() {
      const id = this.$route.params.id
      this.libro = this.bookStore.obtenerLibroPorId(id)
      if (this.libro) {
        this.libroEditado = { ...this.libro }
      }
    },
    editarLibro() {
      this.mostrarEdicion = true
      this.libroEditado = { ...this.libro }
    },
    cerrarEdicion() {
      this.mostrarEdicion = false
    },
    guardarCambios() {
      if (this.bookStore.actualizarLibro(this.libro.id, this.libroEditado)) {
        this.libro = { ...this.libroEditado }
        this.mostrarEdicion = false
        alert('✅ Libro actualizado correctamente')
      }
    },
    eliminarLibro() {
      if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
        this.bookStore.eliminarLibro(this.libro.id)
        this.$router.push('/libros')
      }
    }
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.cargarLibro()
      }
    }
  },
  mounted() {
    this.cargarLibro()
  }
}
</script>

<style scoped>
.detalle-libro-container {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.btn-back {
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: #ddd;
  color: #333;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: #ccc;
  transform: translateX(-5px);
}

.libro-detalle {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.libro-header {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #eee;
}

.libro-icon {
  font-size: 4rem;
  min-width: 80px;
  text-align: center;
}

.libro-header-content h1 {
  color: #667eea;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.autor {
  color: #666;
  font-size: 1.2rem;
}

.libro-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

.info-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.info-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-item label {
  font-weight: 600;
  color: #667eea;
}

.info-item span {
  color: #555;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  width: fit-content;
}

.id {
  font-family: monospace;
  color: #999;
}

.descripcion {
  color: #555;
  line-height: 1.8;
  font-size: 1.05rem;
}

.similar-list {
  list-style: none;
  padding: 0;
}

.similar-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #ddd;
}

.similar-list li:last-child {
  border-bottom: none;
}

.link-similar {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-similar:hover {
  color: #764ba2;
  text-decoration: underline;
}

.acciones {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #eee;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-edit {
  background: #667eea;
  color: white;
}

.btn-edit:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-delete {
  background: #ff6b6b;
  color: white;
}

.btn-delete:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-secondary {
  background: #ddd;
  color: #333;
}

.libro-no-encontrado {
  text-align: center;
  padding: 3rem;
  color: #999;
}

.libro-no-encontrado p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal h2 {
  color: #667eea;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-input,
.form-textarea {
  width: 100%;
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

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.modal-actions button {
  flex: 1;
}

@media (max-width: 768px) {
  .detalle-libro-container {
    padding: 1.5rem;
  }

  .libro-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .libro-header-content h1 {
    font-size: 2rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .acciones {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>

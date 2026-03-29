<template>
  <div class="libro-card">
    <div class="card-header">
      <span class="libro-icon">📚</span>
    </div>
    
    <div class="card-body">
      <h3 class="titulo">{{ libro.titulo }}</h3>
      <p class="autor">{{ libro.autor }}</p>
      
      <div class="categoria-badge">
        <span class="badge">{{ libro.categoria }}</span>
      </div>

      <p v-if="libro.descripcion" class="descripcion">
        {{ truncarDescripcion(libro.descripcion) }}
      </p>

      <div class="meta">
        <span class="año">{{ libro.año }}</span>
      </div>
    </div>

    <div class="card-footer">
      <button @click="verDetalle" class="btn btn-detalle">
        👁️ Ver Detalle
      </button>
      <button @click="confirmarEliminar" class="btn btn-eliminar">
        🗑️ Eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibroCard',
  props: {
    libro: {
      type: Object,
      required: true
    }
  },
  methods: {
    verDetalle() {
      this.$emit('ver-detalle', this.libro.id)
    },
    confirmarEliminar() {
      if (confirm(`¿Deseas eliminar "${this.libro.titulo}"?`)) {
        this.$emit('eliminar', this.libro.id)
      }
    },
    truncarDescripcion(texto, longitud = 100) {
      if (texto.length > longitud) {
        return texto.substring(0, longitud) + '...'
      }
      return texto
    }
  }
}
</script>

<style scoped>
.libro-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.libro-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.libro-icon {
  font-size: 3rem;
}

.card-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.titulo {
  color: #333;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.autor {
  color: #666;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
  font-style: italic;
}

.categoria-badge {
  margin-bottom: 1rem;
}

.badge {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.descripcion {
  color: #777;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  flex: 1;
}

.meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #999;
  font-size: 0.85rem;
  margin-top: auto;
}

.año {
  display: inline-block;
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}

.card-footer {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #eee;
  background: #f8f9fa;
}

.btn {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-detalle {
  background: #667eea;
  color: white;
}

.btn-detalle:hover {
  background: #764ba2;
  transform: scale(1.05);
}

.btn-eliminar {
  background: #ff6b6b;
  color: white;
}

.btn-eliminar:hover {
  background: #ff5252;
  transform: scale(1.05);
}

@media (max-width: 480px) {
  .card-body {
    padding: 1rem;
  }

  .titulo {
    font-size: 1rem;
  }

  .card-footer {
    flex-direction: column;
  }

  .btn {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
}
</style>

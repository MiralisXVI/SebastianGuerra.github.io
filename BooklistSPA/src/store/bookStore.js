import { reactive } from 'vue'

export const bookStore = reactive({
  libros: [
    {
      id: 1,
      titulo: 'El Quijote',
      autor: 'Miguel de Cervantes',
      categoria: 'Clásico',
      descripcion: 'Las aventuras del ingenioso hidalgo Don Quijote de la Mancha.',
      año: 1605
    },
    {
      id: 2,
      titulo: '100 Años de Soledad',
      autor: 'Gabriel García Márquez',
      categoria: 'Realismo Mágico',
      descripcion: 'La historia de la familia Buendía en el pueblo de Macondo.',
      año: 1967
    },
    {
      id: 3,
      titulo: 'Cien Historias de Vida',
      autor: 'Jorge Luis Borges',
      categoria: 'Cuento',
      descripcion: 'Colección de historias fantásticas y metafísicas.',
      año: 1944
    }
  ],
  nextId: 4,

  agregarLibro(libro) {
    const nuevoLibro = {
      id: this.nextId++,
      ...libro,
      año: new Date().getFullYear()
    }
    this.libros.push(nuevoLibro)
    return nuevoLibro
  },

  obtenerLibroPorId(id) {
    return this.libros.find(libro => libro.id === parseInt(id))
  },

  eliminarLibro(id) {
    const index = this.libros.findIndex(libro => libro.id === id)
    if (index > -1) {
      this.libros.splice(index, 1)
      return true
    }
    return false
  },

  actualizarLibro(id, libro) {
    const index = this.libros.findIndex(l => l.id === id)
    if (index > -1) {
      this.libros[index] = { id, ...libro }
      return true
    }
    return false
  },

  obtenerLibrosPorAutor(autor) {
    return this.libros.filter(libro => 
      libro.autor.toLowerCase().includes(autor.toLowerCase())
    )
  },

  obtenerLibrosPorCategoria(categoria) {
    return this.libros.filter(libro => 
      libro.categoria.toLowerCase() === categoria.toLowerCase()
    )
  },

  obtenerCategorias() {
    return [...new Set(this.libros.map(libro => libro.categoria))]
  }
})

export default bookStore

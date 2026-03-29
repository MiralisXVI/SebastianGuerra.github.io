// Servicio para consumir API de productos
// Wrapper de Axios para abstraer la lógica de API

class ProductService {
  constructor() {
    this.baseURL = 'https://fakestoreapi.com'
    // En producción, usar: process.env.VUE_APP_API_URL
    this.USD_TO_CLP = 850 // Tasa de cambio aproximada
    
    // Diccionario de traducciones de productos
    this.translations = {
      1: {
        title: 'Mochila Fjallraven Foldsack No. 1',
        description: 'Mochila versátil perfecta para uso diario y caminatas en la naturaleza. Compartimiento acolchado para laptops de hasta 15 pulgadas. Múltiples bolsillos organizadores. Correas ajustables para mayor comodidad y resistencia.'
      },
      2: {
        title: 'Camiseta Premium Slim Fit para Hombre',
        description: 'Camiseta casual con estilo slim fit. Mangas raglan con contraste y botones estilo henley. Material suave y transpirable, ideal para uso diario. Costuras reforzadas para durabilidad. Perfecto para baseball fans y casual fashion.'
      },
      3: {
        title: 'Chaqueta de Algodón para Hombre',
        description: 'Chaqueta exterior versátil para primavera, otoño e invierno. Ideal para actividades como senderismo, camping, montañismo y ciclismo. Excelente regalo para padre, esposo o hijo. Proporciona calidez en cualquier estación del año.'
      },
      4: {
        title: 'Pantalón Casual Slim Fit para Hombre',
        description: 'Pantalón casual con corte slim fit moderno. El color puede variar ligeramente respecto a la pantalla. Disponible en múltiples tallas para la mejor comodidad. Ideal para uso casual y diario en cualquier ocasión.'
      },
      5: {
        title: 'Pulsera Legends Naga John Hardy Oro y Plata',
        description: 'De la colección Legends de John Hardy, inspirada en el dragón de agua mitológico. Pulsera con eslabones de oro y plata genuinos. Usar hacia adentro para amor y abundancia, hacia afuera para protección. Pieza de joyería de lujo.'
      },
      6: {
        title: 'Anillo de Oro Sólido Micropave Petite',
        description: 'Anillo de oro sólido con diamantes de micropave. Guaranteed de satisfacción. Devolucion o cambio dentro de 30 días. Diseñado y vendido por Hafeez Center en Estados Unidos. Joya elegante y duradera.'
      },
      7: {
        title: 'Anillo de Diamante de Oro Blanco Plaqué',
        description: 'Anillo de oro blanco plaqué con solitario de diamante creado. Regalo perfecto para compromiso, boda, aniversario y día de San Valentín. Línea clásica de anillos de promesa. Diseño elegante y atemporal.'
      },
      8: {
        title: 'Aretes Tunnels Pierced Owl Oro Rosado',
        description: 'Aretes tipo tuneles con doble campana plateados en oro rosado. Fabricados en acero inoxidable 316L de alta calidad. Diseño profesional y versátil. Perfectos para piercings expandidos.'
      },
      9: {
        title: 'Disco Duro Externo Portátil WD 2TB USB 3.0',
        description: 'Disco duro externo con capacidad de 2TB y conexión USB 3.0. Transferencias rápidas de datos. Mejora el rendimiento del PC. Compatible con Windows 10 y 8.1. Formateado en NTFS para máxima compatibilidad.'
      },
      10: {
        title: 'SSD Interno SanDisk PLUS 1TB SATA III',
        description: 'SSD interno de 1TB para mejorar el inicio, apagado y carga de aplicaciones. Rendimiento superior comparado con discos duros tradicionales. Velocidades de lectura/escritura de hasta 535MB/s. Ideal para computadoras de trabajo o gaming.'
      },
      11: {
        title: 'SSD Silicon Power 256GB 3D NAND A55',
        description: 'SSD con tecnología 3D NAND para transferencias de datos ultrarrápidas. Diseño slim de 7mm ideal para notebooks ultradelgadas. Tecnología SLC Cache para mayor rendimiento. Incluye TRIM, Garbage Collection y ECC.'
      },
      12: {
        title: 'Disco Duro Gaming WD 4TB para PlayStation 4',
        description: 'Disco duro externo diseñado específicamente para PlayStation 4. Amplia capacidad de 4TB para más juegos. Diseño elegante y funcional. Garantía limitada de 3 años del fabricante. Fácil de usar y configurar.'
      },
      13: {
        title: 'Monitor Acer SB220Q 21.5" Full HD IPS',
        description: 'Monitor de 21.5 pulgadas Full HD (1920x1080) con panel IPS ultra delgado. Incluye tecnología AMD FreeSync. Tiempo de respuesta de 4ms. Compatible con VESA. Frecuencia de actualización de 75Hz. Ángulos de visualización de 178 grados.'
      },
      14: {
        title: 'Monitor Gaming Samsung 49" CHG90 144Hz Ultraancho',
        description: 'Monitor curvo gaming de 49 pulgadas súper ultraancho con relación 32:9. Tecnología QLED con soporte HDR. Frecuencia de actualización de 144Hz. Tiempo de respuesta ultrarrápido de 1ms. Fabricación calibrada de fábrica para colores precisos.'
      },
      15: {
        title: 'Chaqueta de Snowboard 3 en 1 para Mujer BIYLACLESEN',
        description: 'Chaqueta de invierno convertible 3 en 1 con forro desmontable. Material 100% poliéster con forro térmico interior. Diseño humanizado con capucha ajustable y puños regulables. Múltiples bolsillos para seguridad. Apta para diferentes estaciones.'
      },
      16: {
        title: 'Chaqueta Motociclista de Cuero Sintético para Mujer',
        description: 'Chaqueta biker de dos piezas con cuero sintético desmontable estilo denim. 100% poliuretano en la capa externa, poliéster en el forro. Diseño versátil con detalles en botones. Bolsillos frontales y costuras de detalle. Lavar a mano únicamente.'
      },
      17: {
        title: 'Chaqueta Impermeable Raincoat a Rayas para Mujer',
        description: 'Chaqueta cortavientos con líneas a rayas, perfecta para viajes o uso casual. Mangas largas con capucha ajustable. Cierre de bototes y cremallera. Forrada y completamente rayado. Bolsillos laterales generosos. Capucha de algodón con cordones ajustables.'
      },
      18: {
        title: 'Camiseta Cuello Bote V para Mujer MBJ',
        description: 'Camiseta casual de manga corta con cuello en V. Material 95% rayón 5% spandex con excelente elasticidad. Fabricada en USA. Tela ligera y transpirable. Ribetes en mangas y cuello. Dobladillo reforzado con doble costura.'
      },
      19: {
        title: 'Camiseta Antihumedad para Mujer Opna',
        description: 'Camiseta de manga corta 100% poliéster interlock catiónico. Tejido respirador que elimina la humedad. Cuello en V y corte ajustado moderno. Máquina lavable y pre-encogida. Tela ligera, espaciosa y cómoda para cualquier ocasión.'
      },
      20: {
        title: 'Camiseta Casual de Algodón para Mujer DANVOUY',
        description: 'Camiseta casual de manga corta con estampado. 95% algodón, 5% spandex. Tela suave con elasticidad. Cuello en V y corte delgado. Perfecta para casual, oficina, playa, escuela o casa. Apta para primavera, verano, otoño e invierno.'
      }
    }
  }

  // Convertir precio de USD a CLP y redondear a entero
  convertToClp(priceUsd) {
    return Math.round(priceUsd * this.USD_TO_CLP)
  }

  // Traducir producto
  translateProduct(product) {
    try {
      const translation = this.translations[product.id]
      const categoryDisplay = this.getCategoryTranslation(product.category)
      
      if (translation) {
        return {
          ...product,
          title: translation.title,
          description: translation.description,
          categoryDisplay: categoryDisplay,
          price: this.convertToClp(product.price),
          originalPrice: product.price
        }
      }
      return {
        ...product,
        categoryDisplay: categoryDisplay,
        price: this.convertToClp(product.price),
        originalPrice: product.price
      }
    } catch (error) {
      console.error(`⚠️ Error traduciendo producto ${product?.id}:`, error)
      // Retornar al menos el producto original sin traducir
      return {
        ...product,
        price: this.convertToClp(product.price)
      }
    }
  }

  // Procesar productos para convertir precios y traducir
  processProducts(products) {
    console.log('🔄 procesando', products.length, 'productos')
    const processed = products.map((product, idx) => {
      const result = this.translateProduct(product)
      if (idx === 0) console.log('📍 Primer producto procesado:', result)
      return result
    })
    console.log('✅ Procesamiento completo. Total:', processed.length)
    return processed
  }

  getFallbackProducts() {
    console.warn('⚠️ Usando datos fallback locales debido al error de red')
    const fallback = Object.keys(this.translations).map((id) => {
      const numericId = Number(id)
      const base = this.translations[numericId]
      return {
        id: numericId,
        title: base.title,
        description: base.description,
        category: 'electronics',
        categoryDisplay: this.getCategoryTranslation('electronics'),
        price: this.convertToClp(100),
        originalPrice: 100,
        image: 'https://via.placeholder.com/350x350.png?text=Producto+Offline',
        rating: { rate: 4.5, count: 100 }
      }
    })
    return fallback
  }

  async getAllProducts() {
    try {
      console.log('📡 Iniciando fetch de productos desde', this.baseURL)
      const response = await fetch(`${this.baseURL}/products`)
      console.log('✅ Respuesta recibida:', response.status)
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }
      
      const products = await response.json()
      console.log('📦 JSON parseado. Productos:', products.length)
      console.log('🔍 Primer producto del API:', products[0])
      
      const processed = this.processProducts(products)
      console.log('✅ Productos procesados:', processed.length)
      console.log('🔍 Primer producto procesado:', processed[0])
      
      return processed
    } catch (error) {
      console.error('❌ Error in getAllProducts:', error)
      console.error('   Stack:', error.stack)

      // Detectar error de carga de página (-102 / timeout / no conexión)
      if (error?.message?.includes('-102') || error?.message?.toLowerCase().includes('failed to fetch') || error?.message?.toLowerCase().includes('networkerror')) {
        const fallback = this.getFallbackProducts()
        console.log('✅ Productos fallback cargados:', fallback.length)
        return fallback
      }

      // Re-lanzar otros errores para que la UI pueda manejarlos
      throw error
    }
  }

  async getProductById(id) {
    try {
      const response = await fetch(`${this.baseURL}/products/${id}`)
      if (!response.ok) {
        throw new Error(`Product not found: ${id}`)
      }
      const product = await response.json()
      return this.translateProduct(product)
    } catch (error) {
      console.error('Error fetching product:', error)
      throw error
    }
  }

  async getProductsByCategory(category) {
    try {
      const response = await fetch(`${this.baseURL}/products/category/${category}`)
      if (!response.ok) {
        throw new Error(`Category not found: ${category}`)
      }
      const products = await response.json()
      return this.processProducts(products)
    } catch (error) {
      console.error('Error fetching products by category:', error)
      throw error
    }
  }

  // Diccionario de traducciones de categorías
  getCategoryTranslation(category) {
    const categoryTranslations = {
      'electronics': 'Electrónica',
      'jewelery': 'Joyería',
      'men\'s clothing': 'Ropa Hombre',
      'women\'s clothing': 'Ropa Mujer'
    }
    return categoryTranslations[category] || category
  }

  async getCategories() {
    try {
      const response = await fetch(`${this.baseURL}/products/categories`)
      if (!response.ok) {
        throw new Error('Error fetching categories')
      }
      const categories = await response.json()
      return categories.map(cat => this.getCategoryTranslation(cat))
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }
}

export default new ProductService()

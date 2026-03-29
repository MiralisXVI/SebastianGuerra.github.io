<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="6" lg="4" class="mx-auto">
        <v-card class="elevation-4" color="primary" dark>
          <v-card-title class="text-h4 text-center">
            📦 ProductCatalog
          </v-card-title>
          
          <v-card-text class="text-center">
            <p class="text-h6 mt-4">Bienvenido</p>
            <p class="mt-3">
              Una aplicación SPA moderna con Vue 3, Vuex y Vuetify.
            </p>

            <v-divider class="my-6"></v-divider>

            <div class="mb-6">
              <p class="text-h6">{{ totalProducts }}</p>
              <p class="text-body2">Productos Disponibles</p>
            </div>

            <v-divider class="my-6"></v-divider>

            <v-btn 
              to="/productos" 
              color="accent" 
              size="large"
              block
              class="mb-3"
            >
              🛍️ Explorar Catálogo
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'InicioView',
  computed: {
    ...mapGetters('products', ['totalCount']),
    totalProducts() {
      return this.totalCount || '0'
    }
  },
  methods: {
    ...mapActions('products', ['fetchProducts'])
  },
  async mounted() {
    console.log('🚀 InicioView mounted')
    if (this.totalCount === 0) {
      await this.fetchProducts()
    }
  }
}
</script>

<style scoped>
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>

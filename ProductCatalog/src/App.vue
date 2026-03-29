<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar color="primary" dark sticky>
      <v-toolbar-title class="cursor-pointer" @click="$router.push('/')">
        📦 ProductCatalog
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn text color="white" @click="$router.push('/')">Inicio</v-btn>
      <v-btn text color="white" @click="$router.push('/productos')">Catálogo</v-btn>
      <v-btn text color="white" @click="$router.push('/favoritos')">
        ❤️ Favoritos ({{ favoritoCount }})
      </v-btn>
      
      <v-btn icon color="white" @click="toggleTheme" class="ml-3">
        <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="bg-grey-lighten-5">
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <v-footer app class="bg-primary text-white">
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="text-center">
            <p class="mb-0">&copy; 2026 ProductCatalog - Vue 3 + Vuex + Vuetify</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      isDark: false
    }
  },
  computed: {
    ...mapGetters('favorites', ['favoritoCount'])
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.$vuetify.theme.global.name = this.isDark ? 'dark' : 'light'
    }
  },
  mounted() {
    console.log('🚀 App.vue mounted - Vuetify funcionando')
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.cursor-pointer {
  cursor: pointer;
}
</style>

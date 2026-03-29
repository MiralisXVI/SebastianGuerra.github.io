<template>
  <div class="app-container">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-content">
        <h1 class="navbar-brand">
          📚 BookList SPA
        </h1>
        <ul class="nav-links">
          <li><router-link to="/" class="nav-link">Inicio</router-link></li>
          <li><router-link to="/libros" class="nav-link">Mis Libros</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 BookList SPA - Editorial Nova. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      usuario: 'Gestor de Libros'
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 1rem;
}

.footer {
  background: rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer p {
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>

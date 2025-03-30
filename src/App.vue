<script setup>
import { RouterView, useRoute } from 'vue-router'
import Landing from './views/Landing.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


const route = useRoute()
</script>

<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content"></main>
    <template v-if="route.path === '/'">
      <Landing />
      <About />
      <Contact />
    </template>
    <template v-else>
        <RouterView />
    </template>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
}

.main-content {
  padding-top: 48px;
}
</style>
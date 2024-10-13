<template>
  <nav class="navbar">
    <div class="nav-content">
      <div class="desktop-menu">
        <RouterLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: currentRoute === item.path }"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <button 
        class="mobile-menu-button"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        <div class="hamburger" :class="{ 'is-active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div 
        class="mobile-menu"
        :class="{ 'is-open': isMenuOpen }"
      >
        <RouterLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="mobile-nav-link"
          :class="{ active: currentRoute === item.path }"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.path)
const isMenuOpen = ref(false)

const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Écriture', path: '/textes' },
]
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px; 
  background: rgba($text-bg-color, 0.92);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 6px rgba($primary-color, 0.08);
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.nav-content {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.nav-link {
  color: $text-color;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    color: $primary-color;
    background: rgba($primary-color, 0.08);
  }
  
  &.active {
    color: $primary-color;
    background: rgba($primary-color, 0.12);
  }
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: $text-color;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &.is-active {
    span:first-child {
      transform: translateY(9px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:last-child {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 48px; 
  left: 0;
  right: 0;
  bottom: 0;
  min-height: calc(100vh - 48px);
  background: rgba($text-bg-color, 0.98);
  backdrop-filter: blur(8px);
  padding: 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  overflow-y: auto;

  &.is-open {
    transform: translateX(0);
  }
}

.mobile-nav-link {
  display: block;
  color: $text-color;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover, &.active {
    color: $primary-color;
    background: rgba($primary-color, 0.08);
  }
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
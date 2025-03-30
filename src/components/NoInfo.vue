<template>
    <Transition name="popup">
      <div v-if="isVisible" class="popup-overlay" @click="close">
        <div class="popup-content" @click.stop>
          <div class="popup-inner">
            <div class="decoration-line"></div>
            <h2>Oups 🙈</h2>
            <p>L'autrice n'a pas encore établi la fiche&nbsp;! Revenez plus tard ou parcourez-en une autre.</p>
            <div class="decoration-line"></div>
          </div>
          <button class="close-button" @click="close">×</button>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isVisible = ref(false)
  
  const show = () => {
    isVisible.value = true
  }
  
  const close = () => {
    isVisible.value = false
  }
  
  defineExpose({
    show,
    close
  })
  </script>
  
  <style lang="scss" scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($text-color, 0.3);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .popup-content {
    background: $text-bg-color;
    border-radius: 15px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 10px 30px rgba($primary-color, 0.15);
    max-width: 90%;
    width: 400px;
  }
  
  .popup-inner {
    text-align: center;
    
    h2 {
      color: $primary-color;
      font-size: 1.8rem;
      margin: 1rem 0;
      font-family: 'Playfair Display', serif;
    }
    
    p {
      color: $accent-color;
      margin-bottom: 1rem;
      font-style: italic;
    }
  }
  
  .decoration-line {
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      $frame-color 50%,
      transparent 100%
    );
    margin: 1rem auto;
    width: 80%;
  }
  
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    color: $accent-color;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    
    &:hover {
      background: $background-color;
      color: $primary-color;
    }
  }
  
  .popup-enter-active,
  .popup-leave-active {
    transition: all 0.3s ease;
    
    .popup-content {
      transition: all 0.3s ease;
    }
  }
  
  .popup-enter-from,
  .popup-leave-to {
    opacity: 0;
    
    .popup-content {
      transform: scale(0.9) translateY(20px);
    }
  }
  
  .popup-enter-to,
  .popup-leave-from {
    opacity: 1;
    
    .popup-content {
      transform: scale(1) translateY(0);
    }
  }
  </style>
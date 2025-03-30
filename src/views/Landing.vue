<script setup>
import backgroundImage from '@/assets/img/johannes-plenio-hvrpOmuMrAI-unsplash.jpg'
</script>

<template>
  <section class="section intro-section">
    <div class="text-content">
      <div class="content-wrapper">
        <h1>Paola Soren</h1>
        <p>Bienvenue dans mon univers de fantasy, et partez à la découverte de mes textes et des personnages qui les habitent.</p>
      </div>
    </div>
    <div class="image-content" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
    <div class="scroll-indicator">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro-section {
  display: flex;
  width: 100%;
  height: calc(100vh - 48px);
  position: relative;

  @media (min-width: 768px) {
    .text-content {
      width: 45%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      z-index: 2;
      margin-left: 5%;

      .content-wrapper {
        @include content-wrapper;
        @include decorative-frame;
      }

      h1 {
        @include heading-style;
        font-size: 3.5rem;
        margin-bottom: 1rem;
        text-align: center;
      }

      p {
        font-size: 1.2rem;
        margin: 0;
      }
    }

    .image-content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 80%;
      background-size: cover;
      background-position: center;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to right,
          $background-color 0%,
          rgba($background-color, 0.9) 20%,
          transparent 70%
        )
      }
    }
  }

  @media (max-width: 767px) {
    height: calc(100vh - var(--navbar-height-mobile, 48px)); 
    
    .text-content {
      width: 100%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 2;
      margin-left: 0;

      .content-wrapper {
        @include content-wrapper;
        text-align: center;
      }

      h1 {
        @include heading-style;
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.1rem;
        margin: 0 0 0.5rem;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .image-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      background-size: cover;
      background-position: center;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba($background-color, 0.3),
          rgba($background-color, 0.3)
        );
      }
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  z-index: 3;

  svg {
    width: 40px;
    height: 40px;
    fill: $accent-color;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-20px) translateX(-50%);
  }
  60% {
    transform: translateY(-10px) translateX(-50%);
  }
}
</style>

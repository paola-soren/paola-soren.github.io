<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="links-section">
        <div class="content-wrapper">
          <h2>Où me trouver&nbsp;?</h2>
          <p class="subtitle">Envie d'échanger sur mes projets ou simplement dire bonjour&nbsp;? Écrivez-moi 🖤</p>
          <p>Retrouvez-moi sur les réseaux sociaux pour suivre mon parcours d'écriture, ou envoyez-moi un petit mot par mail. Chaque message est une source d'inspiration et d'encouragement. Au plaisir d'échanger avec vous !</p>

          <div class="links-container">
            <a href="mailto:paola.soren.autrice@outlook.com" class="contact-link">
              <div class="link-icon">
                ✉️
              </div>
              <div class="link-content">
                <h3>Email</h3>
                <p>paola.soren.autrice@outlook.com</p>
              </div>
            </a>

            <a href="https://instagram.com/paola.soren" target="_blank" class="contact-link">
              <div class="link-icon">
                📸
              </div>
              <div class="link-content">
                <h3>Instagram</h3>
                <p>@paola.soren</p>
              </div>
            </a>

            <a href="https://www.threads.net/@paola.soren" target="_blank" class="contact-link">
              <div class="link-icon">
                @️
              </div>
              <div class="link-content">
                <h3>Threads</h3>
                <p>@paola.soren</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.contact-section {
  @include section-full;
  background-color: $background-color;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 48px);
}

.contact-container {
  display: flex;
  width: 50%;
  padding: 2rem;
  gap: 2rem;
}

.links-section {
  flex: 1;
  display: flex;
  align-items: center;
}

.content-wrapper {
  background-color: rgba($text-bg-color, 0.9);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba($primary-color, 0.15);
  width: 100%;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 20px;
    border: 2px solid $frame-color;
    border-radius: 10px;
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    inset: 15px;
  }

  h2 {
    @include heading-style;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: $accent-color;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-link {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  color: $text-color;
  background: rgba($primary-color, 0.03);
  transition: all 0.3s ease;

  .link-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background: rgba($primary-color, 0.1);
    border-radius: 8px;
    margin-right: 1rem;
    transition: all 0.3s ease;
  }

  .link-content {
    h3 {
      font-size: 1.1rem;
      margin: 0;
      color: $accent-color;
    }

    p {
      margin: 0;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }

  &:hover {
    transform: translateX(5px);
    background: rgba($primary-color, 0.06);

    .link-icon {
      transform: scale(1.1);
      background: rgba($primary-color, 0.2);
    }
  }
}

@media (max-width: 768px) {
  .contact-container {
    height: auto;
    width: auto;
  }

  .content-wrapper {
    padding: 2rem;
  }
}
</style>
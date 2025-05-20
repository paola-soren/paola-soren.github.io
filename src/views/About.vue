<script setup>
import { useRouter } from 'vue-router'
import avatarImage from '@/assets/img/download20240600194558.png'
import bookImage from '@/assets/img/aaron-burden-4eWwSxaDhe4-unsplash.jpg'


const router = useRouter()

const navigateToWork = () => {
  router.push('/textes')
}
</script>

<template>
  <section class="about-section">
    <div class="section-container">
      <div class="about-me">
        <div class="floating-image">
          <img :src="avatarImage" alt="Avatar" />
        </div>
        <div class="content-wrapper">
          <h2>Qui suis-je ?</h2>
          <p class="preview-text">Petite belge perdue dans des univers un peu trop sombres&nbsp;~</p>
          <div class="full-bio">
            <p>Fana de chats, du Japon et de manger&nbsp;! Mais quand je n'admire pas le prédateur qui vit chez moi en grignotant devant un anime, j'écris. J'aime me reposer sur une base de réalité, pour mieux la tordre comme je l'entends ensuite.</p>
            <p>Mes goûts en lecture sont éclectiques mais j'affectionne particulièrement les récits qui explorent la profondeur de la psychologie humaine. D'ailleurs, je rêverais d'un afternoon tea avec Oscar Wilde !</p>
          </div>
        </div>
      </div>

      <div class="about-work" @click="navigateToWork">
        <div class="floating-image">
          <img :src="bookImage" alt="Image d'un livre" />
        </div>
        <div class="content-wrapper">
          <h2>Ce que j'écris</h2>
          <p class="preview-text">Découvrez mes projets ici&nbsp;!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-section {
  @include section-full;
  background-color: $background-color;
  height: calc(100vh - 48px);
  overflow: hidden;
  display: flex;
  align-items: center;
}

.section-container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
  align-items: start;
}

.about-me, .about-work {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  transition: all 1s ease;
  @include decorative-frame;
  border-radius: 2rem;

  .floating-image {
    position: relative;
    width: 125px;
    height: 125px;
    margin-bottom: 1.5rem;
    z-index: 2;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 20px 40px rgba($primary-color, 0.2);
    }

    &::before {
      content: '';
      position: absolute;
      inset: -10px;
      transition: all 1s ease;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 1s ease;
    }
  }

  .content-wrapper {
    @include content-wrapper;
    width: 80%;
    text-align: center;
    margin-top: 0;
    padding: 2.5rem;

    h2 {
      @include heading-style;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .preview-text {
      font-size: 1.2rem;
      color: $accent-color;
      margin: 0;
    }

    .full-bio {
      max-height: 0;
      opacity: 0;
      //overflow: hidden;
      transition: all 1s ease;
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
}

.about-me {
  background-color: rgba($primary-color, 0.03);

  .floating-image {
    img {
      border-radius: 50%;
    }

    &::before {
      border-radius: 50%;
    }
  }

  &:hover {
    @media (min-width: 969px) {
      background-color: rgba($primary-color, 0.05);

      .floating-image {
        transform: scale(0.85) translateY(-10px);
        opacity: 0.8;

        img {
          box-shadow: 0 15px 30px rgba($primary-color, 0.15);
        }

        &::before {
          inset: -15px;
          border-color: rgba($primary-color, 0.2);
        }

        &::after {
          opacity: 0.5;
        }
      }

      .content-wrapper {
        transform: translateY(-5px);

        .full-bio {
          max-height: 500px;
          opacity: 1;
          margin-top: 1rem;
        }
      }
    }
  }
}

.about-work {
  background-color: rgba($secondary-color, 0.03);
  cursor: pointer;

  .floating-image {
    img {
      border-radius: 15px;
    }

    &::before {
      border-radius: 20px;
    }
  }

  &:hover {
    @media (min-width: 969px) {
      background-color: rgba($secondary-color, 0.05);

      .floating-image {
        transform: scale(0.9) rotate(-5deg);
        opacity: 0.85;

        img {
          box-shadow: 0 15px 30px rgba($secondary-color, 0.15);
        }

        &::before {
          inset: -15px;
          border-color: rgba($secondary-color, 0.2);
        }

        &::after {
          opacity: 0.5;
        }
      }

      .content-wrapper {
        transform: translateY(-5px);
      }
    }
  }

  .content-wrapper {
    position: relative;

    &::after {
      @media (min-width: 969px) {
        content: '→';
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        opacity: 0;
        transition: all 1s ease;
      }
    }

    &:hover::after {
      @media (min-width: 969px) {
        opacity: 1;
        right: 1.5rem;
      }
    }
  }
}

@media (max-width: 968px) {
  .about-section {
    height: auto;
    min-height: unset;
    padding: 1rem;
  }

  .section-container {
    grid-template-columns: 1fr;
    max-height: none;
    gap: 1rem;
  }

  .about-me, .about-work {
    flex-direction: column; 
    padding: 2rem;
    gap: 1.5rem;
    
    .floating-image {
      width: 100px;
      height: 100px;
      margin-bottom: 1rem; 
      flex-shrink: 0;
    }

    .content-wrapper {
      width: 100%; 
      padding: 0;
      text-align: center;
      
      h2 {
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
      }

      .preview-text {
        font-size: 1.1rem;
      }

      .full-bio {
        max-height: none;
        opacity: 1;
        margin-top: 1rem;
      }
    }
  }

  .about-work {
    .content-wrapper {
      display: flex;
      flex-direction: column; 
      align-items: center;
      gap: 0.25rem;

      h2 {
        width: 100%;
      }

      .preview-text {
        margin: 0;
      }
    }
  }
}
</style>
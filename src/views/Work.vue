<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import sangSouvenirImg from '@/assets/img/sang-souvenir-img.png'
import ombreArcEnCielImg from '@/assets/img/ombre-arc-en-ciel-img.png'
import immersionImg from '@/assets/img/barbara-zandoval-Dz5j0QKVUGY-unsplash.jpg'
import ComingSoonPopup from '@/components/NoInfo.vue'

const popup = ref(null)
const router = useRouter()

const works = [
  {
    id: 'work1',
    title: "Sang Souvenir",
    description: "À la suite de la Révolution sanglante au début du 22ème siècle, les humains et les vampires sont contraints de se cotoyer. La paix n'est pas à portée de main, et quand la science s'en mêle...",
    image: sangSouvenirImg,
    tags: ["Roman", "Science-fantasy", "Adulte", "Vampires"],
    online: true,
  },
  {
    id: 'work2',
    title: "L'Ombre sous l'Arc-en-ciel",
    description: "Cela fait fort longtemps que le monde tel que l'on connait a explosé. Pour s'assurer que cela ne se reproduise plus, la couleur de vos yeux déterminent désormais votre place dans la société.",
    image: ombreArcEnCielImg,
    tags: ["Roman", "Dystopie", "Young Adult", "Magie"],
    online: false
  },
  {
    id: 'work3',
    title: "Immersion",
    description: "Quand réalité et virtuel se rejoignent un peu trop...",
    image: immersionImg,
    tags: ["Nouvelle", "Littérature blanche", "Anticipation", "Addiction"],
    online: true
  }
]

const navigateToWork = (work) => {
  if (!work.online) {
    popup.value.show()
    return
  }
  router.push(`/textes/${work.title.toLowerCase()}`)
}


const goBack = () => {
  router.push('/')
}
</script>

<template>
  <ComingSoonPopup ref="popup" />
  <section class="work-section">
    <button class="back-button" @click="goBack">
      ←
    </button>
    <div class="content-wrapper">
      <h1 class="animate-in">Mes projets d'écriture</h1>
      <div class="work-grid">
        <article v-for="(work, index) in works" :key="work.id" class="work-item animate-in"
          :style="{ animationDelay: `${index * 0.1}s` }" @click="navigateToWork(work)">
          <div class="work-image">
            <img :src="work.image" :alt="work.title" />
          </div>
          <div class="work-content">
            <h2>{{ work.title }}</h2>
            <p>{{ work.description }}</p>
            <div class="work-tags">
              <span v-for="tag in work.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work-section {
  padding: 2rem;
  background-color: $background-color;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  padding: 2rem;

  h1 {
    @include heading-style;
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
}

.work-item {
  background: rgba($text-bg-color, 0.9);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba($primary-color, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba($primary-color, 0.25);

    .work-image img {
      transform: scale(1.05);
    }
  }

  .work-image {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .work-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
      color: $primary-color;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .description-container {
      flex: 1;
      margin-bottom: 1rem;
      
      p {
        color: $text-color;
        text-align: justify;
      }
    }
  }

  @media (max-width: 968px) {
    .work-image {
      height: 250px;
    }

    .work-content {
      h2 {
        font-size: 1.3rem; 
      }
    }
  }
}

.work-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;

  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba($primary-color, 0.1);
    color: $primary-color;
    border-radius: 15px;
    font-size: 0.875rem;
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
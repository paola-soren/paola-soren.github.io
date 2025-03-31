<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, onMounted, nextTick } from 'vue'
import ComingSoonPopup from '@/components/NoInfo.vue'

const popup = ref(null)
const router = useRouter()
const route = useRoute()

const works = {
  work1: {
    title: "Sang Souvenir",
    genre: "Urban Fantasy",
    summary: "Dans une société où humains et vampires tentent vainement de vivre ensemble, ce n’est pas l’existence des créatures nocturnes qui pose problème à Dennis, un mortel qui partage son quotidien avec un de ces êtres surnaturels. Ce qui ennuie le jeune homme, ce sont les étranges migraines dont il souffre et qui attirent trop d’attention sur lui, menaçant le secret qu’il garde.\nAprès un séjour forcé à l’hôpital, Dennis se voit contraint de révéler la vérité à Thomas, son compagnon : il est le fils d’un scientifique influent, qui se livre à des expérimentations à l'éthique douteuse auxquelles il a servi de cobaye.\nSe confier à Thomas est une chose mais quand Andrea, un vampire important dans le paysage politique, met à son tour le doigt sur son secret, Dennis entre dans une panique folle à l’idée de dire au revoir à son quotidien anonyme.",
    firstLines: "Cette nuit-là, moi qui n’avais pas versé la moindre larme depuis au moins mille ans, j’ai pleuré.\nPour vous, le 25 décembre 2105 a marqué la révélation de notre existence dans la violence et le sang. Mais pour moi, cette date a signé la véritable mort d’Horaha, âgé de quatre millénaires. Peut-être un peu plus, peut-être un peu moins ; à quoi bon compter ? Je pensais qu’il était éternel.",
    extract: "Les humains étaient pénibles parce que la peur guidait leurs actes. Les vampires étaient agaçants parce que leur sentiment de supériorité les incitait à agir comme des enfants pourris gâtés. Et, à lui, incombait la responsabilité de mettre de l’ordre dans ce merdier pour nourrir l’espoir d’une harmonie.",
    wordCount: "599 661 sec (99 559 mots)",
    status: "Terminé",
    mainCharacters: [
      {
        id: 'dennis',
        name: "Dennis",
        role: "Humain",
        image: "placeholder",
        shortDesc: "Réceptionniste dans une galerie d'expositions, Dennis est un jeune homme qui met tout en œuvre pour passer inaperçu",
        online: true
      },
      {
        id: 'andrea',
        name: "Andrea",
        role: "Vampire",
        image: "placeholder",
        shortDesc: "Quand ennui et responsabilités se mêlent, ça donne Andrea\u00A0: une créature dont la fainéantise n'a d'égal que sa puissance",
        online: true
      },
      {
        id: 'eva',
        name: "Eva",
        role: "Humaine",
        image: "placeholder",
        shortDesc: "Pourvue d'un optimisme à toute épreuve, Eva aime vivre au jour le jour. Elle aime aussi s'approcher de la mort et des sensations que cela lui apporte",
        online: true
      },
      {
        id: 'thomas',
        name: "Thomas",
        role: "Vampire",
        image: "placeholder",
        shortDesc: "Idéaliste trop pacifique pour son propre bien, Thomas est l'exemple que ses congénères devraient suivre pour atteindre l'harmonie",
        online: true
      }
    ]
  },
  work3: {
    title: "Immersion",
    genre: "Littérature blanche",
    summary: "Anna est une jeune femme qui rêve de mettre des étoiles dans son quotidien, et qui va y parvenir d'une façon bien singulière.",
    firstLines: "Si Anna vous racontait qu’elle avait enfin touché les étoiles, vous auriez tort de la croire.",
    wordCount: "10 566 sec (1761 mots)",
    status: "Terminé",
  }
}

const workId = Object.keys(works).find(
  key => works[key].title.toLowerCase() === route.params.id
)

const currentWork = computed(() => works[workId])

onMounted(async () => {
  await nextTick()
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
})

const goBack = () => {
  router.push('/textes')
}

const navigateToCharacter = (character) => {
  if (!character.online) {
    popup.value.show()
    return
  }

  router.push(`/personnages/${character.id}`)
}


const vIntersectionAnimate = {
  mounted: (el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('is-visible')
          }, 100)
          observer.unobserve(el)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    })

    observer.observe(el)
  }
}


const getEmblemContent = (role) => {
  const emblems = {
    vampire: '🩸',
    humain: '🧍‍♂️',
    humaine: '🧍‍♀️',
  };
  return emblems[role.toLowerCase()] || '👤';
};
</script>

<template>
  <ComingSoonPopup ref="popup" />
  <article class="work-detail">
    <button class="back-button" @click="goBack">
      ←
    </button>

    <div class="book-wrapper" v-if="currentWork">
      <div class="book-pages">
        <div class="book-page left-page">
          <div class="book-title-card">
            <h1 class="book-title animate-in">{{ currentWork.title }}</h1>

            <div class="basic-info animate-in" style="--delay: 0.2s">
              <div class="info-row">
                <span class="label">Genre</span>
                <span class="value">{{ currentWork.genre }}</span>
              </div>
              <div class="info-row">
                <span class="label">Statut</span>
                <span class="value">{{ currentWork.status }}</span>
              </div>
              <div class="info-row">
                <span class="label">Longueur</span>
                <span class="value">{{ currentWork.wordCount }}</span>
              </div>
            </div>
          </div>
          
        
          <div class="summary-section animate-in mobile-card" style="--delay: 0.4s">
            <h2>Résumé</h2>
            <p>{{ currentWork.summary }}</p>
          </div>
        </div>

        <div class="book-page right-page">
          <div class="first-lines-section animate-in mobile-card" style="--delay: 0.6s">
            <h2>Les premières lignes</h2>
            <div class="first-lines-content">
              <p>{{ currentWork.firstLines }}</p>
            </div>
          </div>
          
          <div v-if="currentWork.extract" class="extract-section animate-in mobile-card" style="--delay: 0.6s">
            <h2>Citation</h2>
            <div class="extract-content">
              <p>{{ currentWork.extract }}</p>
            </div>
          </div>
        </div>
      </div>

      <section v-if="currentWork.mainCharacters" class="characters-section">
    <h2 class="section-title animate-in" style="--delay: 0.8s">Personnages principaux</h2>
    <div class="characters-grid">
      <div v-for="(character) in currentWork.mainCharacters" 
           :key="character.id" 
           class="character-card"
           v-intersection-animate>
        <div class="character-header">
          <h3 class="character-name">{{ character.name }}</h3>
          <span class="character-role">{{ character.role }}</span>
        </div>
        <div class="character-desc">{{ character.shortDesc }}</div>
        <button 
          class="character-cta" 
          @click="navigateToCharacter(character)"
          :class="{ 'disabled': !character.online }">
          <span>Fiche personnage</span>
          <span class="arrow">→</span>
        </button>
      </div>
    </div>
  </section>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.work-detail {
  min-height: 100vh;
  padding: 2rem;
  background-color: $background-color;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem; 
  }
}

.back-button {
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: $primary-color;
  margin-bottom: 2rem;
  
  &:hover {
    transform: translateX(-3px);
  }
}

.book-wrapper {
  max-width: 1200px;
  margin: 2rem auto;
  padding-top: 2rem;
  
  @media (max-width: 768px) {
    margin: 1rem auto;
    padding-top: 0;
    width: 100%;
  }
}

.book-pages {
  display: flex;
  gap: 2rem;
  background: rgba($text-bg-color, 0.95);
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  position: relative;
  margin-bottom: 4rem;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: rgba($primary-color, 0.1);
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    background: transparent;
    box-shadow: none;
    padding: 0;
    margin-bottom: 1.5rem;
    
    &::before {
      display: none;
    }
  }
}

.book-page {
  flex: 1;
  padding: 1rem;
  
  @media (max-width: 768px) {
    padding: 0;
  }
}

.book-title {
  font-size: 2.5rem;
  color: $primary-color;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
}

.extract-content,
.first-lines-content {
  font-style: italic;
  padding: 1rem;
  background: rgba($primary-color, 0.05);
  border-left: 3px solid $primary-color;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    border-left: none;
    border-top: 3px solid $primary-color;
  }
}

@media (max-width: 768px) {
  .book-title-card {
    background: rgba($text-bg-color, 0.98);
    border-radius: 15px;
    padding: 1.5rem;
    margin: 0 auto 1.5rem;
    box-shadow: 0 10px 30px rgba($primary-color, 0.15);
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .mobile-card {
    background: rgba($text-bg-color, 0.98);
    border-radius: 15px;
    padding: 1.5rem;
    margin: 0 auto 1.5rem;
    box-shadow: 0 10px 30px rgba($primary-color, 0.15);
    width: 100%;
    max-width: 100%; 
    box-sizing: border-box; 
    
    h2 {
      margin-top: 0;
      text-align: center;
      margin-bottom: 1.25rem;
    }
  }
}

.basic-info {
  margin-bottom: 2rem;

  .info-row {
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;

    .label {
      min-width: 100px;
      color: $accent-color;
      font-weight: 500;
    }
    
    .value {
      flex: 1;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    
    .info-row {
      padding: 0.25rem 0;
    }
  }
}

.summary-section,
.extract-section,
.first-lines-section {
  h2 {
    color: $primary-color;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
  }

  p {
    line-height: 1.8;
    font-size: 1.1rem;
  }
}

.summary-section p,
.extract-content p,
.first-lines-content p {
  white-space: pre-line;
}

.characters-section {
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    margin-top: 0;
  }

  .section-title {
    text-align: center;
    font-size: 2rem;
    color: $primary-color;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  }
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }
}

.character-card {
  background: $text-bg-color;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba($primary-color, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s ease;
  height: 100%;
  border: 1px solid rgba($primary-color, 0.1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba($primary-color, 0.2);
    
    .character-cta {
      background: rgba($primary-color, 0.1);
      
      .arrow {
        transform: translateX(5px);
      }
    }
  }
}

.character-header {
  padding: 1.2rem 1.2rem 0.8rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1.2rem;
    right: 1.2rem;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba($primary-color, 0.3), transparent);
  }
}

.character-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: $primary-color;
  margin: 0 0 0.5rem;
  font-family: 'Playfair Display', serif;
}

.character-role {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
  background: rgba($primary-color, 0.08);
  border-radius: 12px;
  color: $secondary-color;
}

.character-desc {
  padding: 1.2rem;
  line-height: 1.5;
  color: $text-color;
  font-size: 0.95rem;
  flex-grow: 1;
  position: relative;
}

.character-cta {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.2rem;
  background: rgba($primary-color, 0.05);
  border: none;
  color: $primary-color;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: background 0.3s ease;
  
  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .arrow {
    transition: transform 0.3s ease;
  }
}

.animate-in {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s ease-out forwards;
  animation-delay: var(--delay, 0s);
  
  @media (max-width: 768px) {
    transform: translateY(-20px);
    animation-name: fadeIn;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
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
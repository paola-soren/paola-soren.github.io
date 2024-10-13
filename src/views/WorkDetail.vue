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
    wordCount: "624 975 sec (103 411 mots)",
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

          <div class="summary-section animate-in" style="--delay: 0.4s">
            <h2>Résumé</h2>
            <p>{{ currentWork.summary }}</p>
          </div>
        </div>

        <div class="book-page right-page">
          <div class="first-lines-section animate-in" style="--delay: 0.6s">
            <h2>Les premières lignes</h2>
            <div class="first-lines-content">
              <p>{{ currentWork.firstLines }}</p>
            </div>
          </div>
          <div v-if=currentWork.extract class="extract-section animate-in" style="--delay: 0.6s">
            <h2>Citation</h2>
            <div class="extract-content">
              <p>{{ currentWork.extract }}</p>
            </div>
          </div>
        </div>
      </div>

      <section v-if=currentWork.mainCharacters class="characters-section">
        <h2 class="section-title animate-in" style="--delay: 0.8s">Personnages principaux</h2>
        <div class="characters-grid">
          <div v-for="(character) in currentWork.mainCharacters" :key="character.id" class="character-card"
            v-intersection-animate>
            <div class="card-frame">
              <div class="character-emblem" :class="character.role.toLowerCase()"
                v-html="getEmblemContent(character.role)"></div>
              <div class="character-info">
                <h3>{{ character.name }}</h3>
                <span class="character-role">{{ character.role }}</span>
              </div>
            </div>
            <p class="character-desc">{{ character.shortDesc }}</p>
            <div class="card-footer" @click="navigateToCharacter(character)">
              <span class="view-profile">En savoir plus</span>
            </div>
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
}

.book-wrapper {
  max-width: 1200px;
  margin: 4rem auto;
  padding-top: 2rem;
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
}

.book-page {
  flex: 1;
  padding: 1rem;
}

.book-title {
  font-size: 2.5rem;
  color: $primary-color;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
}

.basic-info {
  margin-bottom: 2rem;

  .info-row {
    display: flex;
    margin-bottom: 0.5rem;

    .label {
      width: 100px;
      color: $accent-color;
      font-weight: 500;
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

.extract-content,
.first-lines-content {
  font-style: italic;
  padding: 1rem;
  background: rgba($primary-color, 0.05);
  border-left: 3px solid $primary-color;
  border-radius: 5px;
}

.summary-section p,
.extract-content p,
.first-lines-content p {
  white-space: pre-line;
}

.characters-section {
  margin-top: 4rem;

  .section-title {
    text-align: center;
    font-size: 2rem;
    color: $primary-color;
    margin-bottom: 2rem;
  }
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.character-card {
  background: $text-bg-color;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba($primary-color, 0.15);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba($primary-color, 0.25);

    .card-frame::before {
      opacity: 1;
    }

    .character-emblem {
      transform: scale(1.1);
    }

    .view-profile {
      color: $primary-color;
      font-size: 1.1rem;
    }
  }

  .card-frame {
    background: linear-gradient(45deg, $primary-color, $secondary-color);
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at top left, transparent 30%, rgba(0, 0, 0, 0.2) 90%),
        radial-gradient(circle at bottom right, transparent 30%, rgba(0, 0, 0, 0.2) 90%);
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }
  }

  .character-emblem {
    width: 60px;
    height: 60px;
    background: $text-bg-color;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: $primary-color;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
    margin-right: 1rem;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid $primary-color;
      top: -3px;
      left: -3px;
      opacity: 0.5;
    }
  }

  .character-info {
    color: $text-bg-color;
    position: relative;
    z-index: 1;
    flex-grow: 1;

    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .character-role {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba($text-bg-color, 0.2);
      border-radius: 15px;
      font-size: 0.875rem;
      backdrop-filter: blur(5px);
    }
  }

  .character-desc {
    flex-grow: 1;
    padding: 1.5rem;
    line-height: 1.6;
    color: $text-color;
    font-style: italic;
    position: relative;

    &::before,
    &::after {
      content: '✧';
      position: absolute;
      font-size: 1.5rem;
      color: rgba($primary-color, 0.3);
      line-height: 1;
    }

    &::before {
      top: 0.5rem;
      left: 0.5rem;
    }

    &::after {
      bottom: 0.5rem;
      right: 0.5rem;
      transform: rotate(180deg);
    }
  }

  .card-footer {
    padding: 1rem;
    text-align: center;
    background: rgba($primary-color, 0.05);
    border-top: 1px solid rgba($primary-color, 0.1);
    cursor: pointer;

    .view-profile {
      font-weight: bold;
      color: $secondary-color;
      transition: color 0.3s ease;
    }
  }
}

.animate-in {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s ease-out forwards;
  animation-delay: var(--delay, 0s);
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

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .book-pages {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;

    &::before {
      width: 100%;
      height: 4px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }

  .book-page {
    flex: 1;
    padding: 1rem;
    overflow: hidden;
    height: auto;
    min-height: 0;
  }

  .left-page {
    margin-bottom: 2.5rem;
  }

  .back-button {
    position: static;
    margin-bottom: 2rem;
  }

  .characters-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}
</style>
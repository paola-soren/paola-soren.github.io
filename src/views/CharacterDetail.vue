<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import ComingSoonPopup from '@/components/NoInfo.vue'

const popup = ref(null)
const router = useRouter()
const route = useRoute()

const expandedSections = ref({
  basicInfo: false,
  physicalDesc: false,
  personality: false,
  background: false,
  relationships: false,
  quotes: false
})

const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}

const characters = {
  'dennis': {
    name: "Dennis",
    title: "Humain",
    gender: "♂",
    age: 25,
    birthday: "07/08/2102",
    occupation: "Réceptionniste",
    nationality: "Français",
    physicalDesc: {
      height: "1m59",
      hair: "Brun foncé",
      eyes: "Brun foncé",
      distinguishingFeatures: "Porte des lunettes à la monture épaisse\n Ne porte que des vêtements amples en dehors du travail"
    },
    personality: {
      traits: [
        "Discret et réservé",
        "Très cultivé, surtout dans le domaine de l'art",
        "Excessivement méfiant",
        "Parle peu, s'exprime principalement avec des phrases courtes"
      ],
      quirks: "Adore les patisseries",
      fears: "Être intérrogé sur son enfance",
      dreams: "Vivre tranquille le plus longtemps possible"
    },
    background: "Un passé caché pour un présent fragile\n\nDennis n'a pas de famille, du moins c'est ce qu'il vous dira. Même ses proches en savent peu sur sa vie passée\u00A0: où a-t-il grandi\u00A0? A-t-il fait des études\u00A0? Pourquoi souffre-t-il de migraines étranges et, surtout, pourquoi refuse-t-il de consulter le corps médical à ce sujet\u00A0? Ce sont tant de questions auxquelles il s'entêtera de ne pas répondre jusqu'à ne plus avoir le choix.\n Pourtant, derrière son masque solitaire se cache un homme qui meurt d'envie de créer des connexions. Pour les rares personnes parvenues à percer sa carapace, il est prêt à lutter contre son instinct d'autoprotection, au risque de se rendre trop vulnérable.\n Même s'il n'y parvient pas toujours...",
    // abilities: [
    //   {
    //     name: "nom de la magie",
    //     description: "blabla"
    //   },
    relationships: [
      {
        name: "Thomas",
        description: "En couple",
        type: "love"
      },
      {
        name: "Eva",
        description: "Meilleure amie et collègue",
        type: "friendship"
      }
    ],
    quotes: [
      "— Je n’ai pas passé toutes ces années à apprendre à garder la face, pour perdre mon sang-froid sur quelque chose d’aussi insignifiant…",
      "Il existait tant d’humains bien plus toxiques que les créatures nocturnes contre lesquelles ils luttaient avec tant de hargne. Et Dennis était bien placé pour le savoir."
    ],
  },
  'andrea': {
    name: "Andrea",
    title: "Vampire",
    gender: "♂",
    age: 3000,
    birthday: "Aux alentours du début du 9e siècle ACN",
    occupation: "Chef de la diplomatie interraciale",
    nationality: "Phénicien",
    physicalDesc: {
      height: "1m92",
      hair: "Noir",
      eyes: "Vert foncé",
      distinguishingFeatures: "Apparence adolescente...\n...et allure négligée"
    },
    personality: {
      traits: [
        "Confiant",
        "Cynique",
        "Observateur",
        "Sadique",
      ],
      quirks: "Partisan de la loi du moindre effort",
      fears: "Rien",
      dreams: "Retourner à sa vie d'avant, exempte de responsabilités"
    },
    background: "Quand l'immortalité n'est pas un cadeau\n\nEn trois millénaires, on est témoin d'un nombre incaculable de choses, y compris des atrocités et de la stupidité des autres. Andrea l'a bien compris et a vite décidé de vivre son existence de vampire le plus passivement possible. Et sans la mort de son mentor, il aurait continué à suivre ce principe jusqu'à la fin de ses jours.\n Créature millénaire que tout ennuie, son irritabilité et son impatience reflètent son désir profond de retourner à sa vie d'avant. Aujourd'hui, prisonnier d'une hiérarchie et de sa loyauté, il trouve refuge dans la provocation et le conflit avec l'autorité.",
    // abilities: [
    //   {
    //     name: "nom de la magie",
    //     description: "blabla"
    //   },
    relationships: [
      {
        name: "Eva",
        description: "Passe-temps, source de nourriture",
        type: "other"
      }
    ],
    quotes: [
      "— C’est connu, je prends toujours la peine de me déplacer pour des gens qui m’intéressent pas, ironisa-t-il",
      "De toute manière, pas une âme n’oserait émettre la moindre protestation et il tirait allégrement avantage des privilèges octroyés par son statut, dont il aurait préféré ne jamais jouir ; mais puisqu’il en bénéficiait, autant l’utiliser.",
    ],
  },
  'eva': {
    name: "Eva",
    title: "Humaine",
    gender: "♀",
    age: 30,
    birthday: "02/04/2097",
    occupation: "Barmaid",
    nationality: "Franco-mexicaine",
    physicalDesc: {
      height: "1m73",
      hair: "Brun cuivré",
      eyes: "Vert clair",
      distinguishingFeatures: "Habille souvent son cou de bijoux ou de tissu pour cacher les marques de morsures"
    },
    personality: {
      traits: [
        "Respire la joie de vivre",
        "Curieuse",
        "Sociable",
        "Naïve",
      ],
      quirks: "A la langue (un peu trop) bien pendue",
      fears: "Ne pas pouvoir aider les autres",
      dreams: "Profiter de l'instant présent en dépit des dangers"
    },
    background: "Pas de vie sans la mort\n\nEva est fascinée par les vampires. Elle s'était d'abord destinée à des études de biologie dans l'espoir de pouvoir les étudier et les comprendre mieux, mais le destin en a voulu autrement. Après avoir échappé à la mort, elle a décidé de rester aux commandes du bar où elle travaille, lieu capable de faire ressortir le meilleur mais surtout le pire de tout un chacun.\nSa vie est guidée par un étrange paradoxe: rien n'est plus important que de vivre sa vie au jour le jour, mais la sensation d'être au bord du prépice est celle qui la rend la plus vivante.",
    // abilities: [
    //   {
    //     name: "nom de la magie",
    //     description: "blabla"
    //   },
    relationships: [
      {
        name: "Dennis",
        description: "Meilleur ami et collègue",
        type: "friendship",
      },
      {
        name: "Andrea",
        description: "Centre d'intérêt, passe-temps",
        type: "other"
      },
      {
        name: "Thomas",
        description: "Complice et ami",
        type: "friendship"
      },
    ],
    quotes: [
      "— Non, j’ai des trucs à faire et puis, si tu me vois tous les soirs, tu vas en avoir marre de moi.",
      "Qui ne se cachait pas derrière un masque, après tout ? Qui oserait prétendre être exempt de secrets ? Pas elle."
    ],
  },
  'thomas': {
    name: "Thomas",
    title: "Vampire",
    gender: "♂",
    age: 30,
    birthday: "18/03/1817",
    occupation: "Architecte et conférencier",
    nationality: "Anglais",
    physicalDesc: {
      height: "1m80",
      hair: "Blond",
      eyes: "Bleu clair",
      distinguishingFeatures: "Ses cheveux sont le plus souvent attachés en queue de cheval ou tressés\net il n'utilise que des rubans pour le faire."
    },
    personality: {
      traits: [
        "Théatral",
        "Altruiste et désintéressé",
        "Optimiste",
        "Pacifique",
      ],
      quirks: "Parle de manière soutenue",
      fears: "Renoncer à l'amour",
      dreams: "Pouvoir être témoin d'une société où règne l'harmonie"
    },
    background: "Un immortel au coeur trop tendre\n\nNé dans un Londres homophobe, Thomas a renoncé à sa première vie dans l'espoir que la suivante lui offre ce dont il manquait. Il est resté dans l'ombre durant des siècles, jusqu'à ce que la Révolution sanglante ne le projette de force dans une nouvelle lumière et lui donne l'occasion de regoûter à certains plaisirs de la vie.\nPacifiste convaincu et romantique dans l'âme, sa nature altruiste le rend vulnérable à la manipulation.",
    // abilities: [
    //   {
    //     name: "nom de la magie",
    //     description: "blabla"
    //   },
    relationships: [
      {
        name: "Dennis",
        description: "En couple",
        type: "love"
      },
      {
        name: "Eva",
        description: "Complice et amie",
        type: "friendship"
      }
    ],
    quotes: [
      "— Dans quelles réflexions profondes t’es-tu encore égaré ? Tout cela est attristant, concentre-toi davantage sur moi ! lui lança soudainement Thomas, pour le sortir de ses pensées.",
      "Le vampire était fleur bleue, et disposer de l’éternité devant lui ne le privait pas de savourer pleinement chacun de ces moments d’intimité comme s’il s’agissait du dernier."
    ],
  },
}

const currentCharacter = computed(() => characters[route.params.id])

const goBack = () => {
  router.push('/textes')
}

const navigateToCharacter = (character) => {
  const name = character.name.toLowerCase()
  router.push(`/personnages/${name}`)
}

const translations = {
  height: 'Taille',
  hair: 'Cheveux',
  eyes: 'Yeux',
  distinguishingFeatures: 'Autres',
}

const getRelationSymbol = (type) => {
  const typeMap = {
    'love': '♥',
    'friendship': '★',
    'other': '✧'
  }
  return typeMap[type.toLowerCase()] || '✧'
}
</script>

<template>
  <ComingSoonPopup ref="popup" />
  <article class="character-sheet">
    <button class="back-button" @click="goBack">
      ←
    </button>

    <div class="character-wrapper" v-if="currentCharacter">
      <header class="character-header">
        <div class="character-title-block">
          <h1>{{ currentCharacter.name }}</h1>
          <div class="title-decoration">
            <span class="decoration-line"></span>
            <span class="decoration-dot"></span>
            <span class="decoration-line"></span>
          </div>
        </div>
      </header>
      
      <div class="character-content">
        <section class="content-section basic-info mobile-section">
          <h2 @click="toggleSection('basicInfo')" class="section-header">
            Fiche d'identité
            <span class="toggle-icon">{{ expandedSections.basicInfo ? '▼' : '▶' }}</span>
          </h2>
          <div class="section-content" :class="{ 'expanded': expandedSections.basicInfo }">
            <div class="info-grid">
              <div class="info-item">
                <span class="label">Race</span>
                <span class="value">{{ currentCharacter.title }}</span>
              </div>
              <div class="info-item">
                <span class="label">Genre</span>
                <span class="value">{{ currentCharacter.gender }}</span>
              </div>
              <div class="info-item">
                <span class="label">Age</span>
                <span class="value">{{ currentCharacter.age }}</span>
              </div>
              <div class="info-item">
                <span class="label">Date de naissance</span>
                <span class="value">{{ currentCharacter.birthday }}</span>
              </div>
              <div class="info-item">
                <span class="label">Emploi</span>
                <span class="value">{{ currentCharacter.occupation }}</span>
              </div>
              <div class="info-item">
                <span class="label">Nationalité</span>
                <span class="value">{{ currentCharacter.nationality }}</span>
              </div>
            </div>
          </div>
        </section>

        <div class="two-column-layout">
          <section class="content-section physical-desc mobile-section">
            <h2 @click="toggleSection('physicalDesc')" class="section-header">
              Physique
              <span class="toggle-icon">{{ expandedSections.physicalDesc ? '▼' : '▶' }}</span>
            </h2>
            <div class="section-content" :class="{ 'expanded': expandedSections.physicalDesc }">
              <div class="description-list">
                <div v-for="(value, key) in currentCharacter.physicalDesc" :key="key" class="desc-item">
                  <span class="label">{{ translations[key] || key }}</span>
                  <span class="value">{{ value }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="content-section personality mobile-section">
            <h2 @click="toggleSection('personality')" class="section-header">
              Caractère
              <span class="toggle-icon">{{ expandedSections.personality ? '▼' : '▶' }}</span>
            </h2>
            <div class="section-content" :class="{ 'expanded': expandedSections.personality }">
              <div class="personality-content">
                <div class="traits-list">
                  <h3>Traits de personnalité</h3>
                  <ul>
                    <li v-for="trait in currentCharacter.personality.traits" :key="trait">
                      {{ trait }}
                    </li>
                  </ul>
                </div>
                <div class="personality-details">
                  <div class="detail-item">
                    <h3>Particularités</h3>
                    <p>{{ currentCharacter.personality.quirks }}</p>
                  </div>
                  <div class="detail-item">
                    <h3>Redoute</h3>
                    <p>{{ currentCharacter.personality.fears }}</p>
                  </div>
                  <div class="detail-item">
                    <h3>Objectif</h3>
                    <p>{{ currentCharacter.personality.dreams }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section class="content-section background mobile-section">
          <h2 @click="toggleSection('background')" class="section-header">
            En quelques mots...
            <span class="toggle-icon">{{ expandedSections.background ? '▼' : '▶' }}</span>
          </h2>
          <div class="section-content" :class="{ 'expanded': expandedSections.background }">
            <div class="background-content">
              <p>{{ currentCharacter.background }}</p>
            </div>
          </div>
        </section>

        <div class="two-column-layout">
          <section class="content-section relationships mobile-section">
            <h2 @click="toggleSection('relationships')" class="section-header">
              Liens
              <span class="toggle-icon">{{ expandedSections.relationships ? '▼' : '▶' }}</span>
            </h2>
            <div class="section-content" :class="{ 'expanded': expandedSections.relationships }">
              <div class="relationships-list">
                <div v-for="relation in currentCharacter.relationships" 
                    :key="relation.name" 
                    class="relationship-item"
                    :class="`relation-type-${relation.type.toLowerCase()}`"
                    @click="navigateToCharacter(relation)">
                  <span class="relation-name">{{ relation.name }}</span>
                  <span class="relation-symbol">{{ getRelationSymbol(relation.type) }}</span>
                  <span class="relation-type">{{ relation.description }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="content-section quotes mobile-section">
            <h2 @click="toggleSection('quotes')" class="section-header">
              Citation
              <span class="toggle-icon">{{ expandedSections.quotes ? '▼' : '▶' }}</span>
            </h2>
            <div class="section-content" :class="{ 'expanded': expandedSections.quotes }">
              <div class="quotes-list">
                <div v-for="(quote, index) in currentCharacter.quotes" :key="index" class="quote-item">
                  "{{ quote }}"
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.character-sheet {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23592B3D' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  padding: 2rem;
  color: $text-color;
}

.character-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  background: $background-color;
  border: 2px solid $primary-color;
  border-radius: 15px;
  box-shadow: 0 0 15px $frame-color;
  padding: 2rem;
}

.character-header {
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    color: $primary-color;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  .title-decoration {
    display: flex;
    align-items: center;
    justify-content: center;
    
    .decoration-line {
      height: 2px;
      width: 100px;
      background: $primary-color;
    }
    
    .decoration-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: $primary-color;
      margin: 0 10px;
    }
  }
}

.character-content {
  white-space: pre-line;
}

.content-section {
  background: $text-bg-color;
  border: 1px solid $primary-color;
  border-radius: 15px; 
  margin-bottom: 2rem;
  padding: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 1px dashed $primary-color;
    border-radius: 12px;
    pointer-events: none;
  }

  h2 {
    color: $primary-color;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    text-align: center;
  }
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.info-grid, .description-list {
  display: grid;
  gap: 1rem;
}

.info-item, .desc-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $secondary-color;
  padding-bottom: 0.5rem;

  .label {
    font-weight: bold;
    color: $secondary-color;
  }
}

.desc-item .value {
  max-width: 50%;
  text-align: right;
}

.personality-content {
  .traits-list {
    ul {
      list-style-type: none;
      padding-left: 0;

      li::before {
        content: '✧';
        color: $secondary-color;
        margin-right: 0.5rem;
      }
    }
  }
}

.relationships-list {
  .relationship-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .relation-name {
      font-weight: bold;
      margin-right: 1rem;
      color: $secondary-color;
      cursor: pointer;
    }

    .relation-symbol {
      font-size: 1.2rem;
      margin-right: 1rem;
      color: $accent-color;
    }
  }
}

.quotes-list {
  .quote-item {
    font-style: italic;
    margin-bottom: 1rem;
    padding: 1rem;
    background: $frame-color;
    border-left: 3px solid $primary-color;
    border-radius: 10px; 
  }
}

@media (min-width: 769px) {
  .section-content {
    display: block !important;
    max-height: none !important;
    opacity: 1 !important;
    overflow: visible !important;
  }
  
  .toggle-icon {
    display: none;
  }
  
  .section-header {
    cursor: default !important;
    font-family: 'Playfair Display', serif;
  }
}

@media (max-width: 768px) {
  .character-content {
    display: flex;
    flex-direction: column;
  }
  
  .two-column-layout {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  
  .mobile-section {
    margin-bottom: 1rem;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 0;
    font-family: 'Playfair Display', serif;
    margin: 0 !important;
    text-align: left !important;
    
    .toggle-icon {
      font-size: 1.5rem;
      font-weight: bold;
      color: $primary-color;
    }
  }
  
  .section-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
  opacity: 0;
  
    &.expanded {
      max-height: 2000px;
      opacity: 1;
    }
  }

  .character-wrapper,
  .character-sheet {
    padding: 1rem;
  }

  .quotes-list {
    .quote-item {
      border-top: 3px solid $primary-color;
      border-left: none;
    }
  }

  .info-item, .desc-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    .label {
      margin-bottom: 0.5rem;
    }
    
    .value {
      max-width: 100%;
      text-align: center;
    }
  }
  
  .relationships-list {
    .relationship-item {
      flex-direction: column;
      align-items: center;
      padding-bottom: 1rem;
      margin-bottom: 0.8rem; 
      
      .relation-name {
        margin-right: 0;
        margin-bottom: 0.3rem;
      }
      
      .relation-symbol {
        margin-right: 0;
        margin-bottom: 0.3rem;
        line-height: 1;
      }
      
      .relation-type {
        text-align: center;
      }
    }
  }
}
</style>
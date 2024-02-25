<template>
  <div class="site-wrapper">
    <header>
    <LogoContainer />
    </header>
    <main @click="pick">
      <SentenceViewer :sentence="picked"/>
    </main>
    <footer>
      <p>© {{ year }} Correction Chaude</p>
      <p>Fait avec humour par <a href="https://github.com/Grimille" target="_blank">Grimille</a></p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { type Sentence } from '~/types/Sentence';
import { computed, onBeforeMount } from 'vue';
import dataset from '~/assets/dataset.json';

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000091' }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'description', content: 'Marre des anglicisme au bureau ? Correction Chaude est là pour t\'aider à trouver des alternatives en français !' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://correctionchaude.fr' },
    { property: 'og:title', content: 'Correction Chaude — Corrige les angliscismes de tes collègues !' },
    { property: 'og:description', content: 'Marre des anglicisme au bureau ? Correction Chaude est là pour t\'aider à trouver des alternatives en français !' },
    { property: 'og:image', content: 'https://correctionchaude.fr/correction-chaude-meta.jpg' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://correctionchaude.fr' },
    { property: 'twitter:title', content: 'Correction Chaude — Corrige les angliscismes de tes collègues !' },
    { property: 'twitter:description', content: 'Marre des anglicisme au bureau ? Correction Chaude est là pour t\'aider à trouver des alternatives en français !' },
    { property: 'twitter:image', content: 'https://correctionchaude.fr/correction-chaude-meta.jpg' }
  ],
  title: 'Correction Chaude — Corrige les angliscismes de tes collègues !',
});

const sentences = ref<Record<string, string>>(dataset);
const picked = ref<Sentence | undefined>(undefined);
const year = computed(() => new Date().getFullYear());

let currentIndex: number = -1;

const pick = () => {
  const keys = Object.keys(sentences.value);
  const length = keys.length;
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * length);
  } while (randomIndex === currentIndex);
  
  picked.value = {
    bad: keys[randomIndex],
    good: sentences.value[keys[randomIndex]]
  };
  currentIndex = randomIndex;
}

onBeforeMount(() => {
  pick();
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  background: #F9F8F6;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: bangers;
  color: $black;
  overflow: hidden;
  font-size: 16px;
}

#__nuxt {
  height: 100%;
}

.site-wrapper {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  padding: 1em;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }

  main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  footer {
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

a {
  color: $blue;
}
</style>

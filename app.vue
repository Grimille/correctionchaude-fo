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
      <p>Fait avec humour par Grimille</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue';
import { type Sentence } from '~/types/Sentence';
import dataset from '~/assets/dataset.json';

const sentences = ref<Record<string, string>>(dataset);
const picked = ref<Sentence | undefined>(undefined);
const year = computed(() => new Date().getFullYear());

const pick = () => {
  const keys = Object.keys(sentences.value);
  const length = keys.length;
  const randomIndex = Math.floor(Math.random() * length);

  picked.value = {
    bad: keys[randomIndex],
    good: sentences.value[keys[randomIndex]]
  };
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
</style>

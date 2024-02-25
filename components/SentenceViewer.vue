<template>
  <div class="sentence-viewer" v-if="picked">
    <span class="not-french">{{ picked.key }}</span>
    <span class="french" v-html="styledPickedValue"></span>
  </div>
</template>

<script lang="ts" setup>
import dataset from '~/assets/dataset.json';
import { onBeforeMount, ref } from 'vue';

type Sentence = {
  key: string,
  value: string
};

const picked = ref<Sentence>();
const pick = () => {
  const keys = Object.keys(dataset);
  const length = keys.length;
  const randomIndex = Math.floor(Math.random() * length);
  
  picked.value = {
    key: keys[randomIndex],
    value: dataset[keys[randomIndex]]
  };
}

const styledPickedValue = computed(() => {
  return picked.value?.value;
});

onBeforeMount(() => {
  pick();
});
</script>

<style lang="scss" scoped>

.sentence-viewer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: bangers;
  font-size: 2em;
  color: $black;
  text-align: center;
  margin: 1em 0;

  .not-french {
    position: relative;
    margin-right: 0.5em;
    font-size: $font__size__xxl;

    &::after {
      position: absolute;
      top: calc(50% - 2px); left: 0;
      content: '';
      width: 100%;
      height: 4px;
      background-color: $red;
      transform: rotate(-2.5deg) scale3d(1.1, 1, 1);
    }
  }

  .french {
    font-family: barrio;
    font-size: $font__size__3xl;
  }
}
</style>
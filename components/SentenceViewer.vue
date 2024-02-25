<template>
  <div class="sentence-viewer" v-if="sentence">
    <span class="not-french">{{sentence.bad }}</span>
    <span class="french" v-html="renderedGoodSentence"></span>
  </div>
</template>

<script lang="ts" setup>
import { type Sentence } from '~/types/Sentence';

const props = withDefaults(defineProps<{ sentence: Sentence }>(), {
  sentence: undefined
});

const RENDER_AS_FRENCH = true;
const renderedGoodSentence = computed(() => {
  if (!RENDER_AS_FRENCH) {
    return props.sentence?.good;
  }

  const chars = props.sentence?.good.split('');
  const colourMapping = [
    'blue',
    'red',
    'white'
  ];
  let lastIndex = -1;
  
  const randomColour = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * colourMapping.length);
    }
    while(lastIndex === randomIndex);

    lastIndex = randomIndex;
    return colourMapping[randomIndex];
  };

  return chars?.map((char) => {
    const colour = char !== ' ' ? randomColour(): '';
    return `<span class="${colour}">${char}</span>`;
  }).join('');
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
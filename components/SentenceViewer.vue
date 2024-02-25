<template>
  <div class="sentence-viewer" v-if="sentence">
    <span class="not-french">{{sentence.bad }}</span>
    <span class="french" v-html="renderedGoodSentence"></span>
  </div>
</template>

<script lang="ts" setup>
import { type Sentence } from '~/types/Sentence';
import { useFrenchify } from '~/composables/useFrenchify';

const props = withDefaults(defineProps<{ sentence: Sentence }>(), {
  sentence: undefined
});

const RENDER_AS_FRENCH = true;
const renderedGoodSentence = computed(() => {
  if (!RENDER_AS_FRENCH) {
    return props.sentence?.good;
  }

  return useFrenchify(props.sentence?.good);
});
</script>

<style lang="scss" scoped>
.sentence-viewer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: bangers;
  color: $black;
  text-align: center;
  margin: 1em 0;
  max-width: 960px;

  .not-french {
    position: relative;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
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

@media screen and (max-width: 768px){
  .sentence-viewer {
    .not-french {
      font-size: $font__size__xl;
    }

    .french {
      font-size: $font__size__xxl;
    }
  }
}

@media screen and (max-width: 480px){
  .sentence-viewer {
    .not-french {
      font-size: $font__size__large;
    }

    .french {
      font-size: $font__size__xl;
    }
  }
}
</style>
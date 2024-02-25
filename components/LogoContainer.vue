<template>
  <div class="logo-container">
    <img id="logo" src="/img/logo_correction_chaude.svg" alt="logo correction chaude" />
    <div class="brand-container">
      <h1 class="brand-name">Correction Chaude</h1>
      <span class="brand-tagline">Parce que parler la France au bureau, c'est bien !</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  font-family: barrio;

  #logo {
    width: 3em;
    margin-right: 0.5em;
  }

  .brand-container {
    .brand-name {
      margin: 0;
      font-size: $font__size__medium;
      color: $black;
    }
    .brand-tagline {
      font-family: bangers, sans-serif;
      font-size: $font__size__normal;
      color: lighten($black, 20);
    }
  }
}
</style>
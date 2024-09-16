<template>
  <div class="overlapping-grid">
    <div class="yellow"></div>
    <div class="black"></div>
    <div class="blue"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.overlapping-grid {
  display: grid;
  grid-template-columns: 4fr 1fr 2fr 1fr 2fr;
  max-width: 600px;
  padding: 1rem;
}

.yellow,
.black,
.blue {
  height: 225px;
  border-radius: 2rem;
}

.yellow {
  background-color: yellow;
  grid-column: 1 / 3;
  grid-row: 1 / span 2;
  z-index: 1;
}

.black {
  background-color: #313131;
  grid-column: 2 / 5;
  grid-row: 2 / span 3;
  z-index: 2;
}

.blue {
  z-index: 1;
  background-color: blueviolet;
  grid-column: 4 / 6;
  grid-row: 3 / span 4;
}
</style>

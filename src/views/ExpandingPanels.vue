<template>
  <div class="panels">
    <img src="../assets/коа_арт_пнг/аедирн_ком.png" alt="аедирн" />
    <img src="../assets/коа_арт_пнг/атре_ком.png" alt="аттре" />
    <img src="../assets/коа_арт_пнг/бремервоорд_ком.png" alt="бреммервоорд" />
    <img src="../assets/коа_арт_пнг/бругге_ком.png" alt="бругге" />
    <img src="../assets/коа_арт_пнг/верден_ком.png" alt="верден" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.panels {
  display: grid;
  width: calc(100vw - 2rem);
  border: 5px solid green;
  grid-template-columns: repeat(5, auto);
  /* aspect-ratio: 1; */
}

.panels > img {
  cursor: pointer;
  transition: 0.5s linear;
  object-fit: contain;
  border: 2px solid black;
  width: 0;
  height: 350px;
  min-height: 100%;
  min-width: 100%;
}

.panels > img:hover {
  width: 350px;
}
</style>

<template>
  <div class="grid-images">
    <img src="../assets/коа_арт_пнг/аедирн_ком.png" alt="аедирн" />
    <img src="../assets/коа_арт_пнг/атре_ком.png" alt="аттре" />
    <img src="../assets/коа_арт_пнг/бремервоорд_ком.png" alt="бреммервоорд" />
    <img src="../assets/коа_арт_пнг/бругге_ком.png" alt="бругге" />
    <img src="../assets/коа_арт_пнг/верден_ком.png" alt="верден" />
    <img src="../assets/коа_арт_пнг/каедвен_ком.png" alt="каедвен" />
    <img src="../assets/коа_арт_пнг/нильфгаард_ком.png" alt="нильфгаард" />
    <img src="../assets/коа_арт_пнг/новиград_ком.png" alt="новиград" />
    <img src="../assets/коа_арт_пнг/редания_ком.png" alt="редания" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped langs="scss">
.grid-images {
  --gap: 1rem;
  --size: 350px;
  --scale: 1.5;
  width: calc((var(--gap) * 3) + (var(--size) * 2));
  aspect-ratio: 1;
  margin-block: 3rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: var(--gap);
  margin-inline: auto;
}

.grid-images > img {
  object-fit: contain;
  width: 0;
  height: 0;
  min-width: 100%;
  min-height: 100%;

  border: 2px solid #313131;
  border-radius: 2rem;
  transition: 0.35s linear;
}

.grid-images > img:hover {
  cursor: pointer;
  width: calc(var(--size) * var(--scale));
  height: calc(var(--size) * var(--scale));
}
</style>

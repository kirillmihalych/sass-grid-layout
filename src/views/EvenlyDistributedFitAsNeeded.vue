<template>
  <div class="grid-container-even">
    <div v-for="(cell, index) in inventory_25" :key="index" class="grid-item-even">
      {{ index + 1 }}
    </div>
  </div>
</template>

<script setup lang="ts">
const inventory_25 = [
  ...new Array(25).fill({
    value: null,
  }),
]
</script>

<style scoped lang="scss">
.grid-container-even {
  margin-block: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 1rem;
}

.grid-item-even {
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
</style>

<template>
  <div class="container">
    <section>
      <NavbarComponent />
    </section>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'

const items = [
  {
    id: 1,
    title: 'Bob',
  },
  {
    id: 2,
    title: 'Tanya',
  },
  {
    id: 3,
    title: 'Vanya',
  },
  // {
  //   id: 4,
  //   title: 'Bulba',
  // },
  // {
  //   id: 5,
  //   title: 'Gena',
  // },
  // {
  //   id: 6,
  //   title: 'Pena',
  // },
]

const inventory_25 = [
  ...new Array(25).fill({
    value: null,
  }),
]

console.log(inventory_25)
</script>

<style scoped lang="scss">
$max-inline-width: 50rem;
$bg-red: red;

.text-center {
  text-align: center;
}

.container {
  width: min(100% - 2rem, $max-inline-width);
  margin-inline: auto;
}

.red-bg {
  background-color: $bg-red;
}

.main-img {
  background-color: yellow;
}

// BEM Block
.grid-container {
  margin-block: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  transition: all 1s;
}

.grid-item {
  border: 2px solid purple;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div>
    <h2>auto-fill</h2>
    <section class="grid-auto-fill">
      <div v-for="item in items" :key="item.id">
        <p>{{ item.title }}</p>
      </div>
    </section>
    <h2>auto-fit</h2>
    <section class="grid-auto-fit">
      <div v-for="item in items" :key="item.id">
        <p>{{ item.title }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
]
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
}

.grid-auto-fill,
.grid-auto-fit {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

.grid-auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.grid-auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.grid-auto-fill > div,
.grid-auto-fit > div {
  border: 2px dotted purple;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

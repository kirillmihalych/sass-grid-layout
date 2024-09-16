<template>
  <div class="link-list">
    <RouterLink v-for="route in routes" :key="route.path" :to="route.path">
      {{ route.name.trim() }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router'
</script>

<style scoped lang="scss">
.link-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
}

.link-list > a {
  text-decoration: none;
  padding: 1rem;
  color: purple;
  font-weight: 600;
  text-align: center;
  border: 2px dotted purple;
  border-radius: 2rem;
  background-color: #fff;
}

.link-list > a:hover {
  background-color: plum;
  transition: all 0.1s;
}
</style>

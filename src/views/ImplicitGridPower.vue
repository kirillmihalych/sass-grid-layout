<template>
  <div class="implicit">
    <div v-for="n in 4" class="item">
      {{ n }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { arts } from '@/assets/коа_арт_пнг'
</script>

<style scoped lang="scss">
.implicit {
  margin-block: 5rem;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 225px;
  border: 2px dotted purple;
}

.item:first-child {
  background: #313131;
  grid-area: span 3 / span 3;
}
</style>

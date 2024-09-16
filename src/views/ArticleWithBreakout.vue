<template>
  <div class="grid-container-break">
    <div>2 to 3</div>
    <div class="full">full</div>
    <div>2 to 3</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.grid-container-break > div {
  border: 2px dotted purple;
}

.grid-container-break {
  margin-block: 5rem;
  display: grid;
  gap: 1rem;
  // 3 colums is 4 vertical lines
  grid-template-columns:
    [full-start] minmax(100px, 1fr)
    [main-start] 1fr [main-end]
    minmax(100px, 1fr) [full-end];
  grid-auto-rows: 200px;
  justify-content: center;
}

.grid-container-break > * {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: main-start;
}

.full {
  grid-column: full-start / full-end;
}
</style>

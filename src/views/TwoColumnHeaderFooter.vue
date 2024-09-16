<template>
  <div class="two-column-header-footer-layout">
    <header class="header">header</header>
    <main class="main">main</main>
    <aside class="aside">aside</aside>
    <footer class="footer">footer</footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped langs="scss">
.header,
.main,
.aside,
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 25vh; */
  border: 2px dotted purple;
}

.two-column-header-footer-layout {
  margin-block-start: 5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 10vw 30vw 10vw;
  gap: 1rem;
}

.header {
  grid-column: 1 / -1;
}

.footer {
  grid-column: 1 / span 2;
}

@media (max-width: 700px) {
  .main {
    grid-column: 1 / -1;
  }

  .aside {
    grid-column: 1 / -1;
  }
}
</style>

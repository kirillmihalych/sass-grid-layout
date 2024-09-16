<template>
  <div class="container">
    <div class="header">header</div>
    <div class="left-sidebar">left-sidebar</div>
    <div class="right-sidebar">right-sidebar</div>
    <div class="article">article</div>
    <div class="footer">footer</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  margin-block-start: 5rem;
  display: grid;
  grid-template-columns: 150px auto 150px;
  // grid-template-areas:
  //   'header header header header header'
  //   'left-s article article article right-s'
  //   'footer footer footer footer footer';
  gap: 1rem;
}

.header {
  grid-column: 1 / 4;
  // grid-area: header;
}

.footer {
  grid-column: 1 / 4;
  // grid-area: footer;
}

@media all and (max-width: 700px) {
  .article {
    grid-column: 1 / 4;
  }

  .left-sidebar {
    grid-column: 1 / 4;
  }

  .right-sidebar {
    grid-column: 1 / 4;
  }
}

// .article {
//   grid-area: article;
// }

// .left-sidebar {
//   grid-area: left-s;
// }

// .right-sidebar {
//   grid-area: right-s;
// }

.container > div {
  border: 1px dotted purple;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

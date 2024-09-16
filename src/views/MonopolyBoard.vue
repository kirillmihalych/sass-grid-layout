<template>
  <div class="wrapper-board">
    <div class="board">
      <div class="square">1</div>
      <div class="square">2</div>
      <div class="square">3</div>
      <div class="square">4</div>
      <div class="square">5</div>
      <div class="square">6</div>
      <div class="square">7</div>
      <div class="square">8</div>
      <div class="square">9</div>
      <div class="square">10</div>
      <div class="square">11</div>
      <div class="square">12</div>
      <div class="square">13</div>
      <div class="square">14</div>
      <div class="square">15</div>
      <div class="square">16</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.board {
  margin-block: 5rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(50px, 100px));
  grid-template-rows: repeat(5, minmax(50px, 100px));
  margin-inline: auto;
  gap: 1rem;
  justify-content: center;
}

.square:nth-child(1) {
  grid-row: 1;
  grid-column: 1;
}

.square:nth-child(2) {
  grid-row: 1;
  grid-column: 2;
}

.square:nth-child(3) {
  grid-row: 1;
  grid-column: 3;
}

.square:nth-child(4) {
  grid-row: 1;
  grid-column: 4;
}

.square:nth-child(5) {
  grid-row: 1;
  grid-column: 5;
}

.square:nth-child(6) {
  grid-row: 2;
  grid-column: 5;
}

.square:nth-child(7) {
  grid-row: 3;
  grid-column: 5;
}

.square:nth-child(8) {
  grid-row: 4;
  grid-column: 5;
}

.square:nth-child(9) {
  grid-row: 5;
  grid-column: 5;
}

.square:nth-child(10) {
  grid-row: 5;
  grid-column: 4;
}

.square:nth-child(11) {
  grid-row: 5;
  grid-column: 3;
}

.square:nth-child(12) {
  grid-row: 5;
  grid-column: 2;
}

.square:nth-child(13) {
  grid-row: 5;
  grid-column: 1;
}

.square:nth-child(14) {
  grid-row: 4;
  grid-column: 1;
}

.square:nth-child(15) {
  grid-row: 3;
  grid-column: 1;
}

.square:nth-child(16) {
  grid-row: 2;
  grid-column: 1;
}

.square {
  border: 2px dotted purple;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

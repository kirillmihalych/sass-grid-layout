<template>
  <div class="calendar">
    <ul class="weekdays">
      <li>Sunday</li>
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
      <li>Thursday</li>
      <li>Friday</li>
      <li>Saturday</li>
    </ul>

    <ol class="day-grid">
      <li class="month=prev">29</li>
      <li class="month=prev">30</li>
      <li class="month=prev">31</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li class="month-next">1</li>
      <li class="month-next">2</li>
    </ol>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.weekdays,
.day-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 100px));
  grid-auto-rows: minmax(50px, 100px);
  gap: 1rem;
  justify-content: center;
}

.day-grid > li,
.weekdays > li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.day-grid > li {
  border: 2px dotted purple;
}
</style>

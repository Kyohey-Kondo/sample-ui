<template>
  <div class="p-5">
    <div class="flex justify-center w-full p-2 shadow rounded-xl">
      <div class="w-4/5">
        <canvas ref="chartCanvas" height="300px"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref(null)

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })
})

// check current questions set result
</script>

<style scoped>
/* canvas {
  width: 80%;
  height: 400px;
} */
</style>

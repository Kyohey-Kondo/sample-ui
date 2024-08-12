<template>
  <div>
    <div class="text-lg">残り時間: {{ minutes }}分 {{ seconds }}秒</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, onMounted, onUpdated, watch } from 'vue'

const props = defineProps<{
  currentQuestionIndex: number
}>()

const emits = defineEmits<{
  submitAnswer: []
}>()

// const totalTime = 120
const totalTime = 3
const timeLeft = ref(totalTime)
let timer: number | undefined = undefined

const minutes = computed(() => Math.floor(timeLeft.value / 60))
const seconds = computed(() => timeLeft.value % 60)

const startTimer = () => {
  if (timer) return

  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1
    } else {
      clearInterval(timer)
      timer = undefined // タイマーを停止した後にリセット
      alert('時間切れです')
      emits('submitAnswer')
      // force submit
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})

watch(
  () => props.currentQuestionIndex,
  () => {
    console.log(props.currentQuestionIndex)
    timeLeft.value = totalTime
    startTimer()
  }
)
</script>

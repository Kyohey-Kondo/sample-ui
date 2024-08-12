<template>
  <div :class="`rounded-full px-3 ${textColor} ${bgColor}`">
    {{ `Level ${difficulty}` }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  difficulty: number
}>()

const textColor = ref('text-white')
const bgColor = computed(() => {
  switch (props.difficulty) {
    case 1:
      return 'bg-emerald-500'
    case 2:
      return 'bg-rose-500'
    case 3:
      return 'bg-violet-700'
    default:
      return 'bg-slate-500'
  }
})
</script>

<template>
  <div :class="`rounded-full px-3 ${textColor} ${bgColor} ${customTailwind}`">
    {{ badgeText }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  badgeType: String,
  badgeText: String,
  customTailwind: String
})

const emits = defineEmits(['function'])

const textColor = ref('text-slate-800')
const bgColor = computed(() => {
  switch (props.badgeType) {
    case 'primary':
      textColor.value = 'text-white'
      return 'bg-slate-700'
    case 'secondary':
      return 'bg-slate-200'
    default:
      return 'bg-slate-500'
  }
})
</script>

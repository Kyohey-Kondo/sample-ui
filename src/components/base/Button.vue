<template>
  <button
    :class="`rounded px-2 py-1 ${textColor} ${bgColor} ${customTailwind}`"
    :disabled="disabled"
    @click="() => emits('function')"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  buttonType: String,
  buttonText: String,
  customTailwind: String,
  disabled: Boolean
})

const emits = defineEmits(['function'])

const textColor = ref('text-slate-800')
const bgColor = computed(() => {
  if (props.disabled) {
    textColor.value = 'text-slate-500'
    return 'bg-slate-200'
  }

  switch (props.buttonType) {
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

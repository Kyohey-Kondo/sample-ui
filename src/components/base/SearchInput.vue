<template>
  <div class="w-full px-1 py-1">
    <input
      type="text"
      :class="`w-full px-5 py-2 bg-slate-50 rounded-full focus:outline-none border-2 border-slate-400 ${customTailwind}`"
      placeholder="hoge"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  customTailwind: String,
  disabled: Boolean
})
const model = defineModel()
</script>

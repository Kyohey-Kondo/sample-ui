<template>
  <div class="w-full pt-5">
    <!-- <input
      type="text"
      :class="`w-full px-5 py-2 bg-slate-50 rounded-full focus:outline-none border-2 border-slate-400 ${customTailwind}`"
      placeholder="hoge"
    /> -->
    <textarea
      type="text"
      :class="`w-full h-auto min-h-12 max-h-32 px-3 py-2 rounded-xl focus:outline-none border-2 border-slate-200 ${customTailwind}`"
      placeholder="回答を入力してください"
      rows="2"
      v-model="model"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  customTailwind: String,
  disabled: Boolean
})

const model = defineModel()
</script>

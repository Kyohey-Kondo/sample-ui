<template>
  <div class="w-full max-w-[900px] px-1 py-1">
    <div
      class="px-3 py-2 border-2 border-slate-500 rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
    >
      <div class="text-xl">{{ title }}</div>
      <div class="flex gap-2 justify-end">
        <BadgeLevelTag :difficulty="difficulty" />
      </div>
      <div>{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BadgeLevelTag from '@/components/base/BadgeLevelTag.vue'

const props = defineProps<{
  title: string
  description: string
  difficulty: number
}>()
</script>

<template>
  <div class="w-full p-2 bg-slate-100 rounded">
    <div class="w-full pb-5 text-start">
      {{ question }}
    </div>
    <div class="w-full flex gap-2">
      <div class="text-start pe-2">必須ワード:</div>
      <Badge
        v-for="requiredKeyword in requiredKeywords"
        badgeType="primary"
        :badgeText="requiredKeyword"
      />
    </div>
    <div class="flex">
      <div class="text-start pe-2">最大文字数:</div>
      <div>{{ answerMaxLength }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '@/components/base/Badge.vue'

const props = defineProps<{
  question: string
  requiredKeywords: string[]
  answerMaxLength: number
}>()
</script>

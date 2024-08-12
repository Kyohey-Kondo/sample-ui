<template>
  <div class="flex items-center h-screen">
    <div class="flex flex-col items-center gap-5 w-full text-center">
      <div class="text-lg">{{ message }}</div>
      <button
        class="min-w-52 px-5 py-2 border-2 border-slate-500 rounded-full hover:bg-slate-100"
        @click="startPractice"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

interface Content {
  categoryId: string
  title: string
  difficulty: number
  description: string
}

onMounted(() => {
  fetchContent()
})

const message = ref('')
const content = ref<Content | null>(null)
const fetchContent = () => {
  // fetch content
  content.value = {
    categoryId: 'uuid1',
    title: 'title1',
    difficulty: 1,
    description: 'description1'
  }
  message.value = `${content.value?.title} の演習を開始します`
}

const router = useRouter()
const startPractice = () => {
  if (content.value) {
    router.push(`/practice?categoryId=${content.value.categoryId}`)
  }
}
</script>

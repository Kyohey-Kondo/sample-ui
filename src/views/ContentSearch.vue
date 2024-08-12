<template>
  <div class="px-10 py-5">
    <div class="relative w-1/3 mx-auto">
      <form @submit.prevent="handleSubmit">
        <SearchInput v-model="searchInput" />
        <div class="absolute inset-y-0 right-0 flex items-center pe-3">
          <button :class="`${searchButtonColor} py-1 px-3 rounded-full`">
            <div class="flex items-center gap-1 text-white">
              <Icon icon="ph:magnifying-glass" class="text-xl" />
              <div class="text-sm">検索</div>
            </div>
          </button>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <template v-for="contentCategorie in contentCategories">
        <ContentCard
          :title="contentCategorie.title"
          :description="contentCategorie.description"
          :difficulty="contentCategorie.difficulty"
          @click="navigateToPractice(contentCategorie)"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchInput from '@/components/base/SearchInput.vue'
import ContentCard from '@/components/content-search/ContentCard.vue'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { akapenApi } from '@/libs/api/api'

interface ContentCategory {
  categoryId: string
  title: string
  difficulty: number
  description: string
}
const contentCategories = ref<ContentCategory[] | null>(null)

const searchInput = ref('')
onMounted(() => {
  searchContents()
  const res = akapenApi.searchCategories()
  console.log(res)
})

/**
 * Search contents
 */
const searchContents = () => {
  console.log(searchInput.value)
  // fetch dummy
  contentCategories.value = [
    {
      categoryId: 'uuid1',
      title: 'title1',
      difficulty: 1,
      description: 'description1'
    },
    {
      categoryId: 'uuid2',
      title: 'title2',
      difficulty: 2,
      description: 'description2'
    },
    {
      categoryId: 'uuid3',
      title: 'title3',
      difficulty: 3,
      description: 'description3'
    }
  ]
}

const router = useRouter()
/**
 * Navigate to practice
 */
const navigateToPractice = (contentCategorie: ContentCategory) => {
  console.log(contentCategorie)
  router.push(`/practice-landing?categoryId=${contentCategorie.categoryId}`)
}

/**
 * Handle submit
 */
const handleSubmit = () => {
  // searchContents()
  console.log(searchInput.value)
}

const searchButtonColor = computed(() => {
  return searchInput.value ? 'bg-slate-700' : 'bg-slate-500'
})
</script>

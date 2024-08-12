<template>
  <div class="flex items-center h-screen">
    <div class="flex flex-col items-center gap-5 w-full text-center">
      <div class="w-full">
        <div class="px-5">
          <template v-if="questions && !isLastQuestion">
            <Timer :currentQuestionIndex="currentQuestionIndex" @submitAnswer="submitAnswer" />
            <div class="max-w-[900px] mx-auto p-3 shadow-lg border-2 border-slate-100 rounded-lg">
              <QuestionArea
                :question="questions[currentQuestionIndex].question"
                :requiredKeywords="questions[currentQuestionIndex].requiredKeywords"
                :answerMaxLength="questions[currentQuestionIndex].answerMaxLength"
              />
              <AnswerArea v-model="userAnswer" />
              <div class="flex justify-center gap-5 pt-3">
                <button
                  class="min-w-52 px-5 py-2 border-2 border-slate-500 rounded-full hover:bg-slate-100"
                  @click="submitAnswer"
                >
                  提出
                </button>
              </div>
            </div>
          </template>
          <template v-else-if="isLastQuestion">
            <div>
              <div>お疲れ様でした</div>
              <button
                class="min-w-52 px-5 py-2 border-2 border-slate-500 rounded-full hover:bg-slate-100"
                @click="navigateToResult"
              >
                結果を確認
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import QuestionArea from '@/components/practice/QuestionArea.vue'
import AnswerArea from '@/components/practice/AnswerArea.vue'
import Timer from '@/components/practice/Timer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  fetchQuestions()
})

interface Question {
  id: string
  question: string
  answer: string
  requiredKeywords: string[]
  answerMaxLength: number
}

const currentQuestionIndex = ref(0)
const questions = ref<Question[] | null>(null)
const fetchQuestions = () => {
  // fetch questions
  questions.value = [
    {
      id: 'uuid1',
      question: 'question1',
      answer: 'answer1',
      requiredKeywords: ['keyword1', 'keyword2'],
      answerMaxLength: 10
    },
    {
      id: 'uuid2',
      question:
        'question2 question2 question2 question2 question2 question2 question2 question2 question2 question2 question2 question2 question2 question2 question2',
      answer: 'answer2',
      requiredKeywords: ['keyword3', 'keyword4'],
      answerMaxLength: 20
    },
    {
      id: 'uuid3',
      question: 'question3',
      answer: 'answer3',
      requiredKeywords: ['keyword5', 'keyword6'],
      answerMaxLength: 30
    }
  ]
}

const userAnswer = ref('')
const buttonText = ref('提出')
const buttonState = ref({
  lastQuestion: false
})
const submitAnswer = () => {
  // submit answer
  console.log(userAnswer.value)

  // next question
  if (currentQuestionIndex.value < questions.value!.length - 1) {
    currentQuestionIndex.value++
  } else {
    console.log('Finish')
    isLastQuestion.value = true
  }
}

// const isLastQuestion = computed(() => currentQuestionIndex.value === questions.value!.length - 1)
const isLastQuestion = ref(false)

const navigateToResult = () => {
  router.push('/practice-result')
}
</script>

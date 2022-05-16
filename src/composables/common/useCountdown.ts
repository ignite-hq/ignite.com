import { onMounted, onUnmounted, ref } from 'vue'

let intervalId: NodeJS.Timer

const ONE_SECOND = 1000

export default function useCountdown(time = 0) {
  const countdown = ref<number>(time)

  onMounted(() => {
    intervalId = setInterval(() => {
      if (countdown.value <= 0) countdown.value = 0
      countdown.value--
    }, ONE_SECOND)
  })

  onUnmounted(() => {
    clearInterval(intervalId)
  })

  return { countdown }
}

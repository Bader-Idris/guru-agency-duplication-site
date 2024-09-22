<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount, provide } from 'vue'

// Define types for cursor position
const cursorX = ref<number>(0)
const cursorY = ref<number>(0)

// Define the event type for the mouse event
const updateCursorPosition = (e: MouseEvent): void => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  // It's not pageY!!
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateCursorPosition)
})

provide('cursorX', cursorX)
provide('cursorY', cursorY)
provide('updateCursorPosition', updateCursorPosition)
//? to get them use
// const cursorX = inject('cursorX');
// const cursorY = inject('cursorY');
// might need => const updateCursorPosition = inject('updateCursorPosition');
// and inject from vue above

/* 
<div class="cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
*/
</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> -->

  <RouterView />
</template>

<style lang="scss" scoped>
#app {
  scroll-behavior: smooth;
}
</style>

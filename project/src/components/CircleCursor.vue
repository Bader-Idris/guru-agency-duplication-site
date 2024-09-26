<template>
  <div class="cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
const cursorX = inject<number | null>('cursorX', null)
const cursorY = inject<number | null>('cursorY', null)
</script>

<style lang="scss">
/* cursor */
*:hover ~ .cursor {
  transform: scale(5);
  display: inline;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

// *:hover>.cursor {
//   display: inline;
// }

.cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  transition: 0.1s;
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
  display: none;
  transition: cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.1s;
}

/* End cursor */
</style>

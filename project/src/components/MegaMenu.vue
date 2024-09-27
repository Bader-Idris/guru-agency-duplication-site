<template>
  <div class="mega-menu" v-if="showMegaMenu">
    <div class="exit" @click="isClosedMegaMenu">
      <span v-for="i in 2" :key="i"></span>
    </div>
    <CircleCursor />
    <ul>
      <li><a href="/">Homes</a></li>
      <li><a href="/work">Work</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/about">Studio</a></li>
      <li><a href="/blog">Journal</a></li>
      <CircleCursor />
    </ul>
    <div class="contacting animate__fadeInUp">
      <a href="/contact">Contact</a>
      <a href="/careers">careers</a>
      <div class="lets-talk">Let's Talk <span></span></div>
      <CircleCursor />
    </div>
    <div class="socials animate__fadeInDown">
      <ul>
        <li><a href="#insta">Instagram</a></li>
        <li><a href="#Behance">Behance</a></li>
        <li><a href="#linkedin">Linkedin</a></li>
        <li><a href="#twitter">X</a></li>
        <!-- <div class="cursor"
          :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div> -->
        <CircleCursor />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.mega-menu {
  z-index: 999;
  mix-blend-mode: normal;
  position: fixed;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
  width: calc(100% - 40px);
  background: white;
  padding: 20px;
  border-radius: 1em;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;

  @media screen and (max-width: 768px) {
    left: 20px;
  }

  @media screen and (min-width: 768px) {
    right: 20px;
    width: 420px;
  }

  // moved exit to main.scss
  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      padding: 10px 0;
      font-size: 20px;
      cursor: pointer;
      width: fit-content;

      a {
        color: $primary1;
      }
    }
  }

  .contacting {
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
    padding-bottom: 0;
    margin-bottom: 0;

    // border-bottom: 1px solid gray;
    &::before {
      content: '';
      display: block;
      width: calc(100% + 40px);
      position: absolute;
      left: -20px;
      top: 0;
      border-top: 1px solid gray;
    }

    a {
      padding: 10px 10px 10px 0;
      flex-grow: 1;
      color: black;
    }

    > .lets-talk {
      flex-grow: 3;
      cursor: pointer;
    }
  }

  .socials {
    display: flex;
    background-color: #e9e9e7;
    padding-bottom: 30px;
    margin-bottom: -30px;
    width: calc(100% + 40px);
    left: -20px;
    position: relative;
    border-radius: 0 0 1em 1em;

    ul {
      display: flex;

      // flex-direction: column;
      li {
        padding: 10px;

        a {
          color: $primary1;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref, defineEmits, defineExpose, onMounted, onBeforeUnmount } from 'vue'
const emit = defineEmits<{
  (e: 'close'): void
}>()

const showMegaMenu = ref<boolean>(false)
const isFadingOut = ref<boolean>(false)

const isClosedMegaMenu = (): void => {
  // console.log('showMegaMenu', showMegaMenu.value);

  isFadingOut.value = true // Start fading out
  setTimeout(() => {
    showMegaMenu.value = false // Hide menu after fade out
    emit('close') // Emit the close event
    isFadingOut.value = false // Reset fading state
  }, 300) // This duration should match the CSS transition duration
}

// Function to open the mega menu
const openMegaMenu = (): void => {
  showMegaMenu.value = true
}

// Handle the Escape key event
const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    isClosedMegaMenu()
  }
}

// Add event listeners when the component is mounted
onMounted((): void => {
  window.addEventListener('keydown', handleKeydown)
})

// Clean up the event listeners when the component is unmounted
onBeforeUnmount((): void => {
  window.removeEventListener('keydown', handleKeydown)
})

// Expose the openMegaMenu method to the parent component
defineExpose({
  openMegaMenu
})
</script>

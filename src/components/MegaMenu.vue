<template>
  <div class="mega-menu" v-if="showMegaMenu">
    <div class="exit" @click="isClosedMegaMenu">
      <span v-for="i in 2" :key="i"></span>
    </div>
    <div class="cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }">
    </div>
    <ul>
      <li><a href="/">Homes</a></li>
      <li><a href="/work">Work</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/about">Studio</a></li>
      <li><a href="/blog">Journal</a></li>
      <div class="cursor"
        :style="{ left: cursorX + 'px', top: cursorY + 'px' }">
      </div>
    </ul>
    <div class="contacting animate__fadeInUp">
      <a href="/contact">Contact</a>
      <a href="/careers">careers</a>
      <div class="lets-talk">Let's Talk <span></span></div>
      <div class="cursor"
        :style="{ left: cursorX + 'px', top: cursorY + 'px' }">
      </div>
    </div>
    <div class="socials animate__fadeInDown">
      <ul>
        <li><a href="#insta">Instagram</a></li>
        <li><a href="#Behance">Behance</a></li>
        <li><a href="#linkedin">Linkedin</a></li>
        <li><a href="#twitter">X</a></li>
        <div class="cursor"
          :style="{ left: cursorX + 'px', top: cursorY + 'px' }">
        </div>
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

  .exit {
    position: absolute;
    right: 0;
    top: 20px;
    padding: 20px;
    display: block;
    cursor: pointer;

    >span {
      background-color: $primary1;
      display: block;
      width: 40px;
      height: 2px;
      border-radius: $b-radius;

      &:first-of-type {
        transform: translateY(-2px) rotate(45deg);
      }

      &:last-of-type {
        transform: translateY(-4px) rotate(-45deg);
      }
    }
  }

  // .exit:hover~.cursor {
  //   transform: scale(10);
  // }

  >ul {
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

    >.lets-talk {
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
import { ref, defineEmits, defineExpose, onMounted, onBeforeUnmount, inject } from 'vue'
const emit = defineEmits()

const showMegaMenu = ref(false)
const isFadingOut = ref(false)

const isClosedMegaMenu = () => {
  // console.log('showMegaMenu', showMegaMenu.value);

  isFadingOut.value = true // Start fading out
  setTimeout(() => {
    showMegaMenu.value = false // Hide menu after fade out
    emit('close') // Emit the close event
    isFadingOut.value = false // Reset fading state
  }, 300) // This duration should match the CSS transition duration
}

// Function to open the mega menu
const openMegaMenu = () => {
  showMegaMenu.value = true
}

// Handle the Escape key event
const handleKeydown = (event) => {
  if (event.keyCode === 27) {
    // Key code for Escape
    isClosedMegaMenu()
  }
}

const cursorX = inject('cursorX');
const cursorY = inject('cursorY');

// Add event listeners when the component is mounted
onMounted(() => {
  window.addEventListener('keydown', handleKeydown) // Listen for keydown events
})

// Clean up the event listeners when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown) // Clean up keydown listener
})

// Expose the openMegaMenu method to the parent component
defineExpose({
  openMegaMenu
})
</script>

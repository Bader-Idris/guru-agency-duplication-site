<template>
  <header>
    <nav>
      <div class="logo">
        <a href="/">
          <img src="@/assets/imgs/logo-light.svg" alt="" />
        </a>
      </div>
      <div class="cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
      <div class="menu" @click="openMenu">
        <div v-if="showText" class="text">
          <p>Menu</p>
          <div class="burger">
            <span v-for="i in 2" :key="i"></span>
          </div>
        </div>
        <div class="cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
      </div>
    </nav>
  </header>
  <MegaMenu ref="megaMenu" />
</template>

<style lang="scss" scoped>
header {
  background-color: transparent;
  mix-blend-mode: difference;
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 999;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 60px);
    margin: 0 30px;
    height: 100%;
    // flex-direction: column;

    .logo {
      mix-blend-mode: difference;
      padding: 10px;
    }

    .menu {
      padding: 10px;

      .text {
        color: white;
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        transition: 0.5s;
        font-size: 18px;

        p {
          margin: 10px;
          letter-spacing: 1px;
        }

        .burger {
          position: relative;
          height: 15px;
          width: 40px;

          > span {
            background-color: white;
            position: absolute;
            display: block;
            width: 100%;
            height: 3px;
            border-radius: $b-radius;

            &:first-of-type {
              top: 0;
            }

            &:last-of-type {
              bottom: 0;
            }
          }
        }
      }

      .text:hover ~ .cursor {
        transform: scale(5);
      }

      // check adding it to other places!
      &:hover {
        .cursor {
          display: inline;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref, inject } from 'vue'
import MegaMenu from './MegaMenu.vue'

// Define types for cursor position
const cursorX = inject('cursorX')
const cursorY = inject('cursorY')
// const updateCursorPosition = inject('updateCursorPosition'); // looks like we don't have to here

const showText = ref<boolean>(true) // Initially show the text

// Define the type for the MegaMenu reference
const megaMenu = ref<InstanceType<typeof MegaMenu> | null>(null)

const openMenu = () => {
  if (megaMenu.value) {
    megaMenu.value.openMegaMenu() // Call the method exposed by MegaMenu
    // document.body.style.overflow = 'hidden'; // Prevents scrolling
    document.body.style.overflow = 'overlay'
  }
}
</script>

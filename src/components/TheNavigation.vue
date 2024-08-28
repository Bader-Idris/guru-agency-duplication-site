<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/imgs/logo-light.svg" alt="">
      </div>
      <div class="menu" @click="triggerMenu">
        <div v-if="showText" class="text">
          <p>Menu</p>
          <div class="burger">
            <span v-for="i in 2"></span>
          </div>
        </div>
        <!-- <div class="cursor"
          :style="{ left: cursorX + 'px', top: 50 + 'px' }"></div> -->
        <div class="cursor"
          :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
        <div v-if="showMegaMenu" class="mega-menu">
          <div class="exit" @click="!triggerMenu" >
            <span v-for="i in 2"></span>
          </div>
          <ul>
            <li><a href="/">Homes</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">Studio</a></li>
            <li><a href="/blog">Journal</a></li>
          </ul>
          <div class="contacting">
            <a href="/contact">Contact</a>
            <a href="/careers">careers</a>
            <div class="lets-talk">
              Let's Talk <span></span>
            </div>
          </div>
          <div class="socials">
            <ul>
              <li><a href="#insta">Instagram</a></li>
              <li><a href="#Behance">Behance</a></li>
              <li><a href="#linkedin">Linkedin</a></li>
              <li><a href="#twitter">X</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
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
      &:hover {
        .cursor {
          display: inline;
        }
      }
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
      }
      .mega-menu {
        mix-blend-mode: normal;
        position: absolute;
        right: 20px;
        top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 420px;
        height: 400px;
        background: white;
        padding: 20px;
        transition: 0.5s;
        border-radius: 1em;
        mix-blend-mode: normal !important;
        .exit {
          position: absolute;
          right: 0;
          top: 20px;
          padding: 20px;
          display: block;
          > span {
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
        > ul {
          display: flex;
          flex-direction: column;
          width: 100%;
          li {
            padding: 10px 0;
            font-size: 20px;
            a {
              color: $primary1;
            }
          }
        }
        .contacting {
          display: flex;
          align-items: center;
          justify-content: start;
          border-top: 1px solid gray;
          border-bottom: 1px solid gray;
          a {
            padding: 10px 10px 10px 0;
            flex-grow: 1;
          }
          > .lets-talk {
            flex-grow: 3;
          }
        }
        .socials {
          display: flex;
          background-color: #e9e9e7;
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
    }
  }
}

</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);
const showText = ref(true); // Initially show the text
const showMegaMenu = ref(false); // Initially hide the mega menu

const updateCursorPosition = (e) => {
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
  // It's not pageY!!
};


// Add event listeners when the component is mounted
onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);
});

// Clean up the event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
});


const triggerMenu = () => {
  showText.value = !showText.value;
  showMegaMenu.value = !showMegaMenu.value;
};
</script>

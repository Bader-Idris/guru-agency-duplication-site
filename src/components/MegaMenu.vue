<template>
  <div class="mega-menu" v-if="showMegaMenu">
    <div class="exit" @click="isClosedMegaMenu">
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
</template>

<style lang="scss">
.mega-menu {
  z-index: 999;
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
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;

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

  >ul {
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

    >.lets-talk {
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
</style>

<script setup lang="ts">
import { ref, defineEmits, defineExpose } from 'vue';
const emit = defineEmits();

const showMegaMenu = ref(false);
const isClosedMegaMenu = () => {
  setTimeout(() => {
    showMegaMenu.value = false;
    emit('close'); // Emit the close event
  }, 300);
};

// Function to open the mega menu
const openMegaMenu = () => {
  showMegaMenu.value = true;
};


// Expose the openMegaMenu method to the parent component
defineExpose({
  openMegaMenu,
});

</script>

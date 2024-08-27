<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/imgs/logo-light.svg" alt="">
      </div>
      <div class="menu" @click="triggerMenu" @mousemove="beautyHover">
        <p>Menu</p>
        <div class="burger">
          <span v-for="i in 2"></span>
        </div>
        <div class="cursor"
          :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: $primary1;
  height: 100px;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 60px);
    margin: 0 30px;
    height: 100%;
    // flex-direction: column;

    .logo {}
    .menu {
      color: white;
      display: flex;
      align-items: center;
      padding: 20px;
      user-select: none;
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
        .cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: white;
          transition: 0.1s;
          transform: translate(-50%, -50%);
          z-index: 1000;
          pointer-events: none;
          mix-blend-mode: difference;
        }
      }
    }
  }
}

</style>

<script setup>
const triggerMenu = () => {
  console.log('triggerMenu')
}

const cursor = document.querySelector('.cursor')

const beautyHover = (e) => {
  // console.log('beautyHover', e.target)
  cursor.value.style.left = e.clientX + 'px'
  cursor.value.style.top = e.clientY + 'px'
}
</script>



<!-- <script>
import React, {useState} from 'react'
function App() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  window.addEventListener('mousemove', (e) => {
    // setCursorX(e.clientX)
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <div className="App" >
      <ul>
        <li>home</li>
        <li>about</li>
        <div className="cursor" 
          style={{left: cursorX + 'px', top: cursorY + 'px'}}
        ></div>
      </ul>
    </div>
  )
}
export default App
</script> -->
<template>
  <TheNavigation />
  <div class="landing">
    <h1 class="title animate__animated animate__backInUp"
      :class="animationClass">
      Let's Tell Your Brand Story Through <span
        class="animate__animated animate__heartBeat">{{
          dynamicTitle }}</span>
    </h1>
    <div class="video-show-reel">
      <button class="play-video" @click.prevent="windowVideo">
        <iframe controls muted loop autoplay
          src="https://player.vimeo.com/video/810134952?muted=1&autoplay=1&dnt=1&loop=1&background=1&app_id=122963"></iframe>
        <!-- <video controls muted loop autoplay
          src="https://www.youtube.com/watch?time_continue=1&v=RXidlUSBhMY&embeds_referring_euri=https%3A%2F%2Fpixelpiernyc.vamtam.com%2F&source_ve_path=Mjg2NjY"></video> -->
      </button>
      <p>Check out our reel</p>
    </div>
    <div class="slogan">
      <p>A design and strategy studio born in New York that creates visual
        stories that resonate.</p>
    </div>
  </div>
</template>

<style lang="scss">
.landing {
  background-image: url("@/assets/imgs/3dCorner.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 100px;
  background-position-x: 21vw;
  background-position-y: 0px;

  @media (min-width: 768px) {
    background-size: 60%;
    background-position-x: 130%;
    background-position-y: -100px;
  }

  @media (max-width: 768px) {
    // &:after {
    //   content: "";
    //   width: 100%;
    //   height: 50px;
    //   background-color: black;
    //   position: absolute;
    //   bottom: 0;
    // }
  }

  background-color: black;
  height: 100vh;
  position: relative;
  top: -100px;

  .title {
    font-size: 70px;
    font-family: $main-font;
    color: white;
    margin: 0;
    font-weight: 300;
    padding-left: 20px;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 36px;
      padding-top: 55vh;
    }

    @media (min-width: 768px) {
      width: 50%;
      padding-top: 45vh;
    }
  }

  .video-show-reel {
    padding: 20px;
    display: flex;
    align-items: center;

    .play-video {
      border-radius: 12em;
      height: 50px;
      width: 90px;
      position: relative;
      border: none;

      iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        top: 0;
        border-radius: inherit;
        border: none;
      }
    }

    p {
      color: white;
      padding-left: 10px;
      font-size: 20px;
    }
  }

  .slogan {
    p {
      color: white;
    }
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import TheNavigation from '@/components/TheNavigation.vue'

const titles = ['Design', 'Strategy', 'Experience', 'Branding'];
const dynamicTitle = ref(titles[0]);
const animationClass = ref('animate__heartBeat');

let titleIndex = 0;
let intervalId = null;

const updateTitle = () => {
  titleIndex = (titleIndex + 1) % titles.length;
  dynamicTitle.value = titles[titleIndex];

  // Trigger the animation
  animationClass.value = ''; // Reset the class to trigger reflow
  void document.querySelector('.title')?.offsetWidth; // Force reflow
  animationClass.value = 'animate__heartBeat'; // Reapply the animation class
};

const windowVideo = () => {
  console.log('clicked');
  // add div with video

  // window.open('https://player.vimeo.com/video/810134952?muted=1&autoplay=1&dnt=1&loop=1&background=1&app_id=122963');
}

onMounted(() => {
  intervalId = setInterval(updateTitle, 2000); // Change title every 2 seconds
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId); // Clear the interval when the component unmounts
  }
});

</script>
<template>
  <div class="landing">
    <div class="social-icons" :class="{ 'is-sticky': isSticky }">
      <ul>
        <li class="social-table" v-for="(social, i) in socialArr" :key="i">
          <a :href="social.href" target="_blank">
            <img :src="social.imgSrc" :alt="social.alt" :fill="social.fill" />
            <CircleCursor />
          </a>
        </li>
      </ul>
    </div>
    <h1 class="title animate__animated animate__backInUp" :class="animationClass">
      Let's Tell Your Brand Story Through
      <span class="animate__animated animate__heartBeat" :class="animationClass">{{
        dynamicTitle
      }}</span>
    </h1>
    <div class="video-show-reel">
      <button class="play-video" @click.prevent="windowVideo">
        <img src="@/assets/imgs/play-arrow.svg" alt="" />
        <iframe
          controls
          muted
          loop
          autoplay
          src="https://player.vimeo.com/video/810134952?muted=1&autoplay=1&dnt=1&loop=1&background=1&app_id=122963"
        ></iframe>
      </button>
      <p>Check out our reel</p>
      <CircleCursor />
    </div>
    <!-- Overlay for YouTube Video -->
    <div v-if="showVideo" class="video-overlay">
      <div class="video-content">
        <iframe
          width="1280"
          height="720"
          :src="youtubeEmbedUrl"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <button @click="closeVideo" class="exit close-video">
          <span v-for="i in 2" :key="i"></span>
        </button>
      </div>
    </div>
    <div class="slogan">
      <p>
        {{ slogan }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.is-sticky {
  background-color: yellow;
  position: sticky;
}

.landing {
  background-image: url('@/assets/imgs/3dCorner.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 100px;
  background-position-x: 21vw;
  background-position-y: 0px;

  background-color: black;
  height: 100vh;
  position: relative;
  top: -100px;

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

  .social-icons {
    width: 100px;
    height: 200px;
    position: sticky;
    top: calc(50vh - 100px);
    left: calc(100vw - 50px);

    ul {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      li {
        width: 25px;

        a {
          width: 50px;
          height: 50px;
          position: relative;
          display: block;

          img {
            padding: 10px;
            width: 50px;
            color: white;
            filter: invert(1);
            opacity: 0.8;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .title {
    font-size: 66px;
    font-family: $main-font;
    color: #e9e9e7;
    margin: 0;
    font-weight: 300;
    padding-left: 20px;
    font-weight: 300;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 36px;
      padding-top: 55vh;
    }

    @media (min-width: 768px) {
      width: 60%;
      padding-top: 25vh;
    }
  }

  .video-show-reel {
    margin-top: 20px;
    padding: 20px;
    display: flex;
    align-items: center;

    .play-video {
      border-radius: 12em;
      height: 50px;
      width: 90px;
      position: relative;
      border: none;

      img {
        width: 120%;
        height: 112%;
        position: relative;
        z-index: 1;
        border-radius: inherit;
        padding: 15px 10px 15px 20px;
        left: -9px;
        top: -4px;
        box-shadow: inset 0 0 20px 0px black;
      }

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
      font-size: 16px;
    }
  }

  /* Overlay for YouTube Video */
  .video-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .video-content {
    position: relative;
    width: 100%;
    max-width: 960px;
    padding: 20px;

    iframe {
      width: 100%;
      height: 500px;
    }

    .close-video {
      border: none;
      background-color: transparent;
      top: -10px;
      right: -50px;

      span {
        background-color: white;
      }
    }
  }

  .slogan {
    padding-top: 30px;

    p {
      color: white;
      font-size: 20px;
      padding-left: 20px;

      @media screen and (max-width: 768px) {
        width: calc(100% - 20px);
        font-size: 18px;
      }

      @media screen and (min-width: 768px) {
        width: 40%;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const titles: string[] = ['Design', 'Strategy', 'Experience', 'Branding']
const dynamicTitle = ref<string>(titles[0])
const animationClass = ref<string>('animate__heartBeat')

const isSticky = ref<boolean>(false)
const showVideo = ref<boolean>(false)
const youtubeEmbedUrl = ref<string>('')

let titleIndex: number = 0
let intervalId: number | null = null

const slogan: string = `A design and strategy studio born in New York that creates visual
  stories that resonate.`

const updateTitle = (): void => {
  titleIndex = (titleIndex + 1) % titles.length
  dynamicTitle.value = titles[titleIndex]

  // Trigger the animation
  animationClass.value = '' // Reset the class to trigger reflow
  void document.querySelector('.title')?.offsetWidth // Force reflow
  animationClass.value = 'animate__heartBeat' // Reapply the animation class
}

// Open the video overlay with YouTube embed URL
const windowVideo = (): void => {
  showVideo.value = true
  // Use YouTube's official embed URL to avoid CORS issues, figured our other sites use embed instead of watch!
  youtubeEmbedUrl.value = 'https://www.youtube.com/embed/RXidlUSBhMY'
}

// Close the video overlay
const closeVideo = (): void => {
  showVideo.value = false
  youtubeEmbedUrl.value = ''
}

function getImageUrl(name: string): string {
  return new URL(`../assets/imgs/${name}`, import.meta.url).href
}

interface SocialLink {
  imgSrc: string
  href: string
  alt: string
  fill: string
}

const socialArr = ref<SocialLink[]>([
  { imgSrc: getImageUrl('instagram.svg'), href: '#', alt: 'instagram', fill: 'white' },
  { imgSrc: getImageUrl('behance.svg'), href: '#', alt: 'behance', fill: 'white' },
  { imgSrc: getImageUrl('twitterx.svg'), href: '#', alt: 'twitter x', fill: 'white' }
])

onMounted((): void => {
  intervalId = window.setInterval(updateTitle, 2000) // Change title every 2 seconds
})

onBeforeUnmount((): void => {
  if (intervalId !== null) {
    clearInterval(intervalId) // Clear the interval when the component unmounts
  }
})
</script>

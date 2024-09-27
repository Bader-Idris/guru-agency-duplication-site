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
    <div class="slogan">
      <p>
        A design and strategy studio born in New York that creates visual stories that resonate.
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
/* 
I want to make this element scrolling with the screen after it touches the top of the screen, until it finished the Langpage.vue which is its comp name

<!--    <div class="social-icons" :class="{ 'is-sticky': isSticky }" > -->

that's how it's above in the template, I want to make it working when it touches the screen, updating the value of isSticky to true
*/

let titleIndex: number = 0
let intervalId: number | null = null

const updateTitle = (): void => {
  titleIndex = (titleIndex + 1) % titles.length
  dynamicTitle.value = titles[titleIndex]

  // Trigger the animation
  animationClass.value = '' // Reset the class to trigger reflow
  void document.querySelector('.title')?.offsetWidth // Force reflow
  animationClass.value = 'animate__heartBeat' // Reapply the animation class
}

// const windowVideo = () => {
//   console.log('clicked')
//   // create a div.video-on-youtube referring to 👇 link, and make a layout stopping scrolling until user clicks on the layout which is nearly padding 80px to both sides
//   // and it should be as a thumbnail and can be clicked as an outer youtube video, not to be refused to connect as with 403 401 responses of youtube
//   // I wanna use vidstack for this youtube video, to be embedded
//   // 'https://www.youtube.com/watch?v=RXidlUSBhMY';
//   // 'https://www.youtube.com/watch?time_continue=1&v=RXidlUSBhMY&embeds_referring_euri=https%3A%2F%2Fpixelpiernyc.vamtam.com%2F&source_ve_path=Mjg2NjY';
// }

const windowVideo = (): void => {
  console.log('clicked')
  // create a div.video-on-youtube referring to 👇 link, and make a layout stopping scrolling until user clicks on the layout which is nearly padding 80px to both sides
  // and it should be as a thumbnail and can be clicked as an outer youtube video, not to be refused to connect as with 403 401 responses of youtube
  // I wanna use vidstack for this youtube video, to be embedded
  // 'https://www.youtube.com/watch?time_continue=1&v=RXidlUSBhMY&embeds_referring_euri=https%3A%2F%2Fpixelpiernyc.vamtam.com%2F&source_ve_path=Mjg2NjY';
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

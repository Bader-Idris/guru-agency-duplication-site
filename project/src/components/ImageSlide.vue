<template>
  <div
    class="image-slide"
    @mousedown.prevent="startDrag"
    @touchstart="startDrag"
    @mouseup="endDrag"
    @mouseleave.prevent="endDrag"
    @touchend="endDrag"
  >
    <div class="wrapper" ref="wrapper" @mousemove.prevent="onDrag" @touchmove="onDrag">
      <!-- <img :src="image" alt="" v-for="(image, index) in images" :key="index" /> -->
      <img :src="image.src" :alt="image.alt" v-for="(image, index) in images" :key="index" />
    </div>
    <div class="dots">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: currentIndex === index }"
      ></span>
    </div>
  </div>
</template>

<style lang="scss">
.image-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 1200px;

  .wrapper {
    font-size: 0;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    height: 600px;
    scroll-snap-type: x mandatory;
    // scroll-snap-type: mandatory;

    img {
      height: 480px;
      object-fit: cover;
      margin-left: 14px;
      // width: calc(100% / 3);

      transition: transform 0.2s ease-in-out;

      &:first-of-type {
        margin-left: 0;
      }

      @media screen and (max-width: 768px) {
        width: calc(100% / 2);
        // min-width: 30vw;
      }

      @media screen and (max-width: 450px) {
        width: calc(100% - 40px);
        margin: 0 20px !important;
        // min-width: 30vw;
      }

      @media screen and (min-width: 768px) {
        // min-width: 30vw;
        width: 60%;
        margin-top: 20px;
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      margin-top: -100px;
      margin-bottom: 20px;
    }

    @media screen and (min-width: 768px) {
      margin-top: -70px;
      margin-bottom: 30px;
    }

    span {
      display: block;
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background-color: #ddd;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        background-color: #333;
      }
    }
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

const wrapper = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const currentIndex = ref(0)

const startDrag = (e) => {
  isDragging.value = true
  startX.value = e.touches ? e.touches[0].pageX : e.pageX
  scrollLeft.value = wrapper.value.scrollLeft
}

const onDrag = (e) => {
  if (!isDragging.value) return
  const x = e.touches ? e.touches[0].pageX : e.pageX
  const walk = (x - startX.value) * 2 // Scroll-fast

  wrapper.value.scrollLeft = scrollLeft.value - walk

  // Update currentIndex based on the scroll position
  currentIndex.value = Math.round(wrapper.value.scrollLeft / wrapper.value.clientWidth)
}

const endDrag = () => {
  isDragging.value = false
}

// Define an array of images with src and alt dynamically imported
const images = ref([])

// Use dynamic imports for each image
onMounted(() => {
  images.value = [
    {
      src: new URL('@/assets/imgs/slide1/image1.jpg', import.meta.url).href,
      alt: 'Image 1 description'
    },
    {
      src: new URL('@/assets/imgs/slide1/image2.jpg', import.meta.url).href,
      alt: 'Image 2 description'
    },
    {
      src: new URL('@/assets/imgs/slide1/image3.jpg', import.meta.url).href,
      alt: 'Image 3 description'
    },
    {
      src: new URL('@/assets/imgs/slide1/image4.jpg', import.meta.url).href,
      alt: 'Image 4 description'
    },
    {
      src: new URL('@/assets/imgs/slide1/image5.jpg', import.meta.url).href,
      alt: 'Image 5 description'
    },
    {
      src: new URL('@/assets/imgs/slide1/image6.jpg', import.meta.url).href,
      alt: 'Image 6 description'
    }
  ]
})
</script>

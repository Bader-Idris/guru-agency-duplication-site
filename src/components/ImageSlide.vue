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
      <img :src="image" alt="" v-for="(image, index) in images" :key="index" />
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

    img {
      height: 340px;
      object-fit: cover;
      margin-left: 14px;
      width: calc(100% / 3);
      transition: transform 0.2s ease-in-out;

      &:first-of-type {
        margin-left: 0;
      }

      @media screen and (max-width: 768px) {
        width: calc(100% / 2);
      }

      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;

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
import { defineProps, ref, onMounted } from 'vue'

// Define props to accept the image path
const props = defineProps({
  slidePath: {
    type: String,
    required: true
  },
  imageCount: {
    type: Number,
    default: 5
  }
})

// Create a ref to hold the images
const images = ref([])

// Function to construct the image URL
function getImageUrl(name) {
  return new URL(`${props.slidePath}/${name}.jpg`, import.meta.url).href
}

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

// Load images on component mount
onMounted(() => {
  for (let index = 1; index <= props.imageCount; index++) {
    images.value.push(getImageUrl(`image${index}`))
  }
})
</script>

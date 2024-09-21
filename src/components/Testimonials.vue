<template>
  <div class="testimonials">
    <div class="top-review">
      <h3>Reviews</h3>
      <div class="stars"></div>
      <p class="desc">
        Their words are a testament to our commitment to excellence and our ability to bring their
        visions to life. Read on to see how we’ve made a lasting impact on their brands and
        projects.
      </p>
    </div>
    <div class="quotes" ref="carousel">
      <div class="quote" v-for="(quote, i) in quotesDesc" :key="i">
        <p class="desc">{{ quote.desc }}</p>
        <p class="speaker">{{ quote.speaker }}</p>
      </div>
      <!-- <i id="left" @click="scrollCarousel(-1)">&#9664;</i>
      <i id="right" @click="scrollCarousel(1)">&#9654;</i> -->
    </div>
  </div>
</template>

<style lang="scss">
.testimonials {
  background-color: #e9e9e7;
  padding-top: 80px;
  padding-bottom: 60px;

  .top-review {
    font-size: 20px;

    .desc {
      margin: auto;
      width: 70%;
    }
  }

  .quotes {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding-top: 100px;
    // padding-bottom: 50px;
    // flex-wrap: wrap;
    margin: 0 40px;
    // @media screen and (max-width: 768px) {
    //   flex-direction: column;
    // }
    display: grid;
    grid-auto-flow: column;

    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: 0;

    @media screen and (max-width: 768px) {
      grid-auto-rows: calc((100% / 3) - 12px);
    }

    @media screen and (min-width: 768px) {
      grid-auto-columns: calc((100% / 3) - 12px);
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &.dragging {
      scroll-snap-type: none;
      scroll-behavior: auto;

      .quote {
        cursor: grab;
        user-select: none;
      }
    }

    &.no-transition {
      scroll-behavior: auto;
    }

    @media screen and (max-width: 600px) {
      grid-auto-columns: 100%;
    }

    .quote {
      // margin: 20px;
      // padding: 20px;
      position: relative;
      transition: transform 0.3s ease;
      /* Smooth transition for transform */
      // flex: 1;
      // flex-basis: calc(100% / 3);
      font-size: 22px;

      scroll-snap-align: start;
      height: 400px;
      list-style: none;
      border-radius: 8px;
      display: flex;
      width: 98%;
      padding-bottom: 15px;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .desc {
        padding-top: 30px;
      }

      .speaker {
      }

      &::before {
        content: '"';
        position: absolute;
        color: black;
        font-size: 100px;
        // opacity: 0.2;
        left: 0;
        top: 0;
        margin-bottom: 20px;
      }
    }
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const quotesDesc = ref([
  {
    speaker: '- Sarah Johnson, Marketing Lead at Technlogia',
    desc: 'From concept to execution, PixelPier demonstrated a level of expertise that is truly commendable. They were responsive, flexible, and delivered a design that truly speaks to our target audience.'
  },
  {
    speaker: '- Frank Berry, Chief Creative Officer at Gomi',
    desc: "From concept to execution, PixelPier demonstrated a level of expertise that is truly commendable. They were responsive, flexible, and delivered a design that truly speaks to our target audience. The team's turned our vision into a reality, and we couldn't be happier."
  },
  {
    speaker: '- Michael Brown, Founder at Fabriks',
    desc: 'Working with PixelPier was an absolute pleasure. Their attention to detail and creative flair truly set them apart. They took our vision and turned it into something beyond our expectations.'
  },
  {
    speaker: '- Sarah Johnson, Marketing Lead at Technlogia',
    desc: 'From concept to execution, PixelPier demonstrated a level of expertise that is truly commendable. They were responsive, flexible, and delivered a design that truly speaks to our target audience.'
  },
  {
    speaker: '- Michael Brown, Founder at Fabriks',
    desc: 'Working with PixelPier was an absolute pleasure. Their attention to detail and creative flair truly set them apart. They took our vision and turned it into something beyond our expectations.'
  }
])
//! carousel == quotes
//  quote == card
const carousel = ref(null)
let isDragging = false
let startX, startScrollLeft, timeoutId

const dragStart = (e) => {
  isDragging = true
  carousel.value.classList.add('dragging')
  startX = e.pageX
  startScrollLeft = carousel.value.scrollLeft
}

const dragging = (e) => {
  if (!isDragging) return

  const newScrollLeft = startScrollLeft - (e.pageX - startX)
  carousel.value.scrollLeft = newScrollLeft
}

const dragStop = () => {
  isDragging = false
  carousel.value.classList.remove('dragging')
}

const autoPlay = () => {
  if (window.innerWidth < 800) return

  const totalCardWidth = carousel.value.scrollWidth
  const maxScrollLeft = totalCardWidth - carousel.value.offsetWidth

  if (carousel.value.scrollLeft >= maxScrollLeft) return

  timeoutId = setTimeout(() => {
    carousel.value.scrollLeft += carousel.value.querySelector('.quote').offsetWidth
  }, 2500)
}

const scrollCarousel = (direction) => {
  const firstCardWidth = carousel.value.querySelector('.quote').offsetWidth
  carousel.value.scrollLeft += direction * firstCardWidth
}

onMounted(() => {
  carousel.value.addEventListener('mousedown', dragStart)
  carousel.value.addEventListener('mousemove', dragging)
  document.addEventListener('mouseup', dragStop)
  carousel.value.addEventListener('mouseenter', () => clearTimeout(timeoutId))
  carousel.value.addEventListener('mouseleave', autoPlay)

  autoPlay() // Start autoplay when the component is mounted
})

onBeforeUnmount(() => {
  clearTimeout(timeoutId)
  carousel.value.removeEventListener('mousedown', dragStart)
  carousel.value.removeEventListener('mousemove', dragging)
  document.removeEventListener('mouseup', dragStop)
})
</script>

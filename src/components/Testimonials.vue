<template>
  <div class="testimonials">
    <div class="top-review">
      <h3>reviews</h3>
      <div class="stars"></div>
      <p class="desc">
        Their words are a testament to our commitment to excellence and our ability to bring their
        visions to life. Read on to see how we’ve made a lasting impact on their brands and
        projects.
      </p>
    </div>
    <div class="quotes">
      <div class="quote" v-for="(quote, i) in quotesDesc" :key="i">
        <p class="desc">{{ quote.desc }}</p>
        <p class="speaker">{{ quote.speaker }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
  grid-auto-columns: calc((100% / 3) - 12px);
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: 0;

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

  @media screen and (max-width: 900px) {
    grid-auto-columns: calc((100% / 2) - 9px);
  }

  .quote {
    // margin: 20px;
    // padding: 20px;
    position: relative;
    // flex: 1;
    // flex-basis: calc(100% / 3);
    font-size: 22px;

    scroll-snap-align: start;
    height: 400px;
    list-style: none;
    background: #fff;
    border-radius: 8px;
    display: flex;
    // cursor: pointer;
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
      opacity: 0.2;
      left: 0;
      top: 0;
      margin-bottom: 20px;
    }
  }
}
</style>

<script setup>
import { ref } from 'vue'
const quotesDesc = ref([
  {
    speaker: '- Sarah Johnson, Marketing Lead at Technlogia',
    desc: 'From concept to execution, PixelPier demonstrated a level of expertise that is truly commendable. They were responsive, flexible, and delivered a design that truly speaks to our target audience.'
  },
  {
    speaker: '- Frank Berry, Chief Creative Officer at Gomi',
    desc: "From concept to execution, PixelPier demonstrated a level of expertise that is truly commendable. They were responsive, flexible, and delivered a design that truly speaks to our target audience. The team's turned our vesion into a reality, and we couldn't be happier."
  },
  {
    speaker: '- Michael Brown, Founder at Fabriks',
    desc: 'Working with PixelPierwas an absolute pleasure. Their attention to detail and creative flair truly set them apart. They took our vision and turned it into something beyond our expectations.'
  },
  {
    speaker: '- Sarah Johnson, Marketing Lead at Technlogia',
    desc: 'From concept to execution, PixelPier demonstrated a level of expertise that is truly commendable. They were responsive, flexible, and delivered a design that truly speaks to our target audience.'
  },
  {
    speaker: '- Michael Brown, Founder at Fabriks',
    desc: 'Working with PixelPierwas an absolute pleasure. Their attention to detail and creative flair truly set them apart. They took our vision and turned it into something beyond our expectations.'
  }
])
//! carousel == quotes
//  quote == card
</script>

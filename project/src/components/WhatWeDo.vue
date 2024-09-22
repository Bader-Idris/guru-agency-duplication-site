<template>
  <div class="what-we-do">
    <h2>What we do</h2>
    <div class="hero-para">
      <p class="para" ref="paragraph">
        Our journey began with a passion for visual storytelling and a commitment to turning ideas
        into impactful designs. With a team of dedicated professionals, we've honed our skills to
        deliver exceptional results for our clients.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.what-we-do {
  height: 100vh;
  background-color: #e9e9e7;
  overflow: hidden;

  h2 {
  }

  .hero-para {
    font-size: 72px;
    margin: auto 20px;
    letter-spacing: 1;

    text-align: center;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    .para {
      display: inline-block;
      word-spacing: 0.25em;

      span {
        opacity: 0;
        display: inline-block;
      }
    }
  }
}
</style>

<script setup lang="ts">
/* This is a similar code with GSAP, but with different elements, and it's built on top of vanilla js, not as mine built with vue3 composition apis script setup, so I want you to make my component doing the same funtcion of scrolling text paragraph of this template code That I am providing as a comment, to apply it on my above code, if you can do it without using the npm pkg lenis, do it, I want the functionality of faiding words in and out on scoll as the code below appears to you, thank's for reading.

const selector = {
  paragraph: Splitting({
    target: '.hero-p',
    by: 'words',
  }),
  image: document.querySelector('.hero-bg'),
  navItems: document.querySelectorAll('.nav-item'),
};

const initLenis = () => {
  const lenis = new Lenis({
    lerp: 0.05,
    smoothWheel: true,
  });
	
  lenis.on('scroll', scrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000 ));
  gsap.ticker.lagSmoothing(0);
  initScroll();
};

window.addEventListener('DOMContentLoaded',initLenis);

*/

import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

const paragraph = ref(null)

onMounted(() => {
  // Split the paragraph text into individual words wrapped in spans
  const paragraphElement = paragraph.value
  const words = paragraphElement.textContent?.split(' ') || []
  paragraphElement.innerHTML = words.map((word) => `<span>${word}</span>`).join(' ')

  // Select all the spans (words)
  const wordSpans = paragraphElement.querySelectorAll('span')

  // Animate each word on scroll
  gsap.fromTo(
    wordSpans,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: paragraphElement,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true
      }
    }
  )

  // // Initialize Lenis
  // const lenis = new Lenis({
  //   lerp: 0.05,
  //   smoothWheel: true,
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  // lenis.on('scroll', ScrollTrigger.update);
})
</script>

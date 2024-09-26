<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue'
import TheLandPage from '@/components/TheLandPage.vue'
import ImageSlide from '@/components/ImageSlide.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import OurCapabilities from '@/components/OurCapabilities.vue'
import OurStatics from '@/components/OurStatics.vue'
import Testimonials from '@/components/Testimonials.vue'
// import Passionates from '@/components/Passionates.vue'
// import TeamCrew from '@/components/TeamCrew.vue'
import OurFooter from '@/components/OurFooter.vue'
</script>

<template>
  <TheNavigation />
  <main>
    <TheLandPage />
    <h2>Selected Work</h2>
    <ImageSlide />
  </main>
  <section>
    <WhatWeDo />
  </section>
  <section>
    <OurCapabilities />
  </section>
  <section>
    <OurStatics />
  </section>
  <section>
    <Testimonials />
  </section>
  <section>
    <!-- <TeamCrew /> -->
  </section>
  <section>
    <OurFooter />
  </section>
</template>

<style lang="scss">
main {
  background-color: black;

  > h2 {
    color: white;
    font-size: 32px;
    margin-left: 20px;
    margin-top: -100px;
  }
}
</style>

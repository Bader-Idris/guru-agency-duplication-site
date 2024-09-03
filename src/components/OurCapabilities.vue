<template>
  <div class="our-capabilities">
    <h2>Our Capabilities</h2>
    <div class="features-set">
      <!-- <div class="empty"></div> -->
      <div class="feature" v-for="(feature, i) in featureArr" :key="i">
        <img :src="feature.imgSrc" alt="" />
        <h3 class="box-title">{{ feature.title }}</h3>
        <p class="box-desc">{{ feature.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.our-capabilities {
  min-height: 100vh;
  background-color: #e9e9e7;

  h2 {}

  .features-set {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    // height: 100%;
    padding: 60px 0;
    margin-left: 420px;
    width: calc(100% - 440px);
    margin-right: 20px;
    // .empty {
    //   flex-basis: 30%;
    //   min-height: 420px;
    // }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: calc(100% - 40px);
      margin: 0 20px;
      flex-wrap: nowrap;
    }

    // @media screen and (min-width: 768px) {
    //   &> :nth-child(4) {
    //     margin-left: 420px;
    //     background-color: yellow;
    //   }
    // }

    .feature {
      flex-basis: 30%;
      min-height: 420px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 20px;
      background-color: #f4f4f3;
      padding: 20px;

      @media screen and (max-width: 768px) {
        margin: 15px 0;
      }

      img {
        width: 100px;
        padding: 10px;
      }

      .box-title {
        width: 40px;
        height: 40px;
        margin: 100px 0 20px;
        width: 100%;
        // margin-top: 100px;
        // margin-bottom: 0;
        padding: 20px 0px;
      }

      .box-desc {
        // padding: 20px 10px;
      }
    }
  }
}
</style>

<script setup>
import { ref } from 'vue'

// Function to resolve the image URL using Vite's approach
function getImageUrl(name) {
  return new URL(`../assets/imgs/${name}`, import.meta.url).href
}

const featureArr = ref([
  {
    imgSrc: getImageUrl('poly-shape.svg'),
    title: 'Award-Winning Design',
    desc: 'From envisioning your brand’s identity to crafting compelling logos and  ➤ Packaging, our comprehensive services encompass  ➤ Art Direction,  ➤ Brand Guidelines,  ➤ Logo & Trademark and  ➤ Branding Identity solutions.'
  },
  {
    imgSrc: getImageUrl('poly-shape.svg'),
    title: 'Brand Strategy',
    desc: 'Brand strategy is the blueprint for how a company presents itself to the world. A well-crafted strategy lays the  ➤ Foundation for consistent brand experiences that resonate with target audiences.'
  },
  {
    imgSrc: getImageUrl('poly-shape.svg'),
    title: 'Proven Marketing',
    desc: 'From cultivating engaging  ➤ Social Media presence to precise direct and  ➤ Product Marketing, we reach your  ➤ Target Audience with compelling  ➤ Content Creation strategies.'
  },
  {
    imgSrc: getImageUrl('poly-shape.svg'),
    title: 'Future-Proof Development',
    desc: 'Development is the art of crafting dynamic, interactive, and user-friendly   ➤ Websites and   ➤ Apps. It’s about crafting seamless digital experiences that captivate audiences across various platforms.'
  }
])
</script>

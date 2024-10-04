<template>
  <div class="our-statics">
    <div class="scripting">
      <p>
        Dive into our studio's core - numbers that mirror our dedication,
        creativity, and pursuit of
        excellence. These stats offer a glimpse into our design prowess and its
        real-world impact.
      </p>
    </div>
    <div class="numbers animate__fadeInUp">
      <!-- this should work when user scrolls to it -->
      <div v-for="(stat, index) in statics" :key="index">
        <p class="stat">{{ stat.n }}</p>
        <p class="entitled">{{ stat.entitled }}</p>
      </div>
    </div>
    <div class="companies">
      <img v-for="brand in brands" :key="brand.title" :src="brand.path"
        :alt="brand.title" />
    </div>
  </div>
</template>

<style lang="scss">
section {
  // height: 110vh;
}

.our-statics {
  color: white;
  // height: calc(100vh - 80px);
  height: calc(100vh + 100px);

  z-index: 1;
  position: relative;
  margin-bottom: -100px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 90%;
    transform: rotate(-180deg);
    background-color: black;
    background-image: url('@/assets/imgs/blur-spot.webp'), url('@/assets/imgs/3dCorner.png');
    background-repeat: no-repeat, no-repeat;
    background-position:
      100% 100%,
      100% 0%;
    background-size: 300px, 410px;
    z-index: 0;

    @media screen and (max-width: 768px) {
      height: 110vh;
    }
  }

  .scripting {
    position: relative;
    width: 80%;
    padding: 100px 10px 50px 30%;

    p {
      font-size: 28px;
    }

    @media screen and (max-width: 768px) {
      padding: 20px;
      width: 100%;
      padding-top: 270px;

      & p {
        font-size: 22px;
      }
    }
  }

  .numbers {
    display: flex;
    justify-content: space-between;
    margin: 0 70px;
    align-items: center;
    position: absolute;
    width: calc(100% - 140px);
    bottom: 240px;

    .stat {
      font-size: 80px;
      margin: 20px 0;
    }

    .entitled {
      font-size: 22px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      font-size: 36px;
      margin: 20px;
      bottom: 150px;

      .stat {
        font-size: 40px;
        margin: 0;
      }

      .entitled {
        font-size: 22px;
        margin-top: 0;
      }
    }
  }

  .companies {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px 0;
    left: 0;
    bottom: 84px;
    width: 100%;
    border-top: 1px solid #e3e3e383;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: 170px;
      font-size: 36px;
      padding: 15px 0;
      flex-wrap: wrap;
      bottom: 0;

      &>* {
        margin: 0 20px;
        padding: 10px 0;
      }

      img {
        height: 40px;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

const brands = ref([
  { title: 'coiufuré', path: '/brands/coiufuré.svg' },
  { title: 'technologia', path: '/brands/technologia.svg' },
  { title: 'fabrik', path: '/brands/fabrik.svg' },
  { title: 'numérique', path: '/brands/numérique.svg' },
  { title: 'macchina', path: '/brands/macchina.svg' }
])

const statics = ref([
  { n: '260+', entitled: 'Satisfied Clients' },
  { n: '40%', entitled: 'Client Referrals' },
  { n: '70+', entitled: 'Award Recognitions' }
])
</script>

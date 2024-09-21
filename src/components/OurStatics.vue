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
    <div class="numbers">
      <h3></h3>
      <h4></h4>
    </div>
    <div class="companies">
      <img src="" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.our-statics {
  color: white;
  height: calc(100vh - 80px);
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
      bottom right,
      bottom right;
    background-size: 300px, 450px;
    z-index: 0;

    @media screen and (max-width: 768px) {
      height: 90vh;
    }
  }

  .scripting {
    position: relative;
    width: 80%;
    padding: 100px 10px 50px 30%;

    p {
      font-size: 28px;
    }
  }
}
</style>

<script setup></script>

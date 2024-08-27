<template>
  <TheNavigation />
  <div>
    <h1 class="title">
      Let's Tell Your Brand Story Through {{ dynamicTitle[0] }}
    </h1>
  </div>
</template>

<style lang="scss">
.title {
  font-size: 3rem;
  font-family: $main-font;
} 
</style>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue'

const dynamicTitle = ['Art', 'Music', 'Design']
</script>
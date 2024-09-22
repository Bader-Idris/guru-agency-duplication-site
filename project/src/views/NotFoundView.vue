<template>
  <TheNavigation />
  <div class="not-found">
    <h1>404 - Page not found</h1>
    <router-link to="/">
      <span> back to main page </span>
    </router-link>
  </div>
  <OurFooter />
</template>

<style lang="scss">
.not-found {
}
</style>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
import OurFooter from '@/components/OurFooter.vue'
</script>

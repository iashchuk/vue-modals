<template>
  <div class="app wrapper">
    <header>
      <Navigation />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss"></style>

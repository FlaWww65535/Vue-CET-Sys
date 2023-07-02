<script>
import PageHeader from "./components/PageHeader.vue"
export default {
  components: {
    PageHeader
  }
}
</script>

<template>
  <PageHeader />
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

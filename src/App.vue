<template>
    <navbar></navbar>
  <div class="app">
  <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/UI/Navbar.vue';
export default {
components: {Navbar}
}
</script>

<style>
.app {
  padding: 20px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
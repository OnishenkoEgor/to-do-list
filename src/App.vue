<template>
  <Header></Header>
  <div class="page container">
    <router-view />
  </div>
</template>
<script>
import "@/assets/style/container.scss";

import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
</style>

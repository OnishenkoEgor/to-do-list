<template>
  <div class="list row">
    <Card v-for="listItem in listItems" :cardInfo="listItem"/>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
  props: { listItems: Array },
};
</script>

<style lang="scss" scoped>

</style>
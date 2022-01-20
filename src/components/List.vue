<template>
  <div class="list">
    <card v-for="listItem in listItems" :cardInfo="listItem"></card>
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
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 30px;
}
</style>
<template>
  <h1>{{ deal.title }}</h1>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      deal: {},
    };
  },
  computed: {
    ...mapGetters({
      getDeal: "dealsStore/getDealById",
    }),
  },
  mounted() {
    this.deal = this.getDeal(this.$route.params.id);
  },
};
</script>

<style>
</style>
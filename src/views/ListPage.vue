<template>
  <h1>List of deals</h1>
  <List :listItems="getDeals"></List>
</template>
<script>
import List from "../components/List.vue";
import { mapGetters } from "vuex";
export default {
  components: { List },
  computed: {
    ...mapGetters({
      getDeals: "dealsStore/getDeals",
    }),
  },
};
</script>

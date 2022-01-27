<template>
  <h1>List of deals</h1>
  <div class="list-page__header">
    <p>Sort by:</p>
    <my-select
      :options="['Title', 'DeadLine']"
      :placeholder="'Sorting type...'"
      v-model="sortType"
    ></my-select>
  </div>
  <List :listItems="deals"></List>
</template>
<script>
import List from "../components/List.vue";
import { mapGetters } from "vuex";
import MySelect from "../components/UI/MySelect.vue";
export default {
  components: { List, MySelect },
  data() {
    return {
      sortType: "",
    };
  },
  computed: {
    ...mapGetters({
      getDeals: "dealsStore/getDeals",
      getSortedDeals: "dealsStore/getSortedDeals",
    }),
    deals() {
      return this.getSortedDeals(this.sortType);
    },
  },
};
</script>
<style lang="scss" scoped>
.list-page {
  &__header {
    padding: 10px;
    display: grid;
    grid-template-columns: max-content 300px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

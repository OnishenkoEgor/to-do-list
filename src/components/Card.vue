<template>
  <div class="col s12 m6">
    <div class="card ">
      <div class="card-content white-text">
        <div class="card-info">
          <span class="card-title">{{ cardInfo.title }}</span>
          <span class="card-time">{{ cardInfo.deadline }}</span>
        </div>
        <p>
          {{ cardInfo.shortDesc }}
        </p>
      </div>
      <div class="card-action">
        <a href="#" @click="$router.push(`/list/${cardInfo.id}`)">Open</a>
        <a href="#" @click="() => removeDeal(cardInfo.id)">Remove</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    cardInfo: Object,
  },
  methods: {
    ...mapMutations({
      removeDeal: "dealsStore/removeDeal",
    }),
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  justify-content: space-between;
}
</style>
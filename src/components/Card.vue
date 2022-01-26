<template>
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{ cardInfo.title }}</span>
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

<style>
</style>
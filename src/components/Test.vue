<template>
  <label for="">{{ position.direction }}</label>
  <input type="range" v-model="position.value" />
  <select name="" id="" v-model="position.direction">
    <option selected value="left">left</option>
    <option value="right">right</option>
    <option value="top">top</option>
    <option value="bottom">bottom</option>
  </select>
  <div class="wrapper">
    <div v-test:[position.direction]="position.value" class="block"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: {
        direction: "left",
        value: 0,
      },
    };
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  min-height: 400px;
  border: 2px solid red;
  border-radius: 1px;
  background-color: #eee;
}
.block {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #000;
}
select{
    display: block !important;
}
</style>
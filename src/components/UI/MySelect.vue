<template>
  <div ref="select" class="my-select" @click="toggleHeight">
    <div class="my-select__selected" ref="selected">
      <p>{{ placeholder }}</p>
    </div>
    <div class="my-select__options" ref="options">
      <div
        class="my-select__option"
        v-for="option in options"
        @click="() => chooseOption(option)"
      >
        <p>{{ option }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    options: Array,
    placeholder: String,
  },
  methods: {
    toggleHeight: function () {
      let select = this.$refs.select,
        options = this.$refs.options;
      select.classList.toggle("my-select-active");
      if (select.classList.contains("my-select-active")) {
        options.setAttribute("style", `max-height:${options.scrollHeight}px`);
      } else {
        options.setAttribute("style", "max-height:0px");
      }
    },
    chooseOption: function (e) {
      this.$refs.selected.querySelector("p").textContent = e;
      this.$emit("update:modelValue", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-select {
  display: block;
  position: relative;
  padding: 10px 20px 10px 10px;
  border-radius: 3px;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    top: 50%;
    right: 10px;
    background: #636363;
    transform-origin: 50% 50%;
    transform: translateY(-50%);
    transform-origin: 50%;
    transition: 0.3s all;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
  }

  &-active {
    &::after {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  p {
    margin: 0;
  }
  &__selected {
    line-height: 20px;
    font-size: 16px;
    color: #636363;
  }
  &__options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 0px;
    overflow: hidden;
    transition: 0.3s all;
    z-index: 10;
    border-bottom: 1px solid #000;
  }
  &__option {
    padding: 10px;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    transition: 0.3s all;
    background-color: #fff;

    &:hover {
      background-color: #ececec;
    }
  }
}
</style>
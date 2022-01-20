<template>
    <div v-if="error">
        <p>Error</p>
    </div>
    <div v-else-if="loading" class="progress">
      <div class="indeterminate"></div>
    </div>
    <slot v-else></slot>
</template>

<script>
export default {
  props: {
    error: Boolean,
    loading: Boolean,
  },
};
</script>

<style>
</style>
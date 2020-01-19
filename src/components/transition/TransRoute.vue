<template>
  <transition name="trans_route">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'TransRoute',
};
</script>

<style>
  .trans_route-enter-active {
    transition: all 1s;
  }

  .trans_route-enter

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>

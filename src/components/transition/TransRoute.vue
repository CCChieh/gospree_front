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
    transition: all 0.3s;
  }

  .trans_route-enter
  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    height: 0;
  }
</style>

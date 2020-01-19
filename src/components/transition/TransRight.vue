<template>
  <transition name="trans_right">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'TransRight',
};
</script>

<style>
  .trans_right-enter-active,
  .trans_right-leave-active {
    transition: all 1s;
  }

  .trans_right-enter,
  .trans_right-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform: translateX(-60px);
  }
</style>

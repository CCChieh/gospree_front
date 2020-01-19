<template>
  <transition-group name="trans_list">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'TransList',
};
</script>

<style>
  .trans_list-enter-active,
  .trans_list-leave-active {
    transition: all 1s;
  }

  .trans_list-enter,
  .trans_list-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform: translateX(-60px);
  }
</style>

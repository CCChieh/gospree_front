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
  .trans_list-enter-active {
    transition: all 1s;
  }

  .trans_list-enter

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform: translateX(-60px);
  }
</style>

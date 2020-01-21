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
    transition: all 0.8s;
  }

  .trans_list-enter

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    /* transform: translateY(-60px); */
  }

  .trans_list-move,
  .trans_list-enter-active {
    transition:all 0.8s;
  }

  .trans_list-active {
    transform: translateY(-60px);
    position: absolute;
  }
</style>

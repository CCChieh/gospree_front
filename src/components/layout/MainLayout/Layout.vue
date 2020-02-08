<template>
  <div class="norm_lay">
    <Top/>
    <Main>
      <slot/>
    </Main>
    <Foot/>
  </div>
</template>

<script>
import Top from './Top.vue';
import Main from './Main.vue';
import Foot from './Foot.vue';

export default {
  name: 'NormLay',
  components: {
    Top,
    Main,
    Foot,
  },
};
</script>

<style>
</style>

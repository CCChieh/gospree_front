<template>
  <div class="main">
<div class="main_right" :style="mainRightStyle">
  <slot></slot>
  </div>
<div class="main_left" :style="mainLeftStyle">
  <Side></Side>
  <Side></Side>
  <Side></Side>
  <Side></Side>
  </div>
  </div>
</template>

<script>
import Side from './Side.vue';

export default {
  name: 'Main',
  components: {
    Side,
  },
  data() {
    return {
      clientWidth: 0,
      mainRightMax: {
        width: '65%',
        maxWidth: '800px',
      },
      mainLeftMax: {
        width: '35%',
        maxWidth: '350px',
      },

      mainRightMin: {
        width: '100%',
      },
      mainLeftMin: {
        width: '100%',
      },
      mainRightStyle: this.mainRightMax,
      mainLeftStyle: this.mainLeftMax,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize, true);
    this.handleResize();
  },
  methods: {
    handleResize() {
      const { clientWidth } = document.body;
      if (clientWidth > 820) {
        this.mainRightStyle = this.mainRightMax;
        this.mainLeftStyle = this.mainLeftMax;
      } else {
        this.mainRightStyle = this.mainRightMin;
        this.mainLeftStyle = this.mainLeftMin;
      }
    },
  },
};
</script>

<style>
  .main{
    margin: 0;
    width: 100%;
    padding: 0;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
  }
</style>

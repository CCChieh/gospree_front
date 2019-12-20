<template>
  <div class="main">
<div class="main_right" :style="mainRightStyle"><slot></slot></div>
<div class="main_left" :style="mainLeftStyle">侧边栏</div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      clientWidth: 0,
      mainRightMax: {
        width: '60%',
        maxWidth: '768px',
      },
      mainLeftMax: {
        width: '30%',
        maxWidth: '300px',
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
  .main_left,.main_right{
    margin:20px;
    text-align: center;
  }
</style>

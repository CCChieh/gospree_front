<template>
  <div class="main">
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {},
  data() {
    return {
      clientWidth: 0,
      mainLeftMax: {
        width: '65%',
        maxWidth: '800px',
      },
      mainRightMax: {
        width: '35%',
        maxWidth: '350px',
      },

      mainLeftMin: {
        width: '100%',
      },
      mainRightMin: {
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
  .main {
    margin: 0;
    width: 100%;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

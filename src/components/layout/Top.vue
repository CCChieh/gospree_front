<template>
  <div class="top">
    <div class="top_img"></div>
    <transition name="top_bar_trans">
      <div class="top_bar" v-show="show_top_bar" @scroll="handleScroll">这里是状态栏</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      show_top_bar: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      const {
        scrollTop,
      } = document.documentElement;
      const {
        availHeight,
      } = window.screen;
      this.show_top_bar = scrollTop > availHeight * 0.5;
    },
  },
};
</script>

<style>
  .top {
    width: 100%;
  }

  .top_img {
    width: 100%;
    height: 50vh;
    background: url(../../assets/top_background_img.jpg);
    background-repeat: no-repeat;
    background-position: right 50%;
    background-size: cover;
  }

  .top_bar {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 64px;
    background: #FFFFFF;
    position: fixed;
    left: 0;
    top: 0px;
    z-index: 9999;
  }

  .top_bar_trans-enter-active {
    animation: top_bar-in .4s;
  }

  .top_bar_trans-leave-active {
    animation: top_bar-in .4s reverse;
  }

  @keyframes top_bar-in {
    from {
      top: -64px;
    }

    to {
      top: 0px;
    }
  }

  @-moz-keyframes top_bar-in

  /* Firefox */
    {
    from {
      top: -64px;
    }

    to {
      top: 0px;
    }
  }

  @-webkit-keyframes top_bar-in

  /* Safari 和 Chrome */
    {
    from {
      top: -64px;
    }

    to {
      top: 0px;
    }
  }

  @-o-keyframes top_bar-in

  /* Opera */
    {
    from {
      top: -64px;
    }

    to {
      top: 0px;
    }
  }
</style>

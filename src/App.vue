<template>
  <div id="app">
    <TransRoute>
      <keep-alive>
        <router-view :key="$route.fullPath"/>
      </keep-alive>
    </TransRoute>
  </div>
</template>
<script>
import TransRoute from './components/transition/TransRoute.vue';

export default {
  name: 'App',
  components: {
    TransRoute,
  },
};
</script>
<style>
  body {
    background-color: #F4F4F4F4;
    margin: 0;
    padding: 0;
    border: 0;
    animation-name: fadein;
    animation-duration: 1s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  a:link, a:active, a:hover, a:visited {
    color: #767579;
    text-decoration: none
  }

  a:hover {
    color: red;
  }
</style>

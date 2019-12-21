<template>
  <div id="app">
    <Top></Top>
    <Main><router-view/></Main>
    <Foot></Foot>
  </div>
</template>
<script>
import Top from './components/layout/Top.vue';
import Main from './components/layout/Main.vue';
import Foot from './components/layout/Foot.vue';

export default {
  name: 'App',
  components: {
    Top,
    Main,
    Foot,
  },
};
</script>
<style>
  body {
    background-color: #F4F4F4F4;
    margin: 0;
    padding: 0;
    border: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

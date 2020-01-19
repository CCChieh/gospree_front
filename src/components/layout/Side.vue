<template>
  <div class="side">侧边栏(关于)
  <router-link :to="{name:'about'}">about</router-link>|
  <router-link :to="{name:'home'}">home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Side',
};
</script>

<style>
  .side {
    background-color: #FFFFFF;
    margin: 0px 8px 16px 8px;
    padding: 4px;
    height: 140px;
    border-radius: 12px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  .side:hover{
    box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
    transition: 0.3s;
  }
</style>

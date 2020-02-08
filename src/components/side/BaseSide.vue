<template>
  <NormBox>
    侧边栏(关于)
    <div>
      <router-link :to="{name:'about'}">about</router-link>
      |
      <router-link :to="{name:'home'}">home</router-link>
      |
      <router-link :to="{name:'base64'}">base64</router-link>
      |
      <router-link :to="{name:'createNote'}">新建note</router-link>
      |
    </div>
  </NormBox>
</template>

<script>
import NormBox from '../box/NormBox.vue';

export default {
  name: 'BaseSide',
  components: {
    NormBox,
  },
};
</script>

<style>

</style>

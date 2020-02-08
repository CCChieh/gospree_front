<template>
  <Layout>
    <textarea rows="15" cols="100" v-model="content"/>
    <hr />
    <textarea rows="15" cols="100" v-model="enBase64" readonly="readonly"/>
    <hr />
    <textarea rows="15" cols="100" v-model="deBase64" readonly="readonly"/>
  </Layout>
</template>

<script>
import Layout from '../components/layout/MainLayout/Layout.vue';
import tool from '../util/tool';

export default {
  data() {
    return {
      content: '在这里输入文本',
    };
  },
  name: 'base64',
  components: {
    Layout,
  },
  computed: {
    enBase64() {
      return tool.enBase64(this.content);
    },
    deBase64() {
      return tool.deBase64(this.enBase64);
    },
  },
};
</script>

<style>
</style>

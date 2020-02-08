<template>
  <Layout>
    <NormBox>
      <Editor v-model="content" />
    </NormBox>
  </Layout>
</template>

<script>
import Layout from '../../components/layout/UnSideLayout/Layout.vue';
import NormBox from '../../components/box/NormBox.vue';
import Editor from '../../components/Markdown/Editor.vue';

export default {
  name: 'Create',
  components: {
    Layout,
    NormBox,
    Editor,
  },
  data() {
    return {
      content: '# Hello',
    };
  },
};
</script>

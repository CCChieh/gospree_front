<template>
  <Layout>
    <NormBox>
      <Title>
        {{deBase64(data.title)}}
      </Title>
      <Info :author="data.author" :createdAt="stamp2Date(data.createdAt)"/>
      <Show :content="deBase64(data.content)"/>
    </NormBox>
  </Layout>
</template>

<script>
import Layout from '../../components/layout/MainLayout/Layout.vue';
import noteData from '../../request/note';
import tool from '../../util/tool';
import Title from '../../components/note/Title.vue';
import Info from '../../components/note/Info.vue';
import NormBox from '../../components/box/NormBox.vue';
import Show from '../../components/note/Show.vue';

export default {
  name: 'note',
  data() {
    return {
      data: {
        title: null,
        createdAt: 0,
        author: null,
        content: null,
      },
    };
  },
  components: {
    Layout,
    Title,
    Info,
    NormBox,
    Show,
  },
  props: ['id'],
  methods: {
    setData(data) {
      this.data = data;
    },
    stamp2Date: tool.stamp2Date,
    deBase64: tool.deBase64,
  },
  beforeRouteEnter(to, from, next) {
    if (from.name) {
      noteData.getNote(to.params.id, (data) => {
        next((vm) => {
          vm.setData(data);
        });
      });
    } else {
      // next();
      // 下面暂时使用
      noteData.getNote(to.params.id, (data) => {
        next((vm) => {
          vm.setData(data);
        });
      });
    }
  },
};
</script>

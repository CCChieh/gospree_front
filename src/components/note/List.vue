<template>
  <router-link :to="{name:'note',params:{id}}">
    <NormBox>
      <Title>
        {{deBase64(title)}}
      </Title>
      <Info :author="author" :createdAt="stamp2Date(createdAt)"/>
      <PreView>
        {{deBase64(preView)}}
      </PreView>
    </NormBox>
  </router-link>
</template>

<script>
import tool from '../../util/tool';
import Title from './Title.vue';
import Info from './Info.vue';
import PreView from './PreView.vue';
import NormBox from '../box/NormBox.vue';

export default {
  name: 'NoteList',
  props: ['id', 'title', 'preView', 'createdAt', 'author'],
  components: {
    Title,
    Info,
    PreView,
    NormBox,
  },
  methods: {
    stamp2Date: tool.stamp2Date,
    deBase64: tool.deBase64,
  },
};
</script>

<style scoped>

</style>

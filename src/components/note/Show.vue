<template>
  <div class="note">
    <Viewer :content="content"/>
  </div>
</template>

<script>
import Viewer from '../Markdown/Viewer.vue';

export default {
  name: 'Content',
  props: ['content'],
  components: {
    Viewer,
  },
};
</script>

<style scoped>
  .note {
    padding: 0.8rem 0 0;
  }
</style>

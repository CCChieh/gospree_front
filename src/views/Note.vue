<template>
  <NormLay>
    <h1>This id of the note is {{id}}</h1>
  </NormLay>
</template>

<script>
import NormLay from '../components/layout/NormLay.vue';

export default {
  name: 'note',
  components: {
    NormLay,
  },
  props: ['id'],
};
</script>

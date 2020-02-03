<template>
  <NormLay>
    <Note
    :title="data.title"
    :id="id"
    :createdAt="data.createdAt"
    :author="data.author"
    :content="data.content"
    ></Note>
  </NormLay>
</template>

<script>
import NormLay from '../components/layout/NormLay.vue';
import noteData from '../request/note';
import Note from '../components/note/Note.vue';

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
    NormLay,
    Note,
  },
  props: ['id'],
  methods: {
    setData(data) {
      this.data = data;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.name) {
      noteData.getNote(to.params.id, (data) => {
        next((vm) => {
          vm.setData(data);
        });
      });
    } else {
      next();
    }
  },
};
</script>

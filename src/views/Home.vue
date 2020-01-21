<template>
  <NormLay>
    <TransList>
      <NoteList
      v-for="note in noteList"
      :key="note.id"
      :id="note.id"
      :createdAt="note.createdAt"
      :title="note.title"
      :preView="note.preView"
      :author="note.author"
      ></NoteList>
    </TransList>
    <!-- <div class="list_loading" v-if="isLoading">加载中。。。</div> -->
  </NormLay>
</template>

<script>
// @ is an alias to /src
import NoteList from '../components/note/NoteList.vue';
import noteData from '../request/note';
import TransList from '../components/transition/TransList.vue';
import NormLay from '../components/layout/NormLay.vue';

export default {
  name: 'home',
  components: {
    NoteList,
    TransList,
    NormLay,
  },
  data() {
    return {
      noteList: null,
      isLoading: true,
    };
  },
  methods: {
    setData(data) {
      this.noteList = data;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (!from.name) {
      noteData.getList(1, (data) => {
        next((vm) => {
          vm.setData(data);
        });
      });
    } else {
      next();
    }
  },
  // beforeCreate() {
  //   this.isLoading = true;
  //   noteData.getList(1, (data) => {
  //     this.noteList = data;
  //     this.isLoading = false;
  //   });
  // },
};
</script>

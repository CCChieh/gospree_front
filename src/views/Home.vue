<template>
  <div class="home">
    <TransList>
      <NoteList
      v-for="note in noteList"
      :key="note.ID"
      :title="note.Title"
      :preView="note.PreView"></NoteList>
    </TransList>
    <!-- <div class="list_loading" v-if="isLoading">加载中。。。</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NoteList from '../components/note/NoteList.vue';
import noteData from '../request/note';
import TransList from '../components/transition/TransList.vue';

export default {
  name: 'home',
  components: {
    NoteList,
    TransList,
  },
  data() {
    return {
      noteList: null,
      isLoading: true,
    };
  },
  beforeCreate() {
    this.isLoading = true;
    noteData.getList(1).then((data) => {
      this.noteList = data;
      this.isLoading = false;
    });
  },
};
</script>

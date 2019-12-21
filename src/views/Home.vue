<template>
  <div class="home">
    <NoteList></NoteList>
    <NoteList></NoteList>
    <NoteList></NoteList>
    <NoteList></NoteList>
    <NoteList></NoteList>
    <NoteList></NoteList>
    <NoteList></NoteList>
    <NoteList></NoteList>
    <NoteList></NoteList>
    <NoteList></NoteList>
  </div>
</template>

<script>
// @ is an alias to /src
import NoteList from '@/components/note/NoteList.vue';

export default {
  name: 'home',
  components: {
    NoteList,
  },
};
</script>

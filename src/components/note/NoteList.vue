<template>
  <div class="note_list"><h2 class="title">Hello World</h2></div>
</template>

<script>
export default {
  name: 'NoteList',
};
</script>

<style>
  .note_list {
    background-color: #FFFFFF;
    margin: 0px 8px 16px 8px;
    padding: 32px;
    height: 70px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 2px 4px 0 rgba(0,0,0,0.1);
    border-radius: 12px;
  }
  .note_list:hover{
    box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
    transition: 0.2s;
  }
</style>

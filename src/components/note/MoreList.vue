<template>
  <div class="more_note_list" @click="addData">
    {{more}}
  </div>
</template>

<script>
export default {
  name: 'MoreNoteList',
  props: ['more', 'addData'],
  methods: {
  },
};
</script>

<style>
  .more_note_list{
    opacity: 1;
    background-color: #FFFFFF;
    margin: 0px 8px 16px 8px;
    padding: 2rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
  }
</style>

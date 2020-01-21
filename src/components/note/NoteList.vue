<template>
  <div class="note_list">
    <div class="note_list_title">
      <router-link :to="{name:'note',params:{id}}"> {{title}}</router-link>
    </div>
    <div class="note_list_info">
      {{author}}::{{stamp2Date(createdAt)}}
    </div>
    <div class="note_list_preview">
      {{preView}}
    </div>
  </div>
</template>

<script>
import tool from '../../util/tool';

export default {
  name: 'NoteList',
  props: ['id', 'title', 'preView', 'createdAt', 'author'],
  methods: {
    stamp2Date(time) {
      return tool.stamp2Date(time);
    },
  },
};
</script>

<style>
  .note_list {
    opacity: 1;
    background-color: #FFFFFF;
    margin: 0px 8px 16px 8px;
    padding: 2rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content:center;
  }

  .note_list:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    transition: 0.2s;
  }

  .note_list_title {
    padding:0 0 0.75rem 0;
  }

  .note_list_title,
  .note_list_title a {
    color: #000000;
    font-size: 1.5rem;
  }

  .note_list_title a:hover {
    color: #FF0000;
  }

  .note_list_info{
    color: rgba(51,51,51,0.7);
    padding: 0.25rem 0 0.5rem;
    border-color: rgba(51,51,51,0.1);
    border-width:0 0 1px 0;
    border-style: solid;
  }

  .note_list_preview{
    padding: 0.5rem 0 0;
  }
</style>

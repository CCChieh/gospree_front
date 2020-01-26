<template>
  <div class="note">
    <div class="note_list_title">
      <router-link :to="{name:'note',params:{id}}"> {{title}}</router-link>
    </div>
    <div class="note_info">
      {{author}}:{{stamp2Date(createdAt)}}
      {{$route.fullPath}}
    </div>
    <div class="note_content">
      {{content}}
    </div>
  </div>
</template>

<script>
import tool from '../../util/tool';

export default {
  name: 'Note',
  props: ['author', 'title', 'content', 'createdAt', 'id'],
  methods: {
    stamp2Date: tool.stamp2Date,
  },
};
</script>

<style>
  .note{
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
</style>

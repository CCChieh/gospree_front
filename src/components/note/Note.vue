<template>
  <div class="note">
    <div class="note_list_title">
      {{deBase64(title)}}
    </div>
    <div class="note_info">
      {{author}} {{stamp2Date(createdAt)}}
    </div>
    <div class="note_content">
      <VueMarkdown v-if="content">
        {{deBase64(content)}}
      </VueMarkdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import tool from '../../util/tool';

export default {
  name: 'Note',
  props: ['author', 'title', 'content', 'createdAt', 'id'],
  components: {
    VueMarkdown,
  },
  methods: {
    stamp2Date: tool.stamp2Date,
    deBase64: tool.deBase64,
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

  .note_info{
    font-size: 1rem;
    color: rgba(51,51,51,0.7);
    padding: 0.25rem 0 0.5rem;
    border-color: rgba(51,51,51,0.1);
    border-width:0 0 1px 0;
    border-style: solid;
  }

  .note_content{
    padding: 0.8rem 0 0;
  }
</style>

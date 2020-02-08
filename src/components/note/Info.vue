<template>
  <div class="note_info">
    {{author}} {{createdAt}}
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: ['author', 'createdAt'],
};
</script>

<style scoped>
  .note_info {
    font-size: 1rem;
    color: rgba(51, 51, 51, 0.7);
    padding: 0.25rem 0 0.5rem;
    border-color: rgba(51, 51, 51, 0.1);
    border-width: 0 0 1px 0;
    border-style: solid;
  }
</style>

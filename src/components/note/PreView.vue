<template>
  <div class="note_preview">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'PreView',
};
</script>

<style scoped>
  .note_preview {
    padding: 0.5rem 0 0;
  }
</style>

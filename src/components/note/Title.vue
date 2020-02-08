<template>
  <div class="note_title">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'NoteTitle',
};
</script>

<style scoped>
  .note_title {
    padding: 0 0 0.75rem 0;
  }

  .note_title,
  .note_title a {
    color: #000000;
    font-size: 1.5rem;
  }
  .note_title a:hover {
    color: #FF0000;
  }
</style>

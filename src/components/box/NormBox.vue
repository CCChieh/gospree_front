<template>
  <div class="norm_box">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'NormBox',
};
</script>

<style scoped>
  .norm_box {
    flex-basis: 100%;
    background-color: #FFFFFF;
    color: black;
    margin: 0px 8px 16px 8px;
    padding: 2rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }

  .norm_box:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    transition: 0.2s;
  }
</style>

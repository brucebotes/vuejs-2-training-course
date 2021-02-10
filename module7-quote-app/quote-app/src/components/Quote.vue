<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc" name="subtitle">Default substitle</span>
    </div>
    <hr />
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

.title {
  font-style: italic;
}
/*
h3 {
  color: red;
}
*/
</style>

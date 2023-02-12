<template>
  <div class="PageWrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageWrapper",
};
</script>

<style scoped>
.PageWrapper {
  padding: 20px 80px;
}
@media screen and (max-width: 1000px) {
  .PageWrapper {
    padding: 20px 40px;
  }
}
@media screen and (max-width: 500px) {
  .PageWrapper {
    padding: 10px 10px;
  }
}
</style>

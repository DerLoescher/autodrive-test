<template>
  <button
    class="BasicButton"
    :style="{ 'background-color': color }"
    @click="clickBtn"
  >
    <span class="BasicButton-title">{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    title: {
      type: String,
      default: "click me",
    },
    color: {
      type: String,
      default: "#3B82F6",
    },
  },
  methods: {
    clickBtn() {
      this.$emit("clickButton");
    },
  },
};
</script>

<style scoped>
.BasicButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 9px 17px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  height: 38px;
}
.BasicButton:hover {
  opacity: 0.8;
}
.BasicButton:active > .BasicButton-title {
  filter: brightness(0.8);
}
.BasicButton-title {
  color: white;
}
</style>

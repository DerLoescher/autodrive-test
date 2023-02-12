<template>
  <teleport to="body">
    <div class="BasicModal" @click="closeModal">
      <div class="BasicModal-window" @click.stop>
        <p class="BasicModal-header">
          <slot name="header"></slot>
        </p>
        <div class="BasicModal-content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "BasicModal",
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  emits: ["closeModal"],
};
</script>

<style scoped>
.BasicModal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
  height: 100%;
  background: rgba(107, 114, 128, 0.75);
}
.BasicModal-window {
  max-width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: #ffffff;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
.BasicModal-header {
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #111827;
}
@media screen and (max-width: 500px) {
  .BasicModal {
    padding: 10px;
  }
}
</style>

<template>
  <div class="BasicSelect">
    <label class="BasicSelect-label" :for="name"
      >{{ title }}<sup v-if="isRequired">*</sup></label
    >
    <select
      class="BasicSelect-area"
      :name="name"
      @change="onSelect($event.target.value)"
      :value="modelValue"
    >
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BasicSelect",
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Number,
      default: null,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onSelect(value) {
      if (value !== this.modelValue) {
        this.$emit("update:modelValue", value);
      }
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.BasicSelect {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.BasicSelect-label {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #374151;
}
.BasicSelect-area {
  padding: 0px 13px;
  width: 170px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
}
</style>

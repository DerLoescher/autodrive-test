<template>
  <div class="PhoneInput">
    <label class="PhoneInput-label" :for="name" v-if="title"
      >{{ title }}<sup v-if="isRequired">*</sup></label
    >
    <input
      class="PhoneInput-area"
      type="tel"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      v-phone
      @change="onInput($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "PhoneInput",
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
    type: {
      type: String,
      default: "text",
    },
    rules: {
      type: Function,
      default: (item) => item,
    },
    placeholder: {
      type: String,
      default: "",
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(value) {
      if (value !== this.modelValue) {
        this.rules(value);
        this.$emit("update:modelValue", value);
      }
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.PhoneInput {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.PhoneInput-label {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #374151;
}
.PhoneInput-area {
  padding: 9px 13px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
}
</style>

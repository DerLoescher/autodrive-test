<template>
  <div class="OrderForm">
    <BasicInput
      :name="'name'"
      :title="'Имя'"
      :type="'name'"
      isRequired
      v-model="name"
    />
    <BasicInput :name="'phone'" :title="'Телефон'" :type="'phone'" isRequired />
    <BasicInput :name="'email'" :title="'Email'" :type="'email'" isRequired />
    <BasicSelect
      :name="'city'"
      :title="'Город'"
      :options="cities"
      isRequired
      v-model="orderForm.city_id"
    />
    <BasicButton class="OrderForm-submit" />
  </div>
</template>

<script>
import BasicSelect from "../shared/BasicSelect.vue";
import BasicButton from "../shared/BasicButton.vue";
import BasicInput from "../shared/BasicInput.vue";
import citiesList from "../shared/const/cities.json";

export default {
  name: "OrderForm",
  components: { BasicInput, BasicButton, BasicSelect },
  props: {
    form: {
      type: Object,
    },
  },
  data() {
    return {
      name: null,
      orderForm: { ...this.form },
      cities: citiesList,
    };
  },
};
</script>

<style scoped>
.OrderForm {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    ". . . ."
    ". . . E";
  gap: 20px;
}
.OrderForm-submit {
  grid-area: E;
}
</style>

<template>
  <div class="OrderForm">
    {{ this.orderForm.mail }}
    <BasicInput
      :name="'name'"
      :title="'Имя'"
      :type="'name'"
      :placeholder="'Иван Иванов'"
      isRequired
      v-model="orderForm.name"
    />
    <PhoneInput
      :name="'phone'"
      :title="'Телефон'"
      :placeholder="'+7 (___) ___-__-__'"
      isRequired
      v-model="orderForm.phone"
    />
    <BasicInput
      :name="'email'"
      :title="'Email'"
      :type="'email'"
      :rules="emailValidation"
      :placeholder="'you@example.com'"
      isRequired
      v-model="orderForm.email"
    />
    <BasicSelect
      class="OrderForm-city"
      :name="'city'"
      :title="'Город'"
      :options="cities"
      isRequired
      v-model="orderForm.city_id"
    />
    <BasicButton
      class="OrderForm-submit"
      :color="'#16A34A'"
      :title="'Отправить'"
      @click="submitForm"
    />
  </div>
</template>

<script>
import PhoneInput from "./PhoneInput.vue";
import BasicSelect from "../shared/BasicSelect.vue";
import BasicButton from "../shared/BasicButton.vue";
import BasicInput from "../shared/BasicInput.vue";
import citiesList from "../shared/const/cities.json";
import { mapActions } from "vuex";

export default {
  name: "OrderForm",
  components: { BasicInput, BasicButton, BasicSelect, PhoneInput },
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
      phone: "",
    };
  },
  methods: {
    ...mapActions(["POST_ORDER"]),
    emailValidation(email) {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return email;
      } else {
        return false;
      }
    },
    phoneValidation(phone) {
      if (phone) {
        return "+" + phone.replace(/\D/g, "");
      } else {
        return false;
      }
    },
    validateForm() {
      let phone = this.phoneValidation(this.orderForm.phone);
      let email = this.emailValidation(this.orderForm.email);
      let name = this.orderForm.name;
      let city = this.orderForm.city_id;
      if ((email && name && phone && city) == false) {
        return false;
      }
      this.orderForm.phone = phone;
      this.orderForm.email = email;
    },
    async submitForm() {
      if (this.validateForm() === false) {
        return;
      }
      let result = await this.POST_ORDER(this.orderForm);
      this.$emit("orderSubmitted", result);
      this.orderForm = { ...this.form };
    },
  },
};
</script>

<style scoped>
.OrderForm {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    ". . . D"
    ". . . E";
  gap: 20px;
}
.OrderForm-submit {
  grid-area: E;
  align-self: end;
}
.OrderForm-city {
  grid-area: D;
}
@media screen and (max-width: 1000px) {
  .OrderForm {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      ". . . "
      "D D E";
  }
}
@media screen and (max-width: 800px) {
  .OrderForm {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      ". .  "
      ". D"
      ". E";
  }
}
@media screen and (max-width: 600px) {
  .OrderForm {
    grid-template-columns: 1fr;
    grid-template-areas:
      "."
      "."
      "."
      "D"
      "E";
  }
}
</style>

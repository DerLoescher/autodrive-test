<template>
  <PageWrapper>
    <div class="MainPage">
      <BasicButton
        :title="buttons.moscow.title"
        :color="buttons.moscow.color"
        @clickButton="orderInCity(buttons.moscow.city_id)"
      />
      <BasicButton
        :title="buttons.spb.title"
        :color="buttons.spb.color"
        @clickButton="orderInCity(buttons.spb.city_id)"
      />
    </div>
  </PageWrapper>
  <BasicModal @closeModal="onCloseModal" v-if="modalIsOpen">
    <template #header>Заказать звонок</template>
    <template #content>
      <OrderForm :form="orderForm" @orderSubmitted="onOrderSubmit" />
    </template>
  </BasicModal>
  <BasicModal v-if="resultHtml" @closeModal="resetResult">
    <template #header>{{
      this.resultStatus ? "Заказ создан" : "Ошибка"
    }}</template>
    <template #content>
      <div v-html="resultHtml"></div>
    </template>
  </BasicModal>
</template>

<script>
import OrderForm from "../components/OrderForm.vue";
import BasicModal from "../shared/BasicModal.vue";
import BasicButton from "../shared/BasicButton.vue";
import PageWrapper from "../shared/PageWrapper.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainPage",
  components: { PageWrapper, BasicButton, BasicModal, OrderForm },
  data() {
    return {
      buttons: {
        moscow: {
          color: "#3B82F6",
          title: "Заказать в Москву",
          city_id: 1,
        },
        spb: {
          color: "#0D9488",
          title: "Заказать в Санкт-Петербург",
          city_id: 2,
        },
      },
      modalIsOpen: false,
      orderForm: {
        name: null,
        phone: null,
        email: null,
        city_id: null,
      },
      resultHtml: null,
      resultStatus: null,
    };
  },
  computed: { ...mapGetters(["ORDER_RESULT"]) },
  methods: {
    onCloseModal() {
      this.modalIsOpen = false;
    },
    onOpenModal() {
      this.modalIsOpen = true;
    },
    orderInCity(cityId) {
      this.orderForm.city_id = cityId;
      this.onOpenModal();
    },
    onOrderSubmit(result) {
      this.onCloseModal();
      this.resultStatus = result;
      this.resultHtml = this.ORDER_RESULT;
    },
    resetResult() {
      this.resultHtml = null;
    },
  },
};
</script>

<style scoped>
.MainPage {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
}
</style>

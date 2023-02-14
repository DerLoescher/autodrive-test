import { createStore } from "vuex";
import api from "@/api";

export default createStore({
  state: {
    orderResult: null,
  },
  mutations: {
    setOrderResult(state, response) {
      state.orderResult = response;
    },
  },
  actions: {
    async POST_ORDER(context, formData) {
      const response = await api.postOrder(formData);
      context.commit("setOrderResult", response.data);
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    },
  },
  getters: {
    ORDER_RESULT(state) {
      return state.orderResult;
    },
  },
});

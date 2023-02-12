import axios from "axios";

export default {
  async postOrder(form) {
    let url = "http://hh.autodrive-agency.ru/test-tasks/front/task-7/";
    let data = false;
    await axios
      .post(url, form)
      .then((Response) => {
        data = Response.data;
      })
      .catch((e) => (data = e.message));
    return data;
  },
};

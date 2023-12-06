import Vuex from "vuex";
import axios from "axios";

const store = new Vuex.Store({

  state: {
    serverUrl: "localhost:9000",
    game: {},
  },
  mutations: {
  },
  actions: {
    async getData({ commit }) {
      const response = await axios.get("http://localhost:9000/api/gameJson")
      console.log(response.data);
    }
  },
  modules: {},
  getters: {}

})

export default store;
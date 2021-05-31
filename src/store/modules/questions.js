import axios from "axios";

const state = {
  question: {},
};
const getters = {
  question(state) {
    return state.question;
  },
};
const actions = {
  async getQuestions({ commit }, index) {
    const response = await axios.get("http://localhost:5000/api.json");
    console.log(response);
    console.log(index);
    commit("getQuestions", response.data.results[index]);
  },
};
const mutations = {
  getQuestions(state, questions) {
    state.question = questions;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};

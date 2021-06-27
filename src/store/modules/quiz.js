import axios from "axios";
import _ from "lodash";
// import router from "../../router/index";
const state = {
  questions: [],
  question: {
    questionText: null,
    answers: [],
    trueAnswer: null,
    category: null,
    type: null,
    difficulty: null,
  },
  status: {
    currentIndex: null,
    unAnswered: null,
    Answered: null,
  },
  result: {
    correctAnswers: null,
    incorroctAnswers: null,
    noAnswers: null,
    score: null,
  },
  record: [],
  index: 0,
  start: false,
  finish: null,
  count: null,
};
const getters = {
  questions(state) {
    return state.questions;
  },
  question(state) {
    return state.question;
  },
};
const actions = {
  async getQuestions({ commit }, questionNumber) {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${questionNumber.number}`
    );
    console.log(response);
    commit("count", questionNumber.number);
    commit("getQuestions", response.data.results);
    commit("question", response.data.results);
  },
  nextQuestion({ commit }) {
    commit("nextQuestion");
    commit("question");
  },
  beforeQuestion({ commit }) {
    commit("beforeQuestion");
    commit("question");
  },
  check({ commit }, i) {
    commit("check", i);
  },
};
const mutations = {
  count(state, count) {
    state.count = count;
  },
  getQuestions(state, questions) {
    state.questions = questions;
    state.index = 0;
    state.start = true;
  },
  question(state) {
    let result = `${state.questions[state.index].incorrect_answers},${
      state.questions[state.index].correct_answer
    }`;
    let answers = result.split(",");
    state.question = {
      questionText: state.questions[state.index].question,
      answers: _.shuffle(answers),
      trueAnswer: answers.indexOf(state.questions[state.index].correct_answer),
      category: state.questions[state.index].category,
      type: state.questions[state.index].type,
      difficulty: state.questions[state.index].difficulty,
    };
  },
  nextQuestion(state) {
    state.index++;
  },
  beforeQuestion(state) {
    state.index--;
  },
  check(state, i) {
    state;
    console.log(i);
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};

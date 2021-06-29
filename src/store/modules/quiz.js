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
  status: {},
  result: {
    correctAnswers: 0,
    incorroctAnswers: 0,
    noAnswers: 0,
    score: 0,
  },
  records: [],
  recordsLight: [],
  index: 0,
  start: false,
  finish: null,
  count: null,
  submited: false,
};
const getters = {
  questions(state) {
    return state.questions;
  },
  question(state) {
    return state.question;
  },
  result(state) {
    return state.result;
  },
  records(state) {
    return state.records;
  },
  recordsLight(state) {
    return state.recordsLight;
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
  submitQuestion({ commit }, record) {
    commit("submitQuestion", record);
  },
  finalCheck({ commit }) {
    commit("finalCheck");
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
    let res = [
      ...state.questions[state.index].incorrect_answers,
      state.questions[state.index].correct_answer,
    ];
    let answers = _.shuffle(res);
    state.question = {
      questionText: state.questions[state.index].question,
      answers: answers,
      trueAnswer: answers.indexOf(state.questions[state.index].correct_answer),
      category: state.questions[state.index].category,
      type: state.questions[state.index].type,
      difficulty: state.questions[state.index].difficulty,
    };
    state.recordsLight.push(state.question);
  },
  nextQuestion(state) {
    state.index++;
    state.submited = false;
  },
  beforeQuestion(state) {
    state.index--;
    state.submited = false;
  },
  submitQuestion(state, record) {
    state.submited = true;
    state.records.push(record);
  },
  finalCheck(state) {
    state.records.map((question) => {
      if (question.selectedIndex === state.question.trueAnswer) {
        state.result.correctAnswers++;
      } else if (question.selectedIndex === null) {
        // state.result.noAnswers++;
      } else {
        state.result.incorroctAnswers++;
      }
    });
    state.finish = true;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};

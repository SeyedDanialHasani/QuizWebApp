<template>
  <div class="quiz">
    <b-jumbotron>
      <template #header>Quiz</template>
      <div>
        <br />
        <span
          >corrects:{{ status.corrects }}
          <br />
          incorrects:{{ status.incorrects }}
          <br />
        </span>
      </div>
      <template #lead>
        <p>{{ index + 1 }}.<span v-html="question.question"></span></p>
      </template>
      <hr class="my-4" />
      <b-list-group>
        <div v-for="(answer, i) in answers" :key="i">
          <b-list-group-item
            button
            @click="checkAnswer(i)"
            :disabled="submited"
            :class="[
              i !== tindex && submited
                ? 'bg-danger'
                : i === tindex && submited
                ? 'bg-success'
                : cindex === i
                ? 'bg-primary'
                : '',
            ]"
            class="text-dark"
          >
            {{ i + 1 }}.{{ answer }}
          </b-list-group-item>
        </div>
      </b-list-group>
      <div class="text-center py-5">
        <b-button-group>
          <b-button
            variant="warning"
            class="text-dark"
            @click="before"
            :disabled="index === 0 || !selected || !submited"
            >before</b-button
          >
          <b-button
            variant="primary"
            class="text-dark"
            @click="next"
            :disabled="index >= 4 || !selected || !submited"
            >next</b-button
          >
          <b-button
            variant="success"
            class="text-dark"
            @click="submitAnswer"
            :disabled="!selected || submited"
            >Submit</b-button
          >
        </b-button-group>
      </div>

      <b-list-group>
        <b-list-group-item>
          <p>Type:{{ question.type }}</p>
        </b-list-group-item>
        <b-list-group-item>
          <p>Dificulty:{{ question.difficulty }}</p>
        </b-list-group-item>
        <b-list-group-item>
          <p>Category:{{ question.category }}</p>
        </b-list-group-item>
      </b-list-group>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";
export default {
  name: "Quiz",
  data() {
    return {
      index: 0,
      tindex: null,
      cindex: null,
      selected: null,
      submited: null,
      variant: {
        success: null,
        danger: null,
      },
      status: {
        corrects: 0,
        incorrects: 0,
      },
    };
  },
  methods: {
    ...mapActions(["getQuestions"]),
    before() {
      this.index--;
      this.getQuestions(this.index);
    },
    next() {
      this.index++;
      this.getQuestions(this.index);
      this.submited = null;
      this.selected = null;
      this.cindex = null;
    },
    checkAnswer(i) {
      this.cindex = i;
      this.selected = true;
      console.log(i, "checkAnswer");
    },
    submitAnswer() {
      this.submited = true;
      if (this.cindex === this.tindex) {
        this.status.corrects++;
        console.log(true);
      } else {
        this.status.incorrects++;
        console.log(false);
      }
      console.log("submitAnswer");
    },
  },
  computed: {
    ...mapGetters(["question"]),
    answers() {
      let allAnswers = [...this.question.incorrect_answers];
      allAnswers.push(this.question.correct_answer);
      const answers = _.shuffle(allAnswers);
      console.log(answers, "del");
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.tindex = answers.indexOf(this.question.correct_answer);
      return answers;
    },
  },
  created() {
    this.getQuestions(this.index);
  },
};
</script>

<style></style>

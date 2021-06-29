<template>
  <div class="quiz">
    <b-jumbotron>
      <template #header>Quiz</template>
      <div>
        <br />
      </div>
      <template #lead>
        <p>
          {{ index + 1 }}.
          <span v-html="question.questionText"></span>
        </p>
      </template>
      <hr class="my-4" />
      <b-list-group>
        <div v-for="(answer, i) in question.answers" :key="i">
          <b-list-group-item
            button
            class="text-dark"
            @click="selectIndex(i)"
            :variant="i === selectedIndex ? 'primary' : ''"
          >
            {{ i + 1 }}.{{ answer }}
          </b-list-group-item>
        </div>
      </b-list-group>

      <div class="text-center">
        <b-button-group class="w-100">
          <b-button
            variant="warning"
            class="text-dark"
            @click="before()"
            :disabled="index <= 0"
            >before</b-button
          >

          <b-button
            variant="primary"
            class="text-dark"
            @click="next()"
            :disabled="index + 1 >= count"
            >next</b-button
          >
        </b-button-group>
      </div>
      <div>
        <b-button block variant="success" @click="submit()" :disabled="submited"
          >Submit</b-button
        >
      </div>
      <div>
        <b-button block variant="dark" @click="finalCheck()"
          >Finish quiz</b-button
        >
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
export default {
  name: "Quiz",
  data() {
    return { selectedIndex: null };
  },
  methods: {
    ...mapActions([
      "getQuestions",
      "beforeQuestion",
      "nextQuestion",
      "finalCheck",
      "submitQuestion",
    ]),
    selectIndex(i) {
      this.selectedIndex = i;
    },
    before() {
      this.beforeQuestion();
    },
    next() {
      this.nextQuestion();
    },
    submit() {
      this.$store.dispatch("submitQuestion", {
        question: this.index + 1,
        selectedIndex: this.selectedIndex,
      });
    },
  },
  computed: {
    ...mapGetters(["question"]),
    index() {
      return this.$store.state.quiz.index;
    },
    count() {
      return this.$store.state.quiz.count;
    },
    submited() {
      return this.$store.state.quiz.submited;
    },
  },
  watch: {
    question: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
      },
    },
  },
};
</script>

<style></style>

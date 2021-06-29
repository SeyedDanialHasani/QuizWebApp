<template>
  <div>
    <div class="text-center">
      <b-jumbotron header="Quiz" lead="A Quiz Web Application">
        <div>
          <b-form>
            <b-form-group
              id="input-group-1"
              label="How many question do you want to answer?"
              label-for="input-1"
              description="Help:from 1 to 50"
            >
              <b-form-input
                id="input-1"
                v-model="questionInfo.number"
                type="number"
                placeholder="number"
                required
              ></b-form-input>
            </b-form-group>
            <div>
              <b-button
                block
                variant="primary"
                class="btn-lg text-dark"
                @click="getQuestions(questionInfo)"
                >Go</b-button
              >
            </div>
          </b-form>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "First",

  data() {
    return {
      questionInfo: {
        number: 0,
      },
    };
  },
  methods: {
    ...mapActions(["getQuestions"]),
  },
};
</script>

<style></style>

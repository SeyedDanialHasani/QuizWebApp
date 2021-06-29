<template>
  <div>
    <div>
      <div>
        <h1 class="bg-success text-center py-5">
          correctAnswers:{{ result.correctAnswers }}
        </h1>
        <br />
        <h1 class="bg-danger text-center py-5">
          incorrectAnswers:{{ result.incorroctAnswers }}
        </h1>
      </div>
    </div>
    <div v-for="(recordLight, i) in recordsLight" :key="i">
      <div>
        <span>{{ i + 1 }}-</span>{{ recordLight.questionText }}
      </div>
      <div>
        <b-list-group>
          <div v-for="(answer, b) in recordLight.answers" :key="b">
            <b-list-group-item
              class="text-dark"
              :variant="
                b === recordLight.trueAnswer
                  ? 'success'
                  : b !== recordLight.trueAnswer
                  ? 'danger'
                  : b === records[i].selectedIndex
                  ? 'primary'
                  : ''
              "
            >
              {{ b + 1 }}.{{ answer }}
            </b-list-group-item>
          </div>
        </b-list-group>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Result",
  computed: {
    ...mapGetters([
      "result",
      "records",
      "questions",
      "question",
      "recordsLight",
    ]),
  },
};
</script>

<style></style>

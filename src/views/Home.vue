<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col v-if="!start && !finish"><Start /></b-col>
        <b-col v-if="start && !finish"><Quiz /></b-col>
        <b-col v-if="finish"><Result /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import Start from "@/components/Start";
import Quiz from "@/components/Quiz";
import Result from "@/components/Result";
export default {
  name: "Home",
  components: { Start, Quiz, Result },
  computed: {
    start() {
      return this.$store.state.quiz.start;
    },
    finish() {
      return this.$store.state.quiz.finish;
    },
  },
};
</script>

<style></style>

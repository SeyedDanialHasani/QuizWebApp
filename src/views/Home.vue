<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col v-if="!start"><Start /></b-col>
        <b-col v-if="start"><Quiz /></b-col>
        <b-col v-if="false"><Result /></b-col>
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
  },
};
</script>

<style></style>

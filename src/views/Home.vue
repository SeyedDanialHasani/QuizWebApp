<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col><Quiz /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz";
export default {
  name: "Home",
  components: {
    Quiz,
  },
};
</script>

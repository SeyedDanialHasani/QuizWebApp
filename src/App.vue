<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style>
@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-SemiBold.ttf");
}
* {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
</style>

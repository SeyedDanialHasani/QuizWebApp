<template>
  <div class="header">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand
          ><router-link class="text-decoration-none text-dark" to="/"
            >Quiz</router-link
          ></b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              ><router-link class="text-decoration-none text-dark" to="/"
                >Home</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="text-decoration-none text-dark" to="/about"
                >About</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style></style>

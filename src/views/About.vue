<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WelcomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomePage from "@/components/WelcomePage.vue";

export default {
  name: "About",
  components: {
    WelcomePage
  }
};
</script>
<template>
  <div class="home">
    <NavBar />
    <ListGradient />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/HomePageComponents/NavBar.vue";
import ListGradient from "@/components/CartPageComponents/ListGradient.vue"
export default {
  name: "Cart",
  components: {
    NavBar,
    ListGradient , 
  }
};
</script>

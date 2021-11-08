<template>
  <div class="home">
    <NavBar/>
    <Carousel />
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/HomePageComponents/NavBar.vue";
import Carousel from "@/components/HomePageComponents/Carousel.vue";
import Content from "@/components/HomePageComponents/Content.vue";
export default {
  name: "Home",
  components: {
    NavBar , Carousel , Content
  }
};
</script>

<template>
  <div class="id">
    <NavBar />
    <AddIngredientContent />
  </div>
</template>

<script>
import NavBar from "../components/HomePageComponents/NavBar.vue";
import AddIngredientContent from '../components/AddIngredientComponents/AddIngredientContent.vue';
export default {
  name: "AddIngredient",
  components : {
    NavBar , AddIngredientContent
  }
};
</script>

<style scoped>
label,
h1,
.btn-add {
  font-family: "Baloo Tammudu 2", cursive;
}
input {
  font-family: "Baloo Da 2", cursive;
}
</style>
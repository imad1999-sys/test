<template>
  <div class="id">
    <NavBar />
    <EditIngredContent />
  </div>
</template>

<script>
import NavBar from "../components/HomePageComponents/NavBar.vue";
import EditIngredContent from '../components/EditIngredientComponents/EditIngredContent.vue';
export default { 
  name: "EditIngredient",
  components : {
    NavBar , EditIngredContent
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
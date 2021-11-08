<template>
  <div class="add-recipe">
    <NavBar />
    <RecipeEditContent />
  </div>
</template>

<script>
import NavBar from "@/components/HomePageComponents/NavBar.vue";
import RecipeEditContent from "../components/RecipePageComponents/RecipeEditContent.vue";
export default {
  name: "AddRecipe",
  components: {
    NavBar,
    RecipeEditContent
  }
};
</script>

<style scoped>
</style>
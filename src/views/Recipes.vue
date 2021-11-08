<template>
  <div class="recipe-page">
    <NavBarRecipe />
    <ListRecipes />
  </div>
</template>

<script>
import NavBarRecipe from "@/components/RecipePageComponents/NavBarRecipe.vue";
import ListRecipes from "@/components/RecipePageComponents/ListRecipes.vue";
export default {
  name: "Recipes",
  components: {
    NavBarRecipe,
    ListRecipes
  }
};
</script>

<style scoped>
</style>
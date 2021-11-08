<template>
  <div class="root">
    <NavBarRecipe />
    <RecipeDetailContent/>
  </div>
</template>

<script>
import NavBarRecipe from "../components/RecipePageComponents/NavBarRecipe.vue";
import RecipeDetailContent from "../components/RecipeDetailComponents/RecipeDetailContent.vue";
export default {
  name: "RecipeDetail",
  components: {
    NavBarRecipe,
    RecipeDetailContent
  }
};
</script>

<style scoped>
</style>
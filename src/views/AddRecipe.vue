<template>
  <div class="add-recipe">
    <NavBar />
    <AddContent />
  </div>
</template>

<script>
import NavBar from "@/components/HomePageComponents/NavBar.vue";
import AddContent from "@/components/AddRecipeComponents/AddContent.vue";
export default {
  name: "AddRecipe",
  components: {
    NavBar,
    AddContent
  }
};
</script>

<style scoped>
</style>
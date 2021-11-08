<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Recipes List</h1>
      <hr class="my-4" />
      <p>to see more about recipes</p>
      <router-link class="btn btn-primary btn-lg btn-recipe" to="/recipes"><i class="fas fa-info-circle"></i>Click Here</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:"Content"
}
</script>

<style scoped>
.btn-recipe{
  font-family: 'Baloo Tammudu 2', cursive;
}
h1{
  font-family: 'Baloo Tammudu 2', cursive;
}
p{
  font-family: 'Baloo Da 2', cursive;
}
</style>
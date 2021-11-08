<template>
  <div class="card" style="width: 40rem;" v-if="food">
    <img :src="food.Image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{food.Name}}</h5>
      <p class="card-text">{{food.Description}}</p>
    </div>
    <ul
      class="list-group list-group-flush"
      v-for="(gradi , index) in food.Gradients"
      v-bind:key="index"
    >
      <li class="list-group-item" id="list-group-item">{{gradi.Quantity}} --- {{gradi.Name}}</li>
      <button class="btn btn-outline-primary" v-on:click="storeIngredients">
        <i class="fas fa-cart-plus"></i> Add Ingredients To Shopping Cart
      </button>
    </ul>
    <br />
    <br />
    <br />
    <router-link class="btn btn-outline-primary" to="/recipe">
      <i class="fas fa-sign-out-alt"></i> Back To Recipe List
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    food() {
      console.log(this.$store.getters.food(parseInt(this.$route.params.id)));
      return this.$store.getters.food(parseInt(this.$route.params.id));
    }
  },
  methods: {
    storeIngredients: function() {
      const Ingredients = document.getElementById("list-group-item").innerHTML;
      console.log(Ingredients);
      localStorage.setItem(Ingredients);
    }
  },
  name: "RecipeDetailContent"
};
</script>

<style scoped>
img {
  width: 300px;
  margin-left: 170px;
}
h5 {
  font-family: "Baloo Tamma 2", cursive;
}
.btn-outline-primary {
  font-family: "Baloo Tammudu 2", cursive;
}
p,
li {
  font-family: "Baloo Da 2", cursive;
}
.card {
  margin-left: 350px;
}
</style>

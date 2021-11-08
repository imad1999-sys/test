<template>
  <div class="row" id="foodlist">
    <div class="col-sm-6">
      <div class="card" id="card" v-for="(food , index) in foodlist" :key="index">
        <div class="card-body">
          <img alt="RecipeImage" :src="food.Image" />
          <h5 class="card-title">{{food.Name}}</h5>
          <p class="card-text">{{food.Description}}</p>
          <router-link class="btn btn-outline-primary" :to="`/recipe/${food.id}`">
            <i class="fas fa-info-circle"></i>Recipe Detail
          </router-link>
          <router-link class="btn btn-outline-info" :to="`/recipe/edit/${food.id}`">
            <i class="fas fa-edit"></i>Recipe Edit
          </router-link>
          <button class="btn btn-outline-danger" @click="deleteCard">
            <i class="fas fa-minus-circle"></i>Recipe Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    foodlist() {
      return this.$store.getters.foodlist;
    }
  },
  methods : {
    deleteCard : function(){
      document.getElementById("card").innerHTML = "";
    }
  }, 
  name: "ListRecipes"
};
</script>

<style scoped>
.btn-outline-info,
.btn-outline-danger {
  margin-left: 10px;
}
.btn-outline-danger,
.btn-outline-info,
.btn-outline-primary {
  font-family: "Baloo Tammudu 2", cursive;
}
h5,
img,
p {
  font-family: "Baloo Tamma 2", cursive;
}
img {
  width: 300px;
}
.card {
  width: 1000px;
  margin-left: 170px;
}
.card-body {
  width: 1000px;
}
</style>
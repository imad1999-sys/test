<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody v-for="(food , index) in foodlist" v-bind:key="index">
      <tr v-for="(gradi , index1) in food.Gradients" v-bind:key="index1"  id="row" >
        <td class="name">{{gradi.Name}}</td>
        <td class="quantity">{{gradi.Quantity}}</td>
        <td>
          <router-link class="btn btn-outline-primary" to="/cart/add">
            <i class="fas fa-info-circle"></i>Add Ingredient
          </router-link>
          <router-link class="btn btn-outline-info" to="/cart/edit">
            <i class="fas fa-edit"></i>Quantity Edit
          </router-link>
          <button class="btn btn-outline-danger" @click="deleteQunatity">
            <i class="fas fa-minus-circle"></i>Quantity Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  computed: {
    foodlist() {
      console.log(this.$store.getters.foodlist);
      return this.$store.getters.foodlist;
    }
  },
  methods : {
    deleteQunatity : function(){
      document.getElementById("row").innerHTML = "";
    }
  },
  name: "ListGradient"
};
</script>

<style scoped>
th {
  font-family: "Baloo Tammudu 2", cursive;
}
.btn-outline-danger,
.btn-outline-info,
.btn-outline-primary {
  font-family: "Baloo Tammudu 2", cursive;
}
.image,
.name,
.quantity {
  font-family: "Baloo Da 2", cursive;
}
.btn-outline-info,
.btn-outline-danger {
  margin-left: 10px;
}
</style>
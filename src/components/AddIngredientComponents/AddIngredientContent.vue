<template>
  <div class="container">
    <br />
    <h1>Ingredient Insertion Page</h1>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Ingredient Name:</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Ingredient Quantity:</label>
            <input type="text" class="form-control" id="description" />
          </div>
          <router-link
            type="submit"
            class="btn btn-primary btn-add"
            to="/cart"
            @click="addIngredient"
          >
            <i class="fas fa-plus"></i>Add Ingredient
          </router-link>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addIngredient: function() {
      let Obj = {
        name: document.getElementById("name").value,
        quantity: document.getElementById("quantity").value
      };
      let Object = JSON.stringify(Obj);
      localStorage.setItem("Obj", Obj);
      console.log(Object);
    }
  },
  name: "AddIngredientContent"
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
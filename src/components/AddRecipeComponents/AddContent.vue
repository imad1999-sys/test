<template>
  <div class="container">
    <br />
    <h1>Recipe Insertion Page</h1>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Recipe Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Recipe Description:</label>
            <input type="text" class="form-control" id="description" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Recipe Ingredients:</label>
            <input type="text" class="form-control" id="ingredients" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Recipe Quantity:</label>
            <input type="text" class="form-control" id="quantity" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Recipe Image:</label>
            <input type="file" class="form-control" id="image" />
          </div>
          <router-link type="submit" class="btn btn-primary btn-add" to="/recipes">
            <i class="fas fa-plus"></i>Add Recipe
          </router-link>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods : {
    addRecipe : function() {
      document.querySelector('image').addEventListener("change" , function(){
        const reader = new FileReader();
        reader.addEventListener("load" , () => {
          localStorage.setItem("recent-image" , reader.result);
        });
        reader.readAsDataURL(this.file[0]);
      })
      let Obj = {
        name : document.getElementById("name").value , 
        description : document.getElementById("description").value , 
        quantity : document.getElementById("quantity").value , 
        ingredients : document.getElementById("ingredients").value , 
      }
      let Object = JSON.stringify(Obj);
      localStorage.setItem('Obj' , Obj);
      console.log(Object);
    }
  } , 
  name: "AddRecipe"
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
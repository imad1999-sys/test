<template>
  <div class="container">
    <h1>Signup Page</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">FullName:</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address:</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password:</label>
            <input type="password" class="form-control" id="password" />
          </div>
          <router-link type="submit" class="btn btn-primary btn-signup" to="/" @click="signUp">
            <i class="fas fa-user-plus"></i>Signup
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
    signUp: function() {
      let Obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value
      };
      let Object = JSON.stringify(Obj);
      localStorage.setItem("Obj", Obj);
      console.log(Object);
    }
  },
  name: "Signup"
};
</script>


<style scoped>
h1 {
  margin-top: 50px;
  font-family: "Baloo Tammudu 2", cursive;
}
.row {
  margin-top: 120px;
}
input {
  font-family: "Baloo Da 2", cursive;
}
label {
  font-family: "Baloo Tammudu 2", cursive;
}
.btn-signup {
  font-family: "Baloo Tammudu 2", cursive;
}
</style>
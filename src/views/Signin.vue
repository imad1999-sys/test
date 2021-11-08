<template>
  <div class="container">
    <h1>Signin Page</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password" />
          </div>
          <router-link type="submit" class="btn btn-primary btn-signin" to="/">
            <i class="fas fa-sign-in-alt"></i>Signin
          </router-link>
          <br />
          <hr />
          <br />
          <p>if you don't have an account</p>
          <router-link class="btn btn-outline-primary btn-signup" to="/signup" @click="signIn">
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
    signIn: function() {
      let Obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
      let Object = JSON.stringify(Obj);
      localStorage.setItem("Obj", Obj);
      console.log(Object);
    }
  },
  name: "Signin"
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
label {
  font-family: "Baloo Tammudu 2", cursive;
}
.btn-signin,
.btn-signup {
  font-family: "Baloo Tammudu 2", cursive;
}
input,
p {
  font-family: "Baloo Da 2", cursive;
}
</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      <i class="fas fa-hamburger"></i> RecipeApp
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item cart">
          <router-link class="btn btn-outline-dark" to="/cart">
            <i class="fas fa-shopping-cart"></i> Shopping Cart
          </router-link>
        </li>
        <li class="nav-item signout">
          <router-link class="btn btn-outline-dark" to="/signin">
            <i class="fas fa-sign-out-alt"></i> Signout
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.cart{
  margin-left: 950px;
  font-family: 'Baloo Tammudu 2', cursive;
}
.signout {
  margin-left: 10px;
  font-family: 'Baloo Tammudu 2', cursive;
}
.navbar-brand{
font-family: 'Baloo Tammudu 2', cursive;
}
</style>
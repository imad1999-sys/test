import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Recipes from "../views/Recipes.vue";
import Cart from "../views/Cart.vue";
import AddRecipe from "../views/AddRecipe.vue";
import RecipeDetail from "../views/RecipeDetail.vue";
import AddIngredient from "../views/AddIngredient.vue";
import EditIngredient from "../views/EditIngredient.vue";
import EditRecipe from "../views/EditRecipe.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes
  },
  {
    path: "/recipe/edit/:id",
    name: "EditRecipe",
    component: EditRecipe
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/cart/add",
    name: "AddIngredient",
    component: AddIngredient
  },
  {
    path: "/cart/edit",
    name: "EditIngredient",
    component: EditIngredient
  },
  {
    path: "/add",
    name: "Add",
    component: AddRecipe
  },
  {
    path: '/recipe/:id',
    name: "Details",
    component: RecipeDetail
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

export const router = new VueRouter({
  mode: "history",
  routes
});


import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    foodlist: [
      {
        id: 1,
        Name: "Pizza",
        Description:
          "dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese",
        Image:
          "https://cdn.pixabay.com/photo/2017/09/30/15/10/pizza-2802332_960_720.jpg",
        Gradients: [
          {
            Name: "cups (355 ml) warm water (105°F-115°F)",
            Quantity: "1 1/2",
          },
          {
            Name: "package (2 1/4 teaspoons) of active dry yeast",
            Quantity: "1",
          },
          {
            Name: "cups (490 g) bread flour",
            Quantity: "3 3/4",
          },
          {
            Name:
              "tablespoons extra virgin olive oil (omit if cooking pizza in a wood-fired pizza oven)",
            Quantity: "2",
          },
          {
            Name: "teaspoons salt",
            Quantity: "2",
          },
          {
            Name: "teaspoon sugar",
            Quantity: "2",
          },
          {
            Name: "Extra virgin olive oil",
          },
          {
            Name: "Cornmeal (to help slide the pizza onto the pizza stone)",
          },
          {
            Name: "Tomato sauce (smooth, or puréed)",
          },
          {
            Name: "Firm mozzarella cheese, grated",
          },
          {
            Name: "Fresh soft mozzarella cheese, separated into small clumps",
          },
          {
            Name: "Fontina cheese, grated",
          },
          {
            Name: "Parmesan cheese, grated",
          },
          {
            Name: "Feta cheese, crumbled",
          },
          {
            Name:
              "Mushrooms, very thinly sliced if raw, otherwise first sautéed",
          },
          {
            Name: "Bell peppers, stems and seeds removed, very thinly sliced",
          },
          {
            Name: "Italian pepperoncini, thinly sliced",
          },
          {
            Name: "Italian sausage, cooked ahead and crumbled",
          },
          {
            Name: "Chopped fresh basil",
          },
          {
            Name:
              "Baby arugula, tossed in a little olive oil, added as pizza comes out of the oven",
          },
          {
            Name: "Pesto",
          },
          {
            Name: "Pepperoni, thinly sliced",
          },
          {
            Name: "Onions, thinly sliced raw or caramelized",
          },
          {
            Name: "Ham, thinly sliced",
          },
        ],
      },
      {
        id: 2,
        Name: "Sushi",
        Description:
          "is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt",
        Image:
          "https://cdn.pixabay.com/photo/2017/06/29/19/57/sushi-2455981_960_720.jpg",
        Gradients: [
          {
            Name: "sushi rice",
            Quantity: "2",
          },
          {
            Name: "a bamboo mat",
            Quantity: "10",
          },
          {
            Name: "plastic wrap",
            Quantity: "8",
          },
          {
            Name: "nori (seaweed sheets)",
            Quantity: "6",
          },
          {
            Name: "low-sodium soy sauce",
            Quantity: "4",
          },
          {
            Name: "toasted sesame seeds and/or chia seeds",
            Quantity: "7",
          },
          {
            Name: "sriracha chili sauce",
            Quantity: "3",
          },
          {
            Name: "wasabi + pickled ginger",
            Quantity: "2",
          },
        ],
      },
      {
        id: 3,
        Name: "Cake",
        Description:
          "is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked",
        Image:
          "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
        Gradients: [
          {
            Name: "(6oz) margarine or softened butter",
            Quantity: "175g",
          },
          {
            Name: "(6oz) caster sugar",
            Quantity: "175g",
          },
          {
            Name: "large eggs",
            Quantity: 3,
          },
          {
            Name: "(6oz) self-raising flour, sifted",
            Quantity: "175g",
          },
          {
            Name: "baking powder",
            Quantity: "1tsp",
          },
          {
            Name: "1tsp vanilla extract",
            Quantity: "1tsp",
          },
          {
            Name: "pinch of salt",
          },
        ],
      },
      {
        id: 4,
        Name: "Spagetti",
        Description:
          "A type of pasta, of Italian-Sicilian origin, with a long, thin and cylindrical shape. Spaghetti is made from semolina or flour and water. Dried Italian spaghetti is made from durum wheat semolina, but outside Italy and Sicily it may be made with other types of flour.",
        Image:
          "https://cdn.pixabay.com/photo/2017/02/26/13/01/pasta-2100173_960_720.jpg",
        Gradients: [
          {
            Name: "pound 85% lean ground beef",
            Quantity: "1",
          },
          {
            Name: "yellow onion chopped",
            Quantity: "1",
          },
          {
            Name: "stalks celery chopped",
            Quantity: "4",
          },
          {
            Name: "garlic cloves minced or pressed",
            Quantity: "4",
          },
          {
            Name: "29- ounce can tomato sauce",
            Quantity: "1",
          },
          {
            Name: "6- ounce can tomato paste",
            Quantity: "1",
          },
          {
            Name: "7- ounce cans sliced mushrooms",
            Quantity: "2",
          },
          {
            Name: "15- ounce can beef broth",
            Quantity: "1",
          },
          {
            Name: "6 whole cloves",
            Quantity: "5",
          },
          {
            Name: "bay leaves",
            Quantity: "2",
          },
          {
            Name: "tablespoons sugar",
            Quantity: "2",
          },
          {
            Name: "cup chopped fresh parsley or 4 teaspoons dried",
            Quantity: "1 1/4",
          },
          {
            Name: "teaspoon basil",
            Quantity: "1",
          },
          {
            Name: "teaspoon oregano",
            Quantity: "1",
          },
          {
            Name: "teaspoon kosher salt",
            Quantity: "1",
          },
          {
            Name: "teaspoon freshly ground black pepper",
            Quantity: "1",
          },
          {
            Name: "pound dried spaghetti noodles",
            Quantity: "1",
          },
          {
            Name: "grated Parmesan cheese",
            Quantity: "2",
          },
        ],
      },
      {
        id: 5,
        Name: "Hamburger",
        Description:
          "is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled",
        Image:
          "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",
        Gradients: [
          {
            Name: "pounds lean ground beef",
            Quantity: "1 1/2",
          },
          {
            Name: "onion, finely chopped",
            Quantity: "1 1/2",
          },
          {
            Name: "cup shredded Colby Jack or Cheddar cheese",
            Quantity: "1/2",
          },
          {
            Name: "teaspoon soy sauce",
            Quantity: "1",
          },
          {
            Name: "teaspoon Worcestershire sauce",
            Quantity: "1",
          },
          {
            Name: "egg",
            Quantity: "1",
          },
          {
            Name: "(1 ounce) envelope dry onion soup mix",
            Quantity: "1",
          },
          {
            Name: "clove garlic, minced",
            Quantity: "1",
          },
          {
            Name: "tablespoon garlic powder",
            Quantity: "1",
          },
          {
            Name: "teaspoon dried parsley",
            Quantity: "1",
          },
          {
            Name: "teaspoon dried basil",
            Quantity: "1",
          },
          {
            Name: "teaspoon dried oregano",
            Quantity: "1",
          },
          {
            Name: "teaspoon crushed dried rosemary",
            Quantity: "1/2",
          },
          {
            Name: "salt and pepper to taste",
          },
        ],
      },
      {
        id: 6,
        Name: "Salad",
        Description:
          "Common raw vegetables (in the culinary sense) used in a salad include cucumbers, peppers, tomatoes, onions, carrots, celery, radishes, mushrooms, avocado, olives, artichoke hearts, heart of palm, watercress, parsley, garden beets, and green beans. Nuts, berries, seeds, and flowers are less common components",
        Image:
          "https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891_960_720.jpg",
        Gradients: [
          {
            Name: "cup extra-virgin olive oil",
            Quantity: "1/4",
          },
          {
            Name: "tablespoons red wine vinegar",
            Quantity: 3,
          },
          {
            Name: "garlic clove, minced",
            Quantity: "1",
          },
          {
            Name: "teaspoon dried oregano, more for sprinkling",
            Quantity: "1/4",
          },
          {
            Name: "teaspoon Dijon mustard",
            Quantity: "1/4",
          },
          {
            Name:
              "English cucumber, cut lengthwise, seeded, and sliced ¼-inch thick",
            Quantity: "1",
          },
          {
            Name: "green bell pepper, chopped into 1-inch piece",
            Quantity: "1",
          },
          {
            Name: "cups halved cherry tomatoes",
            Quantity: "2",
          },
          {
            Name: "ounces feta cheese, cut into ½ inch cubes",
            Quantity: "5",
          },
          {
            Name: "cup thinly sliced red onion",
            Quantity: "1/3",
          },
          {
            Name: "cup pitted Kalamata olives",
            Quantity: "1/3",
          },
          {
            Name: "cup fresh mint leaves",
            Quantity: "1/3",
          },
          {
            Name: "teaspoon sea salt",
            Quantity: "1/4",
          },
          {
            Name: "Freshly ground black pepper",
          },
        ],
      },
      {
        id: 7,
        Name: "Cordon Bleu",
        Description:
          "Cordon Bleu or Cordon Bleu is a dish of meat wrapped around cheese, then baked and fried or fried. Blue veal or pork is made from veal or pork peeled into thin slices and wrapped around a slice of ham and a slice of cheese, baked, then fried or baked. Chicken cordon blue is used instead of veal",
        Image:
          "https://cdn.pixabay.com/photo/2018/06/21/22/44/cordon-bleu-3489611_960_720.jpg",
        Gradients: [
          {
            Name: "skinless, boneless chicken breast halves",
            Quantity: "4",
          },
          {
            Name: "teaspoon salt",
            Quantity: "1/4",
          },
          {
            Name: "teaspoon ground black pepper",
            Quantity: "1/5",
          },
          {
            Name: "slices Swiss cheese",
            Quantity: "6",
          },
          {
            Name: "slices cooked ham",
            Quantity: "4",
          },
          {
            Name: "cup seasoned bread crumbs",
            Quantity: "1/2",
          },
        ],
      },
    ],
  },
  getters: {
    foodlist: (state) => {
      return state.foodlist;
    },
    food: (state) => (id) => {
      return state.foodlist.find((food) => food.id === id);
    },
  },
});

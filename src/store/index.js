import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipe: null,
    recipes: [
      {
        id: 1,
        slug: "pesto-meatballs",
        title: "Pesto meatballs in spinach sauce",
        description: "",
        duration: 15,
        image: require('.././assets/images/pesto-meatballs/1.jpg'),
        images:[
          {
            id: 1,
            src: require('.././assets/images/pesto-meatballs/1.jpg'),
          }
        ],
        serverings: 2,
        ingredients:[
          {
            id: 1,
            title: 'mince beef',
            quantity: 1,
            measurement: 'kg',
            isComplete: false
          },
          {
            id: 2,
            title: 'tagliatelle',
            quantity: 250,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 3,
            title: 'basil pesto',
            quantity: 2,
            measurement: 'table sppons',
            isComplete: false
          },
          {
            id: 4,
            title: 'spinach',
            quantity: 1,
            measurement: 'large handful',
            isComplete: false
          },
          {
            id: 5,
            title: 'creame fresh',
            quantity: 250,
            measurement: 'g',
            isComplete: false
          },
          
        ],
        steps: [
          {
            id: 1,
            action: "Add the pesto to minced meat, season with salt and pepper. Roll into small balls, about half the size of a ping pong ball",
            duration: 4,
            isComplete: false
          },
          {
            id: 2,
            action: "Place meatballs into frying pan and drizzle with olive oil and put on medium high heat, cook through",
            duration: 5,
            isComplete: false
          },
          {
            id: 3,
            action: "While meatballs are cooking add boiling water to sauce pan, add in pasta, add a swig of olive oil, boild till cooked",
            duration: 5,
            isComplete: false
          },
          {
            id: 4,
            action: "Give the meatballs a toss and in a blender (if you don't have one, just cut up finely) add spinach, creme fresh, salt, pepper and a sqweeze of lemon juice for good luck, blend till smooth.",
            duration: 5,
            isComplete: false
          },
          {
            id: 4,
            action: "Plate up and enjoy.",
            duration: null,
            isComplete: false
          },
        ],
        tags:[
          'beef', 'pasta', 'italian'
        ],
        isPublished: true,
      },
    ],
  },
  getters:{
    getRecipes(state){
      return state.recipes
    },
    getRecipe(state){
      return state.recipe
    }
  },
  actions:{
    getRecipe({commit}, slug){
     let recipe = this.state.recipes.filter((recipe => recipe.slug == slug));
     commit('setRecipe', recipe[0]);
    }
  },
  mutations: {
    setRecipe(state, recipe){
      state.recipe =  recipe
    }
  },

  modules: {},
});

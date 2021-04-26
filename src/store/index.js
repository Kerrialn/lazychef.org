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
        cost: 1.20,
        description: "",
        duration: 15,
        image: require('.././assets/images/pesto-meatballs/1.jpg'),
        images:[
          {
            id: 1,
            src: require('.././assets/images/pesto-meatballs/1.jpg'),
          }
        ],
        servings: 1,
        ingredients:[
          {
            id: 1,
            title: 'mince beef',
            quantity: 200,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 2,
            title: 'tagliatelle',
            quantity: 125,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 3,
            title: 'basil pesto',
            quantity: 2,
            measurement: ' tea spoons',
            isComplete: false
          },
          {
            id: 4,
            title: 'spinach',
            quantity: 1,
            measurement: ' handful',
            isComplete: false
          },
          {
            id: 5,
            title: 'creme fraiche',
            quantity: 100,
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
            action: "While meatballs are cooking add boiling water to sauce pan, add in pasta, add a swig of olive oil, boil till cooked",
            duration: 5,
            isComplete: false
          },
          {
            id: 4,
            action: "Give the meatballs a toss and in a blender (if you don't have one, just cut up finely) add spinach, creme fresh, salt, pepper and a squeeze of lemon juice for good luck, blend till smooth.",
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
          'beef', 'pasta', 'italian', 'comfort food', 'feel good', 'wednesday'
        ],
        isPublished: true,
      },

      {
        id: 2,
        slug: "steamed-fish",
        title: "Steamed fish & vegetable rush",
        cost: 3.00 ,
        description: "",
        duration: 20,
        image: require('.././assets/images/steamed-fish/1.jpg'),
        images:[
          {
            id: 1,
            src: require('.././assets/images/steamed-fish/1.jpg'),
          },
          {
            id: 2,
            src: require('.././assets/images/steamed-fish/2.jpg'),
          }
        ],
        servings: 1,
        ingredients:[
          {
            id: 1,
            title: 'fillet of salmon (but nearly any fish fillet will work)',
            quantity: 200,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 2,
            title: 'leak',
            quantity: 1,
            measurement: null,
            isComplete: false
          },
          {
            id: 3,
            title: 'large carrot',
            quantity: 1,
            measurement: null,
            isComplete: false
          },
          {
            id: 4,
            title: 'spinach',
            quantity: 1,
            measurement: ' large handful',
            isComplete: false
          },
          {
            id: 5,
            title: 'bay leaves',
            quantity: 5,
            measurement: ' leaves',
            isComplete: false
          },
          {
            id: 6,
            title: 'broccoli',
            quantity: 100,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 7,
            title: 'small potatoes',
            quantity: 3,
            measurement: null,
            isComplete: false
          },
          
        ],
        steps: [
          {
            id: 1,
            action: "Cut up all the vegetables, roughly about the same thickness.",
            duration: 5,
            isComplete: false
          },
          {
            id: 2,
            action: "Add boiling water to sauce pan and place all vegetables (not spinach) and fish into steamer (if you don't have one, use a metal sieve), ensure you place the hard vegetables at the bottom and layer up, adding the bay leaves here and there. place lid on top and cook through on medium high heat",
            duration: 13,
            isComplete: false
          },
          {
            id: 3,
            action: "Add spinach on top, place lid on top and let cook",
            duration: 2,
            isComplete: false
          },
          {
            id: 4,
            action: "Plate up, drizzle with olive oil and season with salt an pepper",
            duration: 2,
            isComplete: false
          },
         
        ],
        tags:[
          'fish', 'salmon', 'steamed', 'healthy', 'vegetables', 'monday'
        ],
        isPublished: true,
      },

      {
        id: 3,
        slug: "pork-stir-fry",
        title: "Pork fillet stir fry",
        cost: 1.7,
        description: "",
        duration: 15,
        image: require('.././assets/images/pork-stir-fry/4.jpg'),
        images:[
          {
            id: 1,
            src: require('.././assets/images/pork-stir-fry/1.jpg'),
          },
          {
            id: 2,
            src: require('.././assets/images/pork-stir-fry/2.jpg'),
          },
          {
            id: 3,
            src: require('.././assets/images/pork-stir-fry/3.jpg'),
          },
          {
            id: 4,
            src: require('.././assets/images/pork-stir-fry/4.jpg'),
          }
        ],
        servings: 1,
        ingredients:[
          {
            id: 1,
            title: 'pork filet',
            quantity: 100,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 2,
            title: 'broccoli',
            quantity: 100,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 3,
            title: 'pak choi',
            quantity: 1,
            measurement: '',
            isComplete: false
          },
          {
            id: 5,
            title: 'garlic',
            quantity: 3,
            measurement: ' cloves',
            isComplete: false
          },
          {
            id: 6,
            title: 'carrot',
            quantity: 1,
            measurement: null,
            isComplete: false
          },
          {
            id: 7,
            title: 'ginger',
            quantity: 50,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 8,
            title: 'dry noddles',
            quantity: 2,
            measurement: ' nests',
            isComplete: false
          },
          {
            id: 9,
            title: 'soy sauce',
            quantity: 50 ,
            measurement: 'ml',
            isComplete: false
          },
        ],
        steps: [
          {
            id: 1,
            action: "Peel carrot and ginger, then cut up all the vegetables, roughly about the same thickness. (see images for reference)",
            duration: 7,
            isComplete: false
          },
          {
            id: 2,
            action: "Add boiling water to sauce pan and drop in the noodles on low heat stir occasionally. Place wok or frying pan on high heat, add a good swig of olive oil, place in the pork and all veg (not pak choi and garlic) and half the soy sauce",
            duration: 5,
            isComplete: false
          },
          {
            id: 3,
            action: "Keep stirring the contents of the pan, crush in the garlic and add pak hoi",
            duration: 5,
            isComplete: false
          },
          {
            id: 4,
            action: "Drain noodles cut up with randomly scissors, add to the wok with the rest of the soy sauce, mix everything together and ensure is cooked through",
            duration: 3,
            isComplete: false
          },
          {
            id: 5,
            action: "Bowl up, add more soy sauce to taste and enjoy.",
            duration: null,
            isComplete: false
          },
         
        ],
        tags:[
          'pork', 'noodles', 'asian', 'healthy', 'vegetables', 'feel good', 'comfort food', 'weekend', 'saturday'
        ],
        isPublished: true,
      },

      {
        id: 4,
        slug: "rosemary-grilled-chicken-thighs-with-thyme-potatoes",
        title: "Rosemary grilled chicken thighs with thyme potatoes asparagus and avocado",
        cost: 3.5,
        description: "",
        duration: 20,
        image: require('.././assets/images/rosemary-grilled-chicken-thighs-with-thyme-potatoes/4.jpg'),
        images:[
          {
            id: 1,
            src: require('.././assets/images/rosemary-grilled-chicken-thighs-with-thyme-potatoes/1.jpg'),
          },
          {
            id: 2,
            src: require('.././assets/images/rosemary-grilled-chicken-thighs-with-thyme-potatoes/2.jpg'),
          },
          {
            id: 3,
            src: require('.././assets/images/rosemary-grilled-chicken-thighs-with-thyme-potatoes/3.jpg'),
          },
          {
            id: 4,
            src: require('.././assets/images/rosemary-grilled-chicken-thighs-with-thyme-potatoes/4.jpg'),
          }
        ],
        servings: 1,
        ingredients:[
          {
            id: 1,
            title: 'Chicken thighs',
            quantity: 3,
            measurement: null,
            isComplete: false
          },
          {
            id: 2,
            title: 'asparagus',
            quantity: 5,
            measurement: null,
            isComplete: false
          },
          {
            id: 3,
            title: 'avocado',
            quantity: 1,
            measurement: null,
            isComplete: false
          },
          {
            id: 5,
            title: 'new potatoes',
            quantity: 5,
            measurement: null,
            isComplete: false
          },
          {
            id: 6,
            title: 'fresh rosemary',
            quantity: 2,
            measurement: ' sprigs',
            isComplete: false
          },
          {
            id: 7,
            title: 'fresh thyme',
            quantity: 2,
            measurement: ' sprigs',
            isComplete: false
          }
        ],
        steps: [
          {
            id: 1,
            action: "oven on at 180/200 degrees, season room temperature chicken thighs with olive oil, salt, pepper and rosemary, wack in a oven safe container and put in the oven and leave to cook through.",
            duration: 20,
            isComplete: false
          },
          {
            id: 2,
            action: "cut potatoes into quarters and place in steamer, after 10 min add the asparagus",
            duration: 15,
            isComplete: false
          },
          {
            id: 3,
            action: "cut avocado in half and remove skin with a spoon and cut into slices",
            duration: 1,
            isComplete: false
          },
          {
            id: 3,
            action: "ensure chicken is cooked thoroughly. Plate up and drizzle olive oil and thyme over potatoes and enjoy",
            duration: null,
            isComplete: false
          },
        ],
        tags:[
          'pork'
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

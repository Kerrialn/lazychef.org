import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer:{
      recipe: null,
      startedAt: null,
      finishAt: null,
      isStarted: false,
      countdown: null,
      now: null,
      intervals:{
        countdown: undefined,
        now: undefined
      }
    },
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
            order: 1,
            action: "Add the pesto to minced meat, season with salt and pepper. Roll into small balls, about half the size of a ping pong ball",
            duration: {
              total: 4,
              start: 0,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 2,
            order: 2,
            action: "Place meatballs into frying pan and drizzle with olive oil and put on medium high heat, cook through",
            duration: {
              total: 10,
              start: 4,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 3,
            order: 3,
            action: "While meatballs are cooking add boiling water to sauce pan, add in pasta, add a swig of olive oil, boil till cooked",
            duration: {
              total: 10,
              start: 5,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 4,
            order: 4,
            action: "Give the meatballs a toss and in a blender (if you don't have one, just cut up finely) add spinach, creme fresh, salt, pepper and a squeeze of lemon juice for good luck, blend till smooth.",
            duration: {
              total: 2,
              start: 6,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 5,
            action: "Plate up and enjoy.",
            duration: {
              total: 1,
              start: 14,
            },
            isComplete: false,
            isActive: false
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
            order: 1,
            action: "Cut up all the vegetables, roughly about the same thickness.",
            duration: {
              total: 5,
              start: 0,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 2,
            order: 2,
            action: "Add boiling water to sauce pan and place all vegetables (not spinach) and fish into steamer (if you don't have one, use a metal sieve), ensure you place the hard vegetables at the bottom and layer up, adding the bay leaves here and there. place lid on top and cook through on medium high heat",
            duration: {
              total: 13,
              start: 5,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 3,
            order: 3,
            action: "Add spinach on top, place lid on top and let cook",
            duration: {
              total: 2,
              start: 18,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 4,
            order: 4,
            action: "Plate up, drizzle with olive oil and season with salt an pepper",
            duration: {
              total: 1,
              start: 19,
            },
            isComplete: false,
            isActive: false
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
        duration: 20,
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
            order: 1,
            action: "Peel carrot and ginger, then cut up all the vegetables, roughly about the same thickness. (see images for reference)",
            duration: {
              total: 7,
              start: 0
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 2,
            order: 2,
            action: "Add boiling water to sauce pan and drop in the noodles on low heat stir occasionally. Place wok or frying pan on high heat, add a good swig of olive oil, place in the pork and all veg (not pak choi and garlic) and half the soy sauce",
            duration: {
              total: 5,
              start: 7
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 3,
            order: 3,
            action: "Keep stirring the contents of the pan, crush in the garlic and add pak hoi",
            duration: {
              total: 5,
              start: 12,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 4,
            order: 4,
            action: "Drain noodles cut up with randomly scissors, add to the wok with the rest of the soy sauce, mix everything together and ensure is cooked through",
            duration: {
              total: 3,
              start: 17,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 5,
            order: 5,
            action: "Bowl up, add more soy sauce to taste and enjoy.",
            duration: {
              total: 1,
              start: 19,
            },
            isComplete: false,
            isActive: false
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
            title: 'Small chicken thighs',
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
            order: 1,
            action: "oven on at 190 degrees, season room temperature chicken thighs with olive oil, salt, pepper and rosemary, wack in a oven safe container and put in the oven and leave to cook through.",
            duration: {
              total: 20,
              start: 0,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 2,
            order: 2,
            action: "cut potatoes into quarters and place in steamer, after 10 min add the asparagus",
            duration: {
              total: 10,
              start: 10,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 3,
            order: 3,
            action: "cut avocado in half and remove skin with a spoon and cut into slices",
            duration: {
              total: 2,
              start: 18,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 4,
            order: 4,
            action: "ensure chicken is cooked thoroughly. Plate up and drizzle olive oil and thyme over potatoes and enjoy",
            duration: {
              total: 1,
              start: 19,
            },
            isComplete: false,
            isActive: false
          },
        ],
        tags:[
          'chicken', 'asparagus', 'avocado', 'thyme', 'grilled', 'thursday', 'healthy', 'cozy food'
        ],
        isPublished: true,
      },

      {
        id: 5,
        slug: "garlic-ginger-chicken-noodles",
        title: "Garlic Ginger Chicken Noodles",
        cost: 1.5,
        description: "",
        duration: 15,
        image: require('.././assets/images/chicken-noodles/1.jpg'),
        images:[
          {
            id: 1,
            src: require('.././assets/images/chicken-noodles/1.jpg'),
          },
        ],
        servings: 1,
        ingredients:[
          {
            id: 1,
            title: 'thin egg noodles',
            quantity: 2,
            measurement: ' nests',
            isComplete: false
          },
          {
            id: 2,
            title: 'chicken',
            quantity: 1,
            measurement: ' breast',
            isComplete: false
          },
          {
            id: 3,
            title: 'ginger',
            quantity: 20,
            measurement: 'g',
            isComplete: false
          },
          {
            id: 4,
            title: 'garlic',
            quantity: 1,
            measurement: ' clove',
            isComplete: false
          },
          {
            id: 5,
            title: 'fresh coriander',
            quantity: 1,
            measurement: ' good pinch',
            isComplete: false
          },
          {
            id: 6,
            title: 'fresh parsley',
            quantity: 1,
            measurement: ' good pinch',
            isComplete: false
          },
          {
            id: 7,
            title: 'spring onion',
            quantity: 1,
            measurement: ' stalk',
            isComplete: false
          }
        ],
        steps: [
          {
            id: 1,
            order: 1,
            action: "Cut up all the greens and place into container, then cut up the chicken into 2 cm slices",
            duration: {
              total: 5,
              start: 0,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 1,
            order: 1,
            action: "Place boiling water in two sauce pans, add half the ginger and the noodle nests to one. Place the steamer into the other pan and add the chicken and put the lid on, let cook on medium low heat",
            duration: {
              total: 7,
              start: 6,
            },
            isComplete: false,
            isActive: false
          },
          {
            id: 1,
            order: 1,
            action: "Pour the water from the steamed chicken pan into a bowl, add the noodles and chicken (top up with water from the noodle as need be), place the greens on top. add sliced chili if you like it spicy. Enjoy.",
            duration: {
              total: 3,
              start: 12,
            },
            isComplete: false,
            isActive: false
          },
      
        ],
        tags:[
          'chicken', 'noodles', 'healthy', 'tuesday'
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
    },
    getTimer(state){
      return state.timer
    },
    getTimerIsStarted(state){
      return state.timer.isStarted
    },
    getTimerCountdown(state){
      return state.timer.countdown
    },
    getTimerRecipe(state){
      return state.timer.recipe
    },
    getTimerStartedAt(state){
      return state.timer.startedAt
    },
    getTimerFinishAt(state){
      return state.timer.finishAt
    },
    getTimerNow(state){
      return state.timer.now
    }
  },
  actions:{
    getRecipe({commit}, slug){
     let recipe = this.state.recipes.filter((recipe => recipe.slug == slug));
     commit('setRecipe', recipe[0]);
    },
    startTimer({commit}) {
      commit('setTimerRecipe', this.state.recipe)
      commit('setTimerStartedAt', moment());
      commit('setTimerNow');
      commit('setTimerFinishAt', moment().add(this.state.timer.recipe.duration, 'm') );
      
      if (!this.state.timer.isStarted) {
        commit('setTimerIsStarted', true);
        commit('setTimerCountdown', this.state.timer.recipe.duration * this.state.timer.recipe.servings );
        commit('setTimerNow', 0);
      }
    },
    stopTimer({commit}) {

      commit('setTimerNowInterval')
      commit('setTimerCountdownInterval')

       commit('setTimer', {
          recipe: null,
          startedAt: null,
          finishAt: null,
          isStarted: false,
          countdown: null,
          now: null,
          intervals:{
            countdown: undefined,
            now: undefined
          }
       });
 
    },
  },
  mutations: {
    setRecipe(state, recipe){
      state.recipe =  recipe
    },
    setTimer(state, timer){
      state.timer =  timer
    },
    setTimerIsStarted(state, isStarted){
      state.timer.isStarted =  isStarted
    },
    setTimerCountdown(state, duration){
      state.timer.countdown = moment.duration(duration, 'm');
      state.timer.intervals.countdown = setInterval(() => {
        if(state.timer.countdown > 0){
          state.timer.countdown =  state.timer.countdown.subtract(1, "s");
        }
      }, 1000);
    },
    setTimerRecipe(state, recipe){
      state.timer.recipe =  recipe
    },
    setTimerStartedAt(state, startedAt ){
      state.timer.startedAt =  startedAt
    },
    setTimerFinishAt(state, finishedAt ){
      state.timer.finishedAt =  finishedAt
    },
    setTimerNow(state){
    state.timer.intervals.now =  setInterval(() => {
        state.timer.now = moment()
      }, 1000);
    },
    setTimerNowInterval(state){
      clearInterval(state.timer.intervals.now)
    },
    setTimerCountdownInterval(state){
      clearInterval(state.timer.intervals.countdown)
    }
  },

  modules: {},
});



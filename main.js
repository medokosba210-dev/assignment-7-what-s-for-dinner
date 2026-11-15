


let meals = [

    {
        name: "Caprese Sandwich",
        description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        category: "Italian",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900",
        rating: 4.5,
        reviews: 189,

        prepTime: "10 min",
        cookTime: "5 min",
        servings: "2 people",

        ingredients: [
            "1 ciabatta bread",
            "200g fresh mozzarella, sliced",
            "2 large tomatoes, sliced",
            "Fresh basil leaves",
            "3 tablespoons pesto",
            "2 tablespoons balsamic glaze",
            "Olive oil",
            "Salt and pepper"
        ],

        instructions: [
            "Slice the ciabatta bread horizontally.",
            "Spread pesto on both sides of the bread.",
            "Add fresh mozzarella and sliced tomatoes.",
            "Place fresh basil leaves on top.",
            "Drizzle with olive oil and balsamic glaze.",
            "Season with salt and pepper, then serve."
        ],

        nutrition: {
            "Calories": "420 kcal",
            "Protein": "18g",
            "Carbs": "45g",
            "Fat": "19g"
        },

        tips: [
            "Use fresh mozzarella for the best flavor.",
            "Choose ripe tomatoes for extra sweetness.",
            "Toast the bread lightly for a crispy texture."
        ]
    },


    {
        name: "Chicken Burger",
        description: "Juicy grilled chicken burger with fresh vegetables",
        category: "Fast Food",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
        rating: 4.8,
        reviews: 245,

        prepTime: "15 min",
        cookTime: "20 min",
        servings: "2 people",

        ingredients: [
            "2 chicken breasts",
            "2 burger buns",
            "2 slices cheddar cheese",
            "Fresh lettuce",
            "1 tomato",
            "Mayonnaise",
            "Black pepper",
            "Salt"
        ],

        instructions: [
            "Season chicken breasts with salt and pepper.",
            "Heat a pan or grill over medium heat.",
            "Cook chicken until fully cooked.",
            "Toast the burger buns lightly.",
            "Add mayonnaise, lettuce, tomato and chicken.",
            "Top with cheese and serve."
        ],

        nutrition: {
            "Calories": "520 kcal",
            "Protein": "35g",
            "Carbs": "42g",
            "Fat": "21g"
        },

        tips: [
            "Do not overcook the chicken.",
            "Use fresh vegetables for better taste.",
            "Add your favorite sauce before serving."
        ]
    },


    {
        name: "Italian Pizza",
        description: "Classic Italian pizza with mozzarella and fresh tomato sauce",
        category: "Italian",
        difficulty: "Medium",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
        rating: 4.9,
        reviews: 312,

        prepTime: "20 min",
        cookTime: "15 min",
        servings: "3 people",

        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "200g mozzarella cheese",
            "Fresh basil",
            "Olive oil",
            "Mushrooms",
            "Black olives"
        ],

        instructions: [
            "Preheat the oven to 220°C.",
            "Roll out the pizza dough.",
            "Spread tomato sauce over the dough.",
            "Add mozzarella and your favorite toppings.",
            "Bake for 12 to 15 minutes.",
            "Add fresh basil and serve."
        ],

        nutrition: {
            "Calories": "680 kcal",
            "Protein": "28g",
            "Carbs": "75g",
            "Fat": "25g"
        },

        tips: [
            "Preheat the oven before baking.",
            "Avoid adding too much sauce.",
            "Use fresh mozzarella for a better result."
        ]
    },


    {
        name: "Egyptian Koshari",
        description: "Traditional Egyptian dish with rice, lentils, pasta and crispy onions",
        category: "Egyptian",
        difficulty: "Medium",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
        rating: 4.9,
        reviews: 420,

        prepTime: "20 min",
        cookTime: "35 min",
        servings: "4 people",

        ingredients: [
            "1 cup rice",
            "1 cup brown lentils",
            "1 cup macaroni",
            "1 cup chickpeas",
            "Tomato sauce",
            "2 onions",
            "Garlic",
            "Vinegar"
        ],

        instructions: [
            "Cook the lentils until tender.",
            "Prepare the rice separately.",
            "Boil the macaroni in salted water.",
            "Prepare the tomato sauce with garlic and vinegar.",
            "Fry the onions until golden.",
            "Combine everything and serve with chickpeas."
        ],

        nutrition: {
            "Calories": "580 kcal",
            "Protein": "19g",
            "Carbs": "95g",
            "Fat": "12g"
        },

        tips: [
            "Make the tomato sauce slightly spicy.",
            "Fry onions until crispy.",
            "Serve with extra vinegar and garlic sauce."
        ]
    },


    {
        name: "Pancakes",
        description: "Fluffy homemade pancakes served with fresh fruits and honey",
        category: "Dessert",
        difficulty: "Easy",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900",
        rating: 4.7,
        reviews: 156,

        prepTime: "10 min",
        cookTime: "10 min",
        servings: "2 people",

        ingredients: [
            "1 cup flour",
            "1 egg",
            "1 cup milk",
            "2 tablespoons sugar",
            "1 teaspoon baking powder",
            "Butter",
            "Honey",
            "Fresh strawberries"
        ],

        instructions: [
            "Mix flour, sugar and baking powder.",
            "Add milk and egg.",
            "Whisk until the batter is smooth.",
            "Heat a pan with a little butter.",
            "Pour batter into the pan.",
            "Flip when bubbles appear and cook the other side.",
            "Serve with honey and strawberries."
        ],

        nutrition: {
            "Calories": "350 kcal",
            "Protein": "10g",
            "Carbs": "55g",
            "Fat": "11g"
        },

        tips: [
            "Do not overmix the pancake batter.",
            "Cook over medium heat.",
            "Add fresh fruits before serving."
        ]
    }

];




let mealImage = document.getElementById("mealImage");
let mealName = document.getElementById("mealName");
let mealDescription = document.getElementById("mealDescription");

let mealRating = document.getElementById("mealRating");
let mealReviews = document.getElementById("mealReviews");

let mealDifficulty = document.getElementById("mealDifficulty");
let mealCuisine = document.getElementById("mealCuisine");

let prepTime = document.getElementById("prepTime");
let cookTime = document.getElementById("cookTime");
let servings = document.getElementById("servings");

let ingredientsList = document.getElementById("ingredientsList");
let instructionsList = document.getElementById("instructionsList");
let nutritionList = document.getElementById("nutritionList");
let tipsList = document.getElementById("tipsList");

let randomBtn = document.getElementById("randomBtn");

let saveBtn = document.getElementById("saveBtn");
let shareBtn = document.getElementById("shareBtn");



function displayMeal(meal) {

    mealImage.src = meal.image;
    mealImage.alt = meal.name;

    mealName.innerHTML = meal.name;
    mealDescription.innerHTML = meal.description;

    mealRating.innerHTML = meal.rating;
    mealReviews.innerHTML = `(${meal.reviews} reviews)`;

    mealDifficulty.innerHTML = meal.difficulty;
    mealCuisine.innerHTML = meal.category;

    prepTime.innerHTML = meal.prepTime;
    cookTime.innerHTML = meal.cookTime;
    servings.innerHTML = meal.servings;


    // Display Ingredients

    ingredientsList.innerHTML = "";

    for (let i = 0; i < meal.ingredients.length; i++) {

        ingredientsList.innerHTML += `
            <li>
                <span>${i + 1}</span>
                ${meal.ingredients[i]}
            </li>
        `;

    }


  

    instructionsList.innerHTML = "";

    for (let i = 0; i < meal.instructions.length; i++) {

        instructionsList.innerHTML += `
            <li>${meal.instructions[i]}</li>
        `;

    }


    

    nutritionList.innerHTML = "";

    for (let item in meal.nutrition) {

        nutritionList.innerHTML += `
            <div class="nutrition-item">
                <span>${item}</span>
                <strong>${meal.nutrition[item]}</strong>
            </div>
        `;

    }


   

    tipsList.innerHTML = "";

    for (let i = 0; i < meal.tips.length; i++) {

        tipsList.innerHTML += `
            <div class="tip-item">
                <i class="fa-solid fa-lightbulb"></i>
                ${meal.tips[i]}
            </div>
        `;

    }

}




let currentMealIndex = -1;

function getRandomMeal() {

    let randomIndex;

    do {

        randomIndex = Math.floor(Math.random() * meals.length);

    } while (randomIndex === currentMealIndex);

    currentMealIndex = randomIndex;

    let selectedMeal = meals[randomIndex];

    displayMeal(selectedMeal);

    

    showTab("ingredients");



    saveBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';

}




let tabs = document.querySelectorAll(".tab");

let panels = document.querySelectorAll(".tab-panel");

function showTab(tabName) {

    tabs.forEach(function(tab) {

        tab.classList.remove("active");

        if (tab.dataset.tab === tabName) {

            tab.classList.add("active");

        }

    });


    panels.forEach(function(panel) {

        panel.classList.remove("active");

        if (panel.id === tabName) {

            panel.classList.add("active");

        }

    });

}


tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        let selectedTab = tab.dataset.tab;

        showTab(selectedTab);

    });

});



randomBtn.addEventListener("click", getRandomMeal);



getRandomMeal();

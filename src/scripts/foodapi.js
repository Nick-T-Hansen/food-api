fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods);
    });

// // Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.
// // Create a DOM element in your index.html with a class of foodList.
// // Create a function which returns a string template. The template is the HTML representation for a food item.


//create HTML elements for the DOM. Just a function definition. Needs to be called to work. returns the html elements to the foodAsHTML variable in the fetch request
let foodFunction = (name, type, ethnicity, ingredients, country, sugar, fat, calories) => {

    let foodSection = document.createElement("section");
    foodSection.classList.add("section");

    let foodName = document.createElement("h2");
    foodSection.appendChild(foodName);
    foodName.innerHTML = name;

    let foodType = document.createElement("p");
    foodName.appendChild(foodType);
    foodType.innerHTML = type;

    let foodEthnicity = document.createElement("p");
    foodName.appendChild(foodEthnicity);
    foodEthnicity.innerHTML = ethnicity;

    let foodIngredients = document.createElement("p");
    foodName.appendChild(foodIngredients);
    foodIngredients.innerHTML = ingredients;

    let foodCountry = document.createElement("p");
    foodName.appendChild(foodCountry);
    foodCountry.innerHTML = country;

    let foodSugar = document.createElement("p");
    foodName.appendChild(foodSugar);
    foodSugar.innerHTML = sugar;

    let foodFat = document.createElement("p");
    foodName.appendChild(foodFat);
    foodFat.innerHTML = fat;

    let foodCalories = document.createElement("p");
    foodName.appendChild(foodCalories);
    foodCalories.innerHTML = calories;

return foodSection;
};


// adds addition information to the returns data from the json server
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => { 
            
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}`)
                .then(response => response.json())
                .then(productInfo => {

                 //food.ingredients is creating a new key value pair for the object "food"
                food.ingredients = productInfo.product.ingredients_text;
                food.country = productInfo.product.countries;
                food.sugar = productInfo.product.nutriments.sugars_serving;
                food.fat = productInfo.product.nutriments.fat_serving;
                food.calories = productInfo.product.nutriments.energy_serving;
                console.log(food);

                const foodAsHtml = foodFunction(food.name, food.type, food.ethnicity, food.ingredients, food.country, food.sugar, food.fat, food.calories);  
                appendToDom(foodAsHtml);
                    });               
                });
            });

//takes the data from the JSON server and appends the elements created for the DOM with the information
    let appendToDom = (foodAsHtml) => {
        let container = document.querySelector("#foodList");
        container.appendChild(foodAsHtml);
    };
    
    // // You will need to use the `forEach` array method to iterate your foods. Inside that `forEach`, you will need to perform another `fetch` to get the additional information. The barcode value must be interpolated inside the URL for the inner fetch.

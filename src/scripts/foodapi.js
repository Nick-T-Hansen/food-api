fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods);
    });

// // Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.
// // Create a DOM element in your index.html with a class of foodList.
// // Create a function which returns a string template. The template is the HTML representation for a food item.

let foodFunction = (name, type, ethnicity) => {
    let container = document.querySelector("#foodList");
    let foodSection = document.createElement("section");
    let foodName = document.createElement("h2");
    let foodType = document.createElement("p");
    let foodEthnicity = document.createElement("p");

    container.appendChild(foodSection);
    foodSection.classList.add("section");

    foodSection.appendChild(foodName);
    foodName.innerHTML = name;

    foodName.appendChild(foodType);
    foodType.innerHTML = type;

    foodName.appendChild(foodEthnicity);
    foodEthnicity.innerHTML = ethnicity;

    console.log(foodFunction);
};

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(function(parsedFood) { 
            foodFunction(parsedFood.name, parsedFood.type, parsedFood.ethnicity);
            (console.table(parsedFood)
            )}
        );
    })

    fetch("https://world.openfoodfacts.org/api/v0/product/0011150479547.json")
    .then(response => response.json())
    .then(productInfo => {
        // Use it here
    })

    // You will need to use the `forEach` array method to iterate your foods. Inside that `forEach`, you will need to perform another `fetch` to get the additional information. The barcode value must be interpolated inside the URL for the inner fetch.

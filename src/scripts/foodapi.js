fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
    })

//     // Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.
// // Create a DOM element in your index.html with a class of foodList.

// // Create a function which returns a string template. The template is the HTML representation for a food item.
let foodfunction = (name, type, ethnicity) => {
    let container = document.querySelector("#foodList");
    let foods = document.createElement("section");
    let foodName = document.createElement("h2");
    let foodType = documenent.createElement("p");
    let foodEthnicity = document.createElement("p");

    
}

// // // Function that creates DOM elements | MASTER FUNCTION
//                 // function appendAndCreateElements(name, type, ethnic){
//                 //     // Declarations:
//                 //     let container = document.querySelector('#foodListId');
//                 //     let foodSections = document.createElement("section");
//                 //     let foodName = document.createElement("h1");
//                 //     let foodType = document.createElement("p");
//                 //     let foodEthnicity = document.createElement("p");

// //     // Appending elements and then adding the text (ORDER MATTERS)
//                 //     container.appendChild(foodSections);

//                 //     foodSections.appendChild(foodName); 
//                 //     foodName.innerHTML = name;  
//                 //     foodName.classList.add("sections");

//                 //     foodName.appendChild(foodType);
//                 //     foodType.innerHTML = type;

//                 //     foodName.appendChild(foodEthnicity);
//                 //     foodEthnicity.innerHTML = ethnic;
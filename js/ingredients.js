


var ingredientsArray;

ingredientsArray = JSON.parse(localStorage.getItem("ownedItems")) || [];

function saveIngredients() {
    localStorage.setItem("ownedItems", JSON.stringify(ingredientsArray));
}
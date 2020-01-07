var APIKeys = ["97ed52ef559840adbd93fed9102d1c8e", "909ff812fb1445139e4775853f4d6a4a", "362fac0282c242aabd0952d77fc3a515"]
var targetRecipesBasic = $("#Target_Recipes")
var targetBtn = $("#target_button")


function getRecipe() {

    var APIKey = APIKeys[Math.floor(Math.random() * 3)]

    console.log(APIKey)

    var ingredients = "apples,+flour,+sugar"

    var queryURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=6&apiKey=${APIKey}`

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        response.forEach(function(recipe) {
            var newRecipe = $("<div>")
            newRecipe.addClass("col s4 card grey lighten-2")
            newRecipe.attr("id", "recipe_card")
            newRecipe.attr("data-recipe", recipe.id)
            var newImage = $(`<div class="card-image"><img class="recipeImage" src="${recipe.image}"></div>`)
            newRecipe.append(newImage)
            var newContent = $(`
            <div class="card-content">
            <h5 class="recipeName">${recipe.title}</h5>
            <hr>
            <p class="infoType">You have ${recipe.usedIngredientCount} ingredient(s) and you need ${recipe.missedIngredientCount} more ingredient(s)</p>
            </div>
            `)
            newRecipe.append(newContent)
            targetRecipesBasic.append(newRecipe)

        });

    })
}

function seeRecipe() {

    var APIKey = APIKeys[Math.floor(Math.random() * 3)]

    console.log(APIKey)

    console.log($(this).attr("data-recipe"))

    var id = $(this).attr("data-recipe")

    var queryURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKey}`

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        
    })
}

targetBtn.on("click", getRecipe)

targetRecipesBasic.on("click", "#recipe_card", seeRecipe)


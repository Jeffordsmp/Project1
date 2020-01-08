var APIKeys = ["97ed52ef559840adbd93fed9102d1c8e", "909ff812fb1445139e4775853f4d6a4a", "362fac0282c242aabd0952d77fc3a515"]
var targetRecipesBasic = $("#Target_Recipes")

var savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || []

function getRecipe() {

    var APIKey = APIKeys[Math.floor(Math.random() * 3)]

    console.log(APIKey)

    var recipes = savedRecipes.join(",", Array)

    console.log(recipes)

    var queryURL = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipes}&apiKey=${APIKey}`

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
            <button class="remove_button" id=${recipe.id}>Remove</button>
            `)
            newRecipe.append(newContent)
            targetRecipesBasic.append(newRecipe)
        });

    })
}

$("#Target_Recipes").on("click", ".remove_button", function() {

    console.log($(this).attr("id"))
    if (savedRecipes.includes($(this).attr("id"))) {
        savedRecipes.splice(savedRecipes.indexOf($(this).attr("id")),1)
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes))
        $("#Target_Recipes").empty()
        getRecipe();
    } else {
        return;
    }

})

getRecipe();
var APIKeys = ["97ed52ef559840adbd93fed9102d1c8e", "909ff812fb1445139e4775853f4d6a4a", "362fac0282c242aabd0952d77fc3a515"]
var targetRecipesBasic = $("#Target_Recipes")
var targetBtn = $("#target_button")
var popUp = $("#pop_up")
var closeBtn = $("#close_button")
var usedIng = JSON.parse(localStorage.getItem("ingredients"))

var savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || []


function getRecipe() {

    var APIKey = APIKeys[Math.floor(Math.random() * 3)]

    console.log(APIKey)

    var ingString = usedIng.join(",+", Array)

    var ingredients = ingString.split(" ").join("+");

    console.log(ingredients)

    var queryURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=6&sort=random&apiKey=${APIKey}`

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
        $("#recipeImage").attr("src", response.image)
        $("#recipe_name").html(response.title)
        $("#recipe_text").html(`<p>Cook Time: ${response.readyInMinutes}</p><p>Servings: ${response.servings}</p><p>Rating: ${response.spoonacularScore}/100</p>`)

        var newIng = $("<ul>")
        response.extendedIngredients.forEach(function(y) {
            newIng.append($(`<li>${y.originalString}</li>`))
        })

        $("#ingredients_target").html(newIng)

        var newSteps = $("<div>")
        response.analyzedInstructions[0].steps.forEach(function(x) {
            newSteps.append($(`<p>Step ${x.number}: ${x.step}</p>`))
        })

        $("#recipe_target").html(newSteps)

        $("#link_target").attr("href", response.sourceUrl)

        $(".save_button").attr("id", response.id)
    


        popUp.attr("class", "card")

        
    })
}

closeBtn.on("click", function() {
    popUp.attr("class", "card hidden")
})

targetRecipesBasic.on("click", "#recipe_card", seeRecipe)

$(".save_button").on("click", function() {
    console.log($(this).attr("id"))
    if (savedRecipes.includes($(this).attr("id"))) {
        return;
    } else {
        savedRecipes.push($(this).attr("id"))
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes))
    }
})

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


getRecipe();
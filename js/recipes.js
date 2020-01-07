var APIKeys = ["97ed52ef559840adbd93fed9102d1c8e", "909ff812fb1445139e4775853f4d6a4a", "362fac0282c242aabd0952d77fc3a515"]
var targetRecipesBasic = $("#Target_Recipes")


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
            

        });

    //     <div class="col s4">
    //       <div class="card grey lighten-2" src="https://espn.com">
    //       <div class="card-image">
    //         <img class="recipeImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcookinglsl.com%2Fwp-content%2Fuploads%2F2018%2F01%2Flentil-potato-soup-recipe-fg-1-310x310.jpg&f=1&nofb=1">
    //       </div>
    //       <div class="card-content">
    //         <h5 class="recipeName">Recipe Name</h5>
    //         <hr>
    //         <P class="infoType">Time to Cook:</P>
    //         <p class="infoType">Servings:</p>
    //         <p class="infoType">Price:</p>
    //       </div>
    //     </div>
    //   </div>

    })
}

function seeRecipe(x) {

    var APIKey = APIKeys[Math.floor(Math.random() * 3)]

    console.log(APIKey)

    var id = x

    var queryURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKey}`

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        
    })
}


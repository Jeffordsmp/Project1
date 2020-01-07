var APIKeys = ["97ed52ef559840adbd93fed9102d1c8e", "909ff812fb1445139e4775853f4d6a4a", "362fac0282c242aabd0952d77fc3a515"]

function getRecipe() {

    var APIKey = APIKeys[Math.floor(Math.random() * 3)]

    console.log(APIKey)

    var ingredients = "apples,+flour,+sugar"

    var queryURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=1&apiKey=${APIKey}`

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        seeRecipe(response.id)
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
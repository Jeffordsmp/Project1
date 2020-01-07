console.log("read the js file");
APIKeys = ["97ed52ef559840adbd93fed9102d1c8e", "909ff812fb1445139e4775853f4d6a4a", "362fac0282c242aabd0952d77fc3a515"]

function getRecipe() {

    APIKey = APIKeys[Math.floor(Math.random() * 3)]

    console.log(APIKey)

    ingredients = "apples,+flour,+sugar"

    var queryURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=2&apiKey=${APIKey}`

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
    })
}

$.ajax({
    url: "https://spoonacular.com/application/frontend/downloads/top-1k-ingredients.csv",
    method: "GET",
}).then(function (response) {
    console.log(response)
})

function renderIngredients() {
    if (location.href.includes("ingredients.html")) {
        var ingArray = "Baking;Health Foods;Spices and Seasonings;Pasta and Rice;Bakery/Bread;Refrigerated;Canned and Jarred;Frozen;Nut butters, Jams, and Honey;Oil, Vinegar, Salad Dressing;Condiments;Savory Snacks;Milk, Eggs, Other Dairy;Ethnic Foods;Tea and Coffee;Meat;Gourmet;Sweet Snacks;Gluten Free;Alcoholic Beverages;Cereal;Nuts;Beverages;Produce;Not in Grocery Store/Homemade;Seafood;Cheese;Dried Fruits;Online;Grilling Supplies;Bread".split(";");

        var ingObj = []
        var list = $('<ul class="collapsible popout">');
        var listItem
        ingArray.forEach(function (element) {
            console.log(element);
            ingObj.push({
                name: element,
                items: [""]
            })
            listItem = $('<li>  <div class="collapsible-header"><i class="material-icons">info</i>' + element + '</div>  <div class="collapsible-body"><span>      <label>        <input type="checkbox" />        <span>Yellow</span>      </label><br>      <label>        <input type="checkbox" />        <span>Yellow</span>      </label><br>      <label>        <input type="checkbox" />        <span>Yellow</span>      </label><br>      <label>        <input type="checkbox" />        <span>Yellow</span>      </label><br>    </span>  </div></li>')
            $(".collapsible").append(listItem)
            console.log(element);
        });

        console.log(ingObj[2]);
    }
}






renderIngredients()



// AlcBev: ["wine", "beer", "sake"],
//     Bakery: ["bread"],
//         canFood: ["canned tuna", "canned beans"],
//             CoffeeAndChoc: ["instant coffee", "instant hot cocoa"],
//                 DietFoods: ["diet Coke"],
//                     Dairy: ["milk"],
//                         FishnSea: ["Tilapia filet", "salmon filet"],
//                             Frozen: ["Microwave meal"],
//                                 nonMeat: ["eggs", ""],
//                                     oils: ["Olive Oil"],
//                                         Produce: ["Tomato", "Avocado"],
//                                             spicenSauces: ["bbq Sauce", "Sea Salt", "Pepper"]}


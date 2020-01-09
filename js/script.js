
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


function renderIngredients() {

    var ingArray;
    var ingObj = []


    $.ajax({
        url: "https://monguis.github.io/weather-checker/database.txt",
        method: "GET",
    }).then(function (response) {
        ingArray = response.split("\n")
        console.log(ingArray)
        var aisleArray = "Baking;Health Foods;Spices and Seasonings;Pasta and Rice;Bakery/Bread;Refrigerated;Canned and Jarred;Frozen;Nut butters, Jams, and Honey;Oil, Vinegar, Salad Dressing;Condiments;Savory Snacks;Milk, Eggs, Other Dairy;Ethnic Foods;Tea and Coffee;Meat;Gourmet;Sweet Snacks;Gluten Free;Alcoholic Beverages;Cereal;Nuts;Beverages;Produce;Not in Grocery Store/Homemade;Seafood;Cheese;Dried Fruits;Online;Grilling Supplies;Bread".split(";");

        var storedIng = JSON.parse(localStorage.getItem("ingredients"));
        var saveIngArray = [];
        if (!storedIng) {
            localStorage.setItem("ingredients", JSON.stringify(saveIngArray));
        } else {
            saveIngArray = storedIng;
        }
        var listItem;
        var count = 0;
        aisleArray.forEach(function (recipe, index) {

            ingObj.push({
                name: recipe,
                items: []
            });
            var auxText = "";
            for (var i = 0; i < 30; i++) {
                var checked = "";

                auxArr = ingArray[i + count].split(";");
                if (saveIngArray.includes(auxArr[0])) {
                    checked = "checked";
                }
                auxText += '<label> <input type="checkbox" ' + checked + '/><span  class = "ingSpanspan" id = ' + index + ";" + (i) + '>' + auxArr[0] + '</span> </label><br>';
                ingIndex.push(auxArr[0]);
                ingObj[index].items.push({ name: auxArr[0], id: auxArr[1], check: false })

                if (i === 29) {
                    listItem = $('<li>  <div class="collapsible-header"><i class="material-icons">info</i>' + recipe + '</div>  <div class="collapsible-body"><span>' + auxText + ' </span>  </div></li>')
                    $(".collapsible").append(listItem)
                    auxText = "";
                    count += 30;
                    return;
                }

            }
        });
    });
}


if (location.href.includes("ingredients.html")) {
    renderIngredients()
    
    
    
    var feederArr = []
        var ingIndex = [];
        var feederObjArr = [];
        
    
    
    
    
    $.ajax({
        url: "https://monguis.github.io/weather-checker/database.txt",
        method: "GET",
    }).then(function (response) {
        feederArr = response.split("\n");
        feederArr.forEach(function (element) {
            var auxArr = element.split(";");
            feederObjArr.push({ name: auxArr[0], id: auxArr[1], checked: false });
            // ingIndex.push(auxArr[0]);
        });
        var ingQuery = "";
        var count =0;


        
        

        console.log(ingQuery)

    });




    var aisleArray = "Baking;Health Foods;Spices and Seasonings;Pasta and Rice;Bakery/Bread;Refrigerated;Canned and Jarred;Frozen;Nut butters, Jams, and Honey;Oil, Vinegar, Salad Dressing;Condiments;Savory Snacks;Milk, Eggs, Other Dairy;Ethnic Foods;Tea and Coffee;Meat;Gourmet;Sweet Snacks;Gluten Free;Alcoholic Beverages;Cereal;Nuts;Beverages;Produce;Not in Grocery Store/Homemade;Seafood;Cheese;Dried Fruits;Online;Grilling Supplies;Bread".split(";");
    var aisleObjArray = []


    var savedAisles = JSON.parse(localStorage.getItem("aisle"));
    if (!savedAisles || savedAisles.length == 0) {
        for (var i = 0; i < aisleArray.length; i++) {
            aisleObjArray.push({ type: aisleArray[i], items: [] });
        }
        localStorage.setItem("aisle", JSON.stringify(aisleObjArray));
    } else {
        aisleObjArray = savedAisles;
    }



    var respArray = JSON.parse(localStorage.getItem("response"));
    console.log(respArray)

    respArray.forEach(function (recipe) {

        loadIngredients(recipe.missedIngredients);
        loadIngredients(recipe.usedIngredients);
        loadIngredients(recipe.unusedIngredients);

        // 

        // recipe.missedIngredients[i].name
        // console.log(aux + "   " + aisleIndex)
    }

    );

    localStorage.setItem("aisle", JSON.stringify(aisleObjArray));


    function loadIngredients(parAux) {
        for (var i = 0; i < parAux.length; i++) {
            var aux = parAux[i].aisle
            var auxIng = parAux[i].name;
            auxArr = aux.split(";");
            auxArr.forEach(function (aisle) {
                if (!aisleObjArray[aisleArray.indexOf(aisle)].items.includes(auxIng)) {
                    aisleObjArray[aisleArray.indexOf(aisle)].items.push(auxIng);
                }
            });
        }
    } 
    function loadIngredientsPlus(parAux) {
        for (var i = 0; i < parAux.length; i++) {
            var aux = parAux[i].aisle
            var auxIng = parAux[i].name;
            auxArr = aux.split(";");
            auxArr.forEach(function (aisle) {
                if (!aisleObjArray[aisleArray.indexOf(aisle)].items.includes(auxIng)) {
                    aisleObjArray[aisleArray.indexOf(aisle)].items.push(auxIng);
                }
            });
        }
    }
}
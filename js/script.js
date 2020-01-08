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

function renderIngredients() {
    if (location.href.includes("ingredients.html")) {
        var ingArray;
        var ingObj = []
        $.ajax({
            url: "https://spoonacular.com/application/frontend/downloads/top-1k-ingredients.csv",
            method: "GET",
        }).then(function (response) {
            ingArray = response.split("\n")
            console.log(ingArray)
            var aisleArray = "Baking;Health Foods;Spices and Seasonings;Pasta and Rice;Bakery/Bread;Refrigerated;Canned and Jarred;Frozen;Nut butters, Jams, and Honey;Oil, Vinegar, Salad Dressing;Condiments;Savory Snacks;Milk, Eggs, Other Dairy;Ethnic Foods;Tea and Coffee;Meat;Gourmet;Sweet Snacks;Gluten Free;Alcoholic Beverages;Cereal;Nuts;Beverages;Produce;Not in Grocery Store/Homemade;Seafood;Cheese;Dried Fruits;Online;Grilling Supplies;Bread".split(";");


            var listItem;
            var count = 0;
            aisleArray.forEach(function (element, index) {
                ingObj.push({
                    name: element,
                    items: []
                });
                var auxText = "";
                for (var i = 0; i < 30; i++) {
                    auxArr = ingArray[i + count].split(";");
                    auxText += '<label class = "ingSpanlaber"> <input type="checkbox" class = "ingSpancheck"  /><span  class = "ingSpanspan" id = ' + index + ";" + (i) + '>' + auxArr[0] + '</span> </label><br>';
                    ingObj[index].items.push({ name: auxArr[0], id: auxArr[1], check: false })

                    if (i === 29) {
                        listItem = $('<li>  <div class="collapsible-header"><i class="material-icons">info</i>' + element + '</div>  <div class="collapsible-body"><span>' + auxText + ' </span>  </div></li>')
                        $(".collapsible").append(listItem)
                        auxText = "";
                        count += 30;
                        console.log(index + ingObj[index].items)
                        return;
                    }

                }









                // ingObj.push({
                //     name: element,
                //     items: []
                // })
                // var auxText = ' <label> <input type="checkbox" /><span>' + ingArray[i + 0] + '</span> </label><br>' + ' <label> <input type="checkbox" /><span>' + ingArray[i + 1] + '</span> </label><br>' + ' <label> <input type="checkbox" /><span>' + ingArray[i + 2] + '</span> </label><br>'

                // listItem = $('<li>  <div class="collapsible-header"><i class="material-icons">info</i>' + element + '</div>  <div class="collapsible-body"><span>' + auxText + ' </span>  </div></li>')
                // $(".collapsible").append(listItem)
                // i += 30;
                // '<label> <input type="checkbox" /><span>' + ingArray[i] + '</span> </label><br>'
            });
            console.log(ingObj[3])
        });

        // var index = "a";
        // var alp = "abcdefghijklmnopqrstuvwxyz".split();
        // var count =0;
        // for(var i = 0 ;i<ingArray.length; i++){
        //     if(ingArray[i].charAt[0]!==alp[count]){
        //         $(".collapsible").append(listItem);
        //         count++;
        //     }
        // '<label> <input type="checkbox" /><span>' + ingArray[i] + '</span> </label><br>'
        // }



        // var auxText= "";


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



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


    $.ajax({
        url: "https://monguis.github.io/weather-checker/sorted.json",
        method: "GET",
    }).then(function (response) {
        console.log(response);
        // var aisleArray = "Baking;Health Foods;Spices and Seasonings;Pasta and Rice;Bakery/Bread;Refrigerated;Canned and Jarred;Frozen;Nut butters, Jams, and Honey;Oil, Vinegar, Salad Dressing;Condiments;Savory Snacks;Milk, Eggs, Other Dairy;Ethnic Foods;Tea and Coffee;Meat;Gourmet;Sweet Snacks;Gluten Free;Alcoholic Beverages;Cereal;Nuts;Beverages;Produce;Not in Grocery Store/Homemade;Seafood;Cheese;Dried Fruits;Online;Grilling Supplies;Bread".split(";");

        var storedIng = JSON.parse(localStorage.getItem("ingredients"));
        var saveIngArray = [];
        if (!storedIng) {
            localStorage.setItem("ingredients", JSON.stringify(saveIngArray));
        } else {
            saveIngArray = storedIng;
        }



        var listItem;

        var auxText = "";

        response.forEach(function (aisle,aisleIndex) {
            auxText = ""
            console.log(aisle+aisleIndex)
            aisle.items.forEach(function (item,index){
                var checked = "";

                if (saveIngArray.includes(item)) {
                    checked = "checked";
                }
                console.log(item)
                auxText += '<label> <input type="checkbox" ' + checked + '/><span  class = "ingSpanspan" id = ' + (aisleIndex) + ";" + (index) + '>' + item + '</span> </label><br>';
                // ingObj[index].items.push({ name:item.name , id: item.id});

            });
            listItem = $('<li>  <div class="collapsible-header"><i class="material-icons">info</i>'+aisle.type +'</div>  <div class="collapsible-body"><span>' + auxText + ' </span>  </div></li>')
            $(".collapsible").append(listItem)
            auxText = "";
            return;
        });
        
    });
}

if (location.href.includes("ingredients.html")) {
    renderIngredients()

















//     var ingIndex = [];
//     var feederObjArr = JSON.parse(localStorage.getItem("checkedIngs")) || [];
//     console.log(JSON.parse(localStorage.getItem("aisle")))
// console.log(feederObjArr)
// var i=0;
// var ingredients = "";
// var ingredientsArr = [];
//     while(i <50){
//         rdm = Math.floor(Math.random()*1000);
//         if(!feederObjArr[rdm].checked&&!ingredientsArr.includes(feederObjArr[rdm].name)){
//              ingredientsArr.push(feederObjArr[rdm].name.split(" ").join("+"));
//             console.log(ingredientsArr)
//              i++;
//         }

//     }

// APIKey = APIKeys[Math.floor(Math.random() * 3)]

//     console.log(APIKey)

//     $.ajax({
//         url:`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsArr.join(",+")}&number=100&sort=random&apiKey=${APIKey}`,
//         method: "GET",
//     }).then(function (response) {
// console.log(response)
//         var aisleArray = "Baking;Health Foods;Spices and Seasonings;Pasta and Rice;Bakery/Bread;Refrigerated;Canned and Jarred;Frozen;Nut butters, Jams, and Honey;Oil, Vinegar, Salad Dressing;Condiments;Savory Snacks;Milk, Eggs, Other Dairy;Ethnic Foods;Tea and Coffee;Meat;Gourmet;Sweet Snacks;Gluten Free;Alcoholic Beverages;Cereal;Nuts;Beverages;Produce;Not in Grocery Store/Homemade;Seafood;Cheese;Dried Fruits;Online;Grilling Supplies;Bread".split(";");
//         var aisleObjArray = JSON.parse(localStorage.getItem("aisle")) || [];

//         var savedAisles = JSON.parse(localStorage.getItem("aisle"));
//         if (!savedAisles || savedAisles.length == 0) {
//             for (var i = 0; i < aisleArray.length; i++) {
//                 aisleObjArray.push({ type: aisleArray[i], items: [] });
//             }
//             localStorage.setItem("aisle", JSON.stringify(aisleObjArray));
//         } else {
//             aisleObjArray = savedAisles;
//         }





//         {
//             var respArray = response;
//             console.log(respArray)

//             respArray.forEach(function (recipe) {

//                 loadIngredients(recipe.missedIngredients);
//                 loadIngredients(recipe.usedIngredients);
//                 loadIngredients(recipe.unusedIngredients);

//             }

//             );

//             console.log(feederObjArr);
//             localStorage.setItem("checkedIngs",JSON.stringify(feederObjArr));
//             localStorage.setItem("aisle", JSON.stringify(aisleObjArray));
//             console.log(aisleObjArray);
//         }

//         function loadIngredients(parAux) {

//             for (var i = 0; i < parAux.length; i++) {
//                 var aux = parAux[i].aisle
//                 var auxIng = parAux[i].name;
//                 console.log("function for")
//                 if (ingIndex.indexOf(auxIng) != -1 && !feederObjArr[ingIndex.indexOf(auxIng)].checked) {
//                     console.log("entro");
//                     auxArr = aux.split(";");
//                     auxArr.forEach(function (aisle) {
//                         if (!aisleObjArray[aisleArray.indexOf(aisle)].items.includes(auxIng)) {
//                             aisleObjArray[aisleArray.indexOf(aisle)].items.push(auxIng);
//                             console.log("fed "+ auxIng);
//                         }
//                     });
//                     feederObjArr[ingIndex.indexOf(auxIng)].checked = true;
//                 }
//             }

//         }

//     });

}
console.log("read the js file");
APIKeys = ["97ed52ef559840adbd93fed9102d1c8e", "909ff812fb1445139e4775853f4d6a4a", "362fac0282c242aabd0952d77fc3a515"]

console.log("before the ajax");

$.ajax({
    url: "https://spoonacular.com/application/frontend/downloads/top-1k-ingredients.csv",
    method: "GET",
}).then(function (response) {
    console.log(response)
})


function renderIngredients(){

    var ingObj =   {AlcBev:["wine","beer","sake"],
                    Bakery:["bread"],
                    canFood:["canned tuna","canned beans"],
                    CoffeeAndChoc:["instant coffee","instant hot cocoa"],
                    DietFoods:["diet Coke"],
                    Dairy:["milk"],
                    FishnSea:["Tilapia filet","salmon filet"],
                    Frozen:["Microwave meal"],
                    nonMeat:["eggs",""],
                    oils:["Olive Oil"],
                    Produce:["Tomato","Avocado"],
                    spicenSauces:["bbq Sauce","Sea Salt","Pepper"]};

}

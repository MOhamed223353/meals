  import {Category} from "./category.js";
  import {Area} from "./area.js";
  import {Ingredient} from "./ingredient.js";
  import {Search} from "./search.js";
  import {Contact} from "./contact.js";
  
  
  $("#icon").click(function () {
  if ($(".navigation").css("left") == "0px") {
    $(".navigation").animate({ left: "-16%" }, 500);
    $(".whitelayer").animate({ left: "0" }, 500);
    $("#iconss").removeClass("fa-times");
    $(".list").slideUp(1200);
  } else {
    $(".navigation").animate({ left: "0" }, 500);
    $(".whitelayer").animate({ left: "16%" }, 500);
    $("#iconss").addClass("fa-times");
    $(".list ").slideDown(1200);
  }
});

$(".loading").ready(function () {
  $(".loading").fadeOut(500, function () {
    $("body").css("overflow", "visible");
  });
});
class Homepage {
  constructor() {
    this.apiData = this.fetchApi("");
    this.displayData();
    document.getElementById("row").addEventListener("click", function (e) {
      $(".firstpage, .searcpage").css("display", "none");
      $(".loading").fadeIn(500,()=>{
        $(".loading").ready(function () {
          $(".loading").fadeOut(200, function () {
            $("body").css("overflow", "visible");
            $(".secondpage").css('display','block')
          });
        });
      })
    });
  }

  async fetchApi(meal) {
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    let response = await fetch(api);
    response = await response.json();
    let apiData = response.meals;

    return apiData;
  }

  async displayData() {
    let apiData = await this.apiData;

    let cols = "";
    let cols1 = "";
    let cols2 = "";
    let cols3 = "";
    let cols4 = "";
    let cols5 = "";
    let cols6 = "";
    let cols7 = "";
    for (let i = 0; i < apiData.length; i++) {
      cols += `<div class="col-md-3">
<div class="meals">
  <img class="w-100 " src=${apiData[i].strMealThumb} alt="">
  <div class="layer  d-flex align-items-center"><h3 class="ps-2">${apiData[i].strMeal}</h3></div>

</div>
</div>`;
    }
    document.getElementById("row").innerHTML = cols;
    let data = document.querySelectorAll(".meals");
    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("click", function (e) {
        cols7 = `<img class="w-100" src="${apiData[i].strMealThumb}" alt="" />
    <h2 class="text-center text-white">${apiData[i].strMeal}</h2>`;
        cols1 = `<p>${apiData[i].strInstructions}</p>`;
        cols2 = `Area : ${apiData[i].strArea}`;
        cols3 = `Category : ${apiData[i].strCategory}`;
        let ingredients = [
          apiData[i].strIngredient1,
          apiData[i].strIngredient2,
          apiData[i].strIngredient3,
          apiData[i].strIngredient4,
          apiData[i].strIngredient5,
          apiData[i].strIngredient6,
          apiData[i].strIngredient7,
          apiData[i].strIngredient8,
          apiData[i].strIngredient9,
          apiData[i].strIngredient10,
          apiData[i].strIngredient11,
          apiData[i].strIngredient12,
          apiData[i].strIngredient13,
        ];

        for (let i = 0; i < ingredients.length; i++) {
          if (ingredients[i] != "") {
            cols4 += `<li>${ingredients[i]}</li>`;
          }
        }
if(apiData[i].strTags!=null)

{  var tags = (apiData[i].strTags).split(",");
for (let i = 0; i < tags.length; i++) {
  if (tags[i] != ""&&tags[i] != null) {
    cols5 += `<li>${tags[i]}</li>`;
  }
}
}

        
        cols6 = `<button class="source p-1">
<a   href="${apiData[i].strSource}" target="_blank"  >Source</a>
</button>
<button class="youtube p-1">
<a   href="${apiData[i].strYoutube}" target="_blank">Youtube</a>
</button>`;
        document.getElementById("instructions").innerHTML = cols1;
        document.getElementById("area").innerHTML = cols2;
        document.getElementById("category").innerHTML = cols3;
        document.getElementById("ingredient").innerHTML = cols4;
        document.getElementById("tags").innerHTML = cols5;
        document.getElementById("source").innerHTML = cols6;
        document.getElementById("items").innerHTML = cols7;
      });
    }
  }
}




let Hompage = new Homepage();
let category = new Category();
let area = new Area();
let ingredient = new Ingredient();
let search = new Search();
let contact = new Contact();

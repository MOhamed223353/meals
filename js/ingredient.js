$("#ingredientsNav").click(() => {
    if ($(".navigation").css("left") == "0px") {
      $(".navigation").animate({ left: "-16%" }, 500);
      $(".whitelayer").animate({ left: "0" }, 500);
      $("#iconss").removeClass("fa-times");
      $(".list").slideUp(1000);
    }
    $(".firstpage, .contactpage, .searchpage, .secondpage, .categorypage2, .areapage, .areapage2, .ingredientpage2").fadeOut(
      500,
      () => {
        $(".loading").fadeIn(500, () => {
          $(".loading").ready(function () {
            $(".loading").fadeOut(200, function () {
              $("body").css("overflow", "visible");
              $(".ingredientpage").css("display", "block");
            });
          });
        });
      }
    );
  });
  
  $("#rowIngredient").click(() => {
    $(
      ".firstpage, .searchpage, .secondpage, .categorypage, .categoryinfopage, .areapage, .areapage2, .ingredientpage"
    ).fadeOut(500, () => {
      $(".loading").fadeIn(500, () => {
        $(".loading").ready(function () {
          $(".loading").fadeOut(200, function () {
            $("body").css("overflow", "visible");
            $(".ingredientpage2").css("display", "block");
          });
        });
      });
    });
  });
  $("#rowIngredient2").click(() => {
    $(
      ".firstpage, .contactpage, .searchpage, .secondpage, .categorypage, .categoryinfopage, .areapage, .areapage2, .ingredientpage, .ingredientpage2"
    ).fadeOut(500, () => {
      $(".loading").fadeIn(500, () => {
        $(".loading").ready(function () {
          $(".loading").fadeOut(200, function () {
            $("body").css("overflow", "visible");
            $(".secondpage").css("display", "block");
          });
        });
      });
    });
  });
  
  
  export class Ingredient {
    constructor() {
      this.apiData = this.fetchapi("list", "i=list");
      this.ingredients = this.displayData();
      this.displayData2();
    }
  
    async fetchapi(ingredient, ingredient1) {
      let api = `https://www.themealdb.com/api/json/v1/1/${ingredient}.php?${ingredient1}`;
      let response = await fetch(api);
      response = await response.json();
      let apiData = await response.meals;
      return apiData;
    }
  
    async displayData() {
      let apiData = await this.fetchapi("list", "i=list");
      let cols = "";
      for (let i = 0; i < 20; i++) {
        cols += `<div class="col-md-3">
        <div class="ingredients overflow-hidden text-center">
          <i class="fa-solid fa-bowl-food fa-3x"></i>
        <h3 class="ps-2 text-white">${apiData[i].strIngredient}</h3>
       <p class="text-white   m-auto paragraph">${apiData[i].strDescription}</p>
        </div>
        </div>`;
      }
      document.getElementById("rowIngredient").innerHTML = cols;
      let ingredients = document.querySelectorAll(".ingredients");
      return ingredients;
    }
  
    async displayData2() {
      let apiData = await this.fetchapi("list", "i=list");
      let ingredients = await this.ingredients;
      var that = this;
      for (let i = 0; i < ingredients.length; i++) {
        ingredients[i].addEventListener("click", () => {
          that.apiData = that.fetchapi("filter", `i=${apiData[i].strIngredient}`);
          that.displayData3();
        });
      }
    }
  
    async displayData3() {
      let apiData = await this.apiData;
      let cols = "";
      for (let i = 0; i < apiData.length; i++) {
        cols += `<div class="col-md-3">
      <div class="ingredients2">
        <img class="w-100 " src=${apiData[i].strMealThumb} alt="">
        <div class="layer  d-flex align-items-center"><h3 class="ps-2">${apiData[i].strMeal}</h3></div>
      
      </div>
      </div>`;
      }
      document.getElementById("rowIngredient2").innerHTML = cols;
     let ingredients2= document.querySelectorAll('.ingredients2')
     var that=this
     for(let i=0;i<ingredients2.length;i++)
     {
        ingredients2[i].addEventListener("click",()=>{
          that.apiData = that.fetchapi("search", `s=${apiData[i].strMeal}`);
          that.displayData4()
      })
     }
    }
  
    async displayData4()
    {
        let apiData = await this.apiData;
        let cols1 = "";
        let cols2 = "";
        let cols3 = "";
        let cols4 = "";
        let cols5 = "";
        let cols6 = "";
        let cols7 = "";
        let i=0
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
        
    }
    }
  
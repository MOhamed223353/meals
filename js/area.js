$("#areaNav").click(() => {
  if ($(".navigation").css("left") == "0px") {
    $(".navigation").animate({ left: "-16%" }, 500);
    $(".whitelayer").animate({ left: "0" }, 500);
    $("#iconss").removeClass("fa-times");
    $(".list").slideUp(1000);
  }
  $(".firstpage, .contactpage, .searchpage, .secondpage, .categorypage2, .areapage2, .ingredientpage, .ingredientpage2").fadeOut(
    500,
    () => {
      $(".loading").fadeIn(500, () => {
        $(".loading").ready(function () {
          $(".loading").fadeOut(200, function () {
            $("body").css("overflow", "visible");
            $(".areapage").css("display", "block");
          });
        });
      });
    }
  );
});

$("#rowArea").click(() => {
  $(
    ".firstpage, .contactpage, .searchpage, .secondpage, .categorypage, .categorypage2, .areapage, .ingredientpage, .ingredientpage2"
  ).fadeOut(500, () => {
    $(".loading").fadeIn(500, () => {
      $(".loading").ready(function () {
        $(".loading").fadeOut(200, function () {
          $("body").css("overflow", "visible");
          $(".areapage2").css("display", "block");
        });
      });
    });
  });
});
$("#rowArea2").click(() => {
  $(
    ".fistpage, .contactpage, .searchpage, .secondpage, .categorypage, .categorypage2, .areapage, .areapage2, .ingredientpage, .ingredientpage2"
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


export class Area {
  constructor() {
    this.apiData = this.fetchapi("list", "a=list");
    this.areas = this.displayData();
    this.displayData2();
  }

  async fetchapi(area, area1) {
    let api = `https://www.themealdb.com/api/json/v1/1/${area}.php?${area1}`;
    let response = await fetch(api);
    response = await response.json();
    let apiData = await response.meals;
    return apiData;
  }

  async displayData() {
    let apiData = await this.fetchapi("list", "a=list");
    let cols = "";
    for (let i = 0; i < apiData.length; i++) {
      cols += `<div class="col-md-3">
      <div class="areas">
        <div class="  text-center">
        <i class="fa-solid fa-city fa-3x"></i>
        <h3 class="ps-2 text-white">${apiData[i].strArea}</h3>
        </div>
      </div>
      </div>`;
    }
    document.getElementById("rowArea").innerHTML = cols;
    let areas = document.querySelectorAll(".areas");
    return areas;
  }

  async displayData2() {
    let apiData = await this.fetchapi("list", "a=list");
    let areas = await this.areas;
    var that = this;
    for (let i = 0; i < areas.length; i++) {
      areas[i].addEventListener("click", () => {
        that.apiData = that.fetchapi("filter", `a=${apiData[i].strArea}`);
        that.displayData3();
      });
    }
  }

  async displayData3() {
    let apiData = await this.apiData;
    let cols = "";
    for (let i = 0; i < apiData.length; i++) {
      cols += `<div class="col-md-3">
    <div class="areas2">
      <img class="w-100 " src=${apiData[i].strMealThumb} alt="">
      <div class="layer  d-flex align-items-center"><h3 class="ps-2">${apiData[i].strMeal}</h3></div>
    
    </div>
    </div>`;
    }
    document.getElementById("rowArea2").innerHTML = cols;
   let areas2= document.querySelectorAll('.areas2')
   var that=this
   for(let i=0;i<areas2.length;i++)
   {
    areas2[i].addEventListener("click",()=>{
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







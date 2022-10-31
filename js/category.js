
  $("#categoriesNav").click(()=>{
    if ($(".navigation").css("left") == "0px") {
      $(".navigation").animate({ left: "-16%" }, 500);
      $(".whitelayer").animate({ left: "0" }, 500);
      $("#iconss").removeClass("fa-times");
      $(".list").slideUp(1000);
    }
    $(".firstpage, .contactpage, .searchpage, .secondpage, .categorypage2, .ingredientpage, .ingredientpage2, .areapage, .areapage2").fadeOut(500,()=>{
        $(".loading").fadeIn(500,()=>{
          $(".loading").ready(function () {
            $(".loading").fadeOut(200, function () {
              $("body").css("overflow", "visible");
              $(".categorypage").css('display','block')
            });
          }); 
        })
        $("#items, #tags,#source,#ingredient,#category,#area,#instruction").empty()

    })})

    
 document.getElementById("rowCategory").addEventListener("click", function (e) {
  $(".categorypage, .contactpage, .searchpage, .firstpage, .secondpage").css("display", "none");
  $(".loading").fadeIn(500,()=>{
    $(".loading").ready(function () {
      $(".loading").fadeOut(200, function () {
        $("body").css("overflow", "visible");
        $(".categorypage2").css("display", "block");

      });
    });
  })
});




document.getElementById("rowCategory2").addEventListener("click", function (e) {
  $(".categorypage, .contactpage, .firstpage, .searchpage, .categorypage2").css("display", "none");
  $(".loading").fadeIn(500,()=>{
    $(".loading").ready(function () {
      $(".loading").fadeOut(200, function () {
        $("body").css("overflow", "visible");
        $(".secondpage").css("display", "block");

      });
    });
  })
});
   

    


export class Category
{
  constructor()
  {
    this.apiData = this.fetchApi("categories", '');
    this.apiData2 = this.fetchApi2("filter", `c=chicken`);
      this.meals = this.displayData();
      this.displayData2();
  }

  
  async fetchApi(category, category1) {
    let api = `https://www.themealdb.com/api/json/v1/1/${category}.php?${category1}`;
    let response = await fetch(api);
    response = await response.json();
    let apiData = await response.categories;
    return apiData;
  }
  async fetchApi2(category, category1) {
    let api = `https://www.themealdb.com/api/json/v1/1/${category}.php?${category1}`;
    let response = await fetch(api);
    response = await response.json();
    let apiData = await response.meals;
    return apiData;
  }

  async displayData() {
    let apiData = await this.fetchApi("categories", "");

    let cols = "";
    for (let i = 0; i < 13; i++) {
      cols += `<div class="col-md-3">
      <div class="meals2">
       <img class="w-100 " src=${apiData[i].strCategoryThumb} alt="">
       <div class="layer  text-center"><h3 class="ps-2">${apiData[i].strCategory}</h3>
       <p>${apiData[i].strCategoryDescription}</p>
       </div>
       </div>
       </div>`;
    }
    document.getElementById("rowCategory").innerHTML = cols;
    let meals = document.querySelectorAll(".meals2");
    return meals;
  }

  async displayData2() {
    let apiData = await this.fetchApi("categories", "");
    let apiData2= await this.fetchApi2("filter", `c=chicken`)
    let meals = await this.meals;
    var that = this;
    for (let i = 0; i < meals.length; i++) {
      meals[i].addEventListener("click", () => {
        that.apiData2 = that.fetchApi2("filter", `c=${apiData[i].strCategory}`);
        that.displayData3();
      });
    }
  }

  async displayData3() {
    let apiData = await this.apiData2;
    let cols = "";
    for (let i = 0; i < apiData.length; i++) {
      cols += `<div class="col-md-3">
    <div class="meals3">
      <img class="w-100 " src=${apiData[i].strMealThumb} alt="">
      <div class="layer  d-flex align-items-center"><h3 class="ps-2">${apiData[i].strMeal}</h3></div>
    
    </div>
    </div>`;
    }
    document.getElementById("rowCategory2").innerHTML = cols;
   let meals2= document.querySelectorAll('.meals3')
   var that=this
   for(let i=0;i<meals2.length;i++)
   {
      meals2[i].addEventListener("click",()=>{
        that.apiData2 = that.fetchApi2("search", `s=${apiData[i].strMeal}`);
        that.displayData4()
    })
   }
  }

  async displayData4()
  {
      let apiData = await this.apiData2;
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







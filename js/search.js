$("#searchNav").click(() => {
    if ($(".navigation").css("left") == "0px") {
      $(".navigation").animate({ left: "-16%" }, 500);
      $(".whitelayer").animate({ left: "0" }, 500);
      $("#iconss").removeClass("fa-times");
      $(".list").slideUp(1000);
    }
    $(".firstpage, .contactpage, .secondpage, .categorypage2, .categorypage, .areapage, .areapage2, .ingredientpage, .ingredientpage2").fadeOut(
      500,
      () => {
        $(".loading").fadeIn(500, () => {
          $(".loading").ready(function () {
            $(".loading").fadeOut(200, function () {
              $("body").css("overflow", "visible");
              $(".searchpage").css("display", "block");
            });
          });
        });
      }
    );
  });

  $("#rowSearch").click(() => {
    $(
      ".firstpage, .searchpage, .secondpage, .categorypage, .categorypage2, .areapage, .areapage2, .ingredientpage, .ingredientpage2, .contactpage"
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


export class Search
{
    constructor()
    {

       this.searchInput1= document.getElementById("searchName")
      this.searchInput2= document.getElementById("searchFirstLetter")
       this.apiData=this.fetchApi('s=')
this.displayData2()
this.displayData3()
    }

    async fetchApi(search)
    {
        let api=`https://themealdb.com/api/json/v1/1/search.php?${search}`

        let response=await fetch(api)
        response=await response.json()
        let apiData=await response.meals
        return apiData
    }


    async displayData()
    {
        let apiData=await this.apiData
let cols=''
for (let i = 0; i < apiData.length; i++) {
    cols += `<div class="col-md-3">
    <div class="searches">
      <img class="w-100 " src=${apiData[i].strMealThumb} alt="">
      <div class="layer  d-flex align-items-center"><h3 class="ps-2">${apiData[i].strMeal}</h3></div>
    </div>
    </div>`;
  }
  document.getElementById("rowSearch").innerHTML = cols;

  let searches= document.querySelectorAll('.searches')
   var that=this
   for(let i=0;i<searches.length;i++)
   {
    searches[i].addEventListener("click",()=>{

        that.apiData = that.fetchApi(`s=${apiData[i].strMeal}`);
        that.displayData4()
        // that.apiData = that.fetchapi('');
        // that.displayData2()
    })
   }
    }


    displayData2()
    {
        var that=this

        this.searchInput1.onkeyup= async function(){
            that.apiData=await that.fetchApi(`s=${that.searchInput1.value}`)
        
            if(that.apiData==null)
            {
                $("#rowSearch").empty()
                $(".loading1").css("display","block")
           }
        
        else{
          $(".loading1").css("display","none")
            that.displayData()}
        }
    }

    displayData3()
    {
        var that=this

        this.searchInput2.onkeyup= async function(){
            that.apiData=await that.fetchApi(`f=${that.searchInput2.value}`)
        
            if(that.apiData==null)
            {
                $("#rowSearch").empty()
           }
        
        else{
            that.displayData()}
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
  if (tags[i] != "" && tags[i] != null) {
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
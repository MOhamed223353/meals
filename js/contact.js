$("#contactNav").click(() => {
    if ($(".navigation").css("left") == "0px") {
      $(".navigation").animate({ left: "-16%" }, 500);
      $(".whitelayer").animate({ left: "0" }, 500);
      $("#iconss").removeClass("fa-times");
      $(".list").slideUp(1000);
    }
    $(".firstpage, .searchpage, .secondpage, .categoryinfopage, .areapage2, .ingredientpage, .ingredientpage2, .areapage").fadeOut(
      500,
      () => {
        $(".loading").fadeIn(500, () => {
          $(".loading").ready(function () {
            $(".loading").fadeOut(200, function () {
              $("body").css("overflow", "visible");
              $(".contactpage").css("display", "block");
            });
          });
        });
      }
    );
  });


  export class Contact 
  {
    constructor()
    {
this.nameInput=document.getElementById("nameInput")
this.emailInput=document.getElementById("emailInput")
this.phoneInput=document.getElementById("phoneInput")
this.ageInput=document.getElementById("ageInput")
this.passwordInput=document.getElementById("passwordInput")
this.repasswordInput=document.getElementById("repasswordInput")
this.submitBtn=document.getElementById('submitBtn')
       this.nameRejex=/^[A-Za-z]{1,}$/
        this.emailRejex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        this.phoneRejex=/^01[0125][0-9]{8}$/
        this.ageRejex=/^[0-9]{2}$/
        this.passwordRejex=/^[a-z0-9A-Z]{8,}$/
    this.validateName()
    this.validateEmail()
    this.validateAge()
    this.validatePhone()
    this.validatePassword()
    this.validateRepassword()
    }


    validateName()
    {
        var that=this
        this.nameInput.onkeyup=function(){
            that.submitEnable()

if(that.nameRejex.test(that.nameInput.value))
{
that.nameInput.classList.add("is-valid")
that.nameInput.classList.remove("is-invalid")
$(".alertname").css("display","none")

}
else{
    that.nameInput.classList.add("is-invalid")
    $(".alertname").css("display","block")
    that.nameInput.classList.remove("is-valid")

}}
    }
    validateEmail()
    {
        var that=this
        this.emailInput.onkeyup=function(){
            that.submitEnable()

if(that.emailRejex.test(that.emailInput.value))
{
that.emailInput.classList.add("is-valid")
that.emailInput.classList.remove("is-invalid")
$(".alertemail").css("display","none")
}
else{
    that.emailInput.classList.add("is-invalid")
    $(".alertemail").css("display","block")
    that.emailInput.classList.remove("is-valid")

}}
    }
    validatePhone()
    {
        var that=this
        this.phoneInput.onkeyup=function(){
            that.submitEnable()

if(that.phoneRejex.test(that.phoneInput.value))
{
that.phoneInput.classList.add("is-valid")
that.phoneInput.classList.remove("is-invalid")
$(".alertphone").css("display","none")
}
else{
    that.phoneInput.classList.add("is-invalid")
    $(".alertphone").css("display","block")
    that.phoneInput.classList.remove("is-valid")

}}
    }
    validateAge()
    {
        var that=this
        this.ageInput.onkeyup=function(){
            that.submitEnable()

if(that.ageRejex.test(that.ageInput.value))
{
that.ageInput.classList.add("is-valid")
that.ageInput.classList.remove("is-invalid")
$(".alertage").css("display","none")
}
else{
    that.ageInput.classList.add("is-invalid")
    $(".alertage").css("display","block")
    that.ageInput.classList.remove("is-valid")

}}
    }
    validatePassword()
    {
        var that=this
        this.passwordInput.onkeyup=function(){
            that.submitEnable()

if(that.passwordRejex.test(that.passwordInput.value))
{
that.passwordInput.classList.add("is-valid")
that.passwordInput.classList.remove("is-invalid")
$(".alertpassword").css("display","none")
}
else{
    that.passwordInput.classList.add("is-invalid")
    $(".alertpassword").css("display","block")
    that.passwordInput.classList.remove("is-valid")

}}
    }
    validateRepassword()
    {
        var that=this
        this.repasswordInput.onkeyup=function(){
            that.submitEnable()

if(that.repasswordInput.value==that.passwordInput.value)
{
that.repasswordInput.classList.add("is-valid")
that.repasswordInput.classList.remove("is-invalid")
$(".alertrepassword").css("display","none")

}
else{
    that.repasswordInput.classList.add("is-invalid")
    $(".alertrepassword").css("display","block")
    that.repasswordInput.classList.remove("is-valid")

}}
    }

    submitEnable()
    {
        
        if(this.nameRejex.test(this.nameInput.value)
        &this.emailRejex.test(this.emailInput.value)
        &this.phoneRejex.test(this.phoneInput.value)
        &this.ageRejex.test(this.ageInput.value)
        &this.passwordRejex.test(this.passwordInput.value)
        &this.repasswordInput.value==this.passwordInput.value
        )
        {
            this.submitBtn.removeAttribute('disabled')

        }
        else{
            this.submitBtn.disabled='true'

        }
    }

    
  }
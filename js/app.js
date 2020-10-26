
let date = new Date();
let dt = date.getFullYear();
document.querySelector(".year").innerHTML = dt;

const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function(){
  if(window.pageYOffset > 100){
    navbar.classList.remove("top");
    if(!scrolled){
      navbar.styles.transform ="translateY(-70px)"
    }
  }
  else{
    navbar.classList.add("top");
  }
}

// Smoot Scrolling

$("#navbar a, .btn").on("click", function (e){
  if(this.hash !==""){
    e.preventDefault();

    const hash = this.hash;
   $("html, body").animate(
     {
       scrollTop: $(hash).offset().top - 100
     },
     800
   );
  }
})

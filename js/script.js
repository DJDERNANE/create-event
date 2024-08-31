var btn = document.getElementById("btnlist")
var nav = document.getElementById("navbar")
var headtop = document.getElementById("headtop") 
var logo = document.getElementById("logo") 
var item = document.querySelector("[service=services]")
var parentservice = document.getElementById("parentservice") 
var cancel = document.getElementById("cancel") 
var title = document.getElementById("title")
var def = document.getElementById("definition")
var pic = document.getElementById("pic_service")
var home = document.getElementById("home")


btn.addEventListener("click", function(){
    btn.classList.toggle("active")
    nav.classList.toggle("active")
    headtop.classList.toggle("active")
})
window.onscroll = function(){
    if(window.scrollY >= (screen.height - 500)){
        headtop.classList.add("scrolled");
        logo.src="imgs/Logo_logo Blanc.svg";
    }
    else{
        headtop.classList.remove("scrolled")
        logo.src="imgs/Logo_logo couleur.svg";
    }
   
}
nav.addEventListener('click', function(){
    nav.classList.remove("active");
    btn.classList.remove("active");
})










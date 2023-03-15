let toggle =document.querySelector(".menu-toggle");
let header= document.querySelector("header");
toggle.onclick = function(){
    header.classList.toggle("active");
}
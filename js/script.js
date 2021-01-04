let hamburg = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

hamburg.addEventListener("click", ()=>{
    hamburg.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");  
    if(hamburg.classList.contains("hamburger_active")){
        document.querySelector("body").style.overflow = "hidden";
    }else{
        document.querySelector("body").style.overflow = "scroll";
    }
});

menu.addEventListener("click", ()=>{
    if(hamburg.classList.contains("hamburger_active")){
        hamburg.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
        document.querySelector("body").style.overflow = "scroll";
    }

});
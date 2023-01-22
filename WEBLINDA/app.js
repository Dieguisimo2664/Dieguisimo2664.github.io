const btnCategory = document.getElementById("btn-category");

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    var imgl = document.querySelector('.logo');
    header.classList.toggle("abajo", window.scrollY>0);
    imgl.classList.toggle("hidden", this.window.scrollY>0);
    
})

/* btnCategory.addEventListener('click', function() {

    //document.getElementById('nav__link').classList.toggle('showmain');
    //document.getElementById('nav__link').style.display.toggle = 'flex'
    
}); */

/* (function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})(); */
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout: 3000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:5
            }
        }
    });
});
function toggleMenu() {
    const burger = document.querySelector('.burger'),
        close = document.querySelector('.close'),
        menu = document.querySelector('nav');

    burger.addEventListener('click', function() {
        close.style.display = 'block';
        menu.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        close.style.display = 'none';
        menu.style.display = 'none';
        document.body.style.overflow = 'visible';
    });
}
toggleMenu();
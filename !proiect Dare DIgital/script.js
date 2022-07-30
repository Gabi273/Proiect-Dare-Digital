// alert('merge');
const button = document.querySelector(".hamburger-1");
const navbar = document.querySelector(".navbar-ul");

button.addEventListener("click",() =>{
    navbar.classList.toggle("open");
})

/*SLIDER*/

function initOwl(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    }) 
}

window.addEventListener('load', function () {
    initOwl();
} )


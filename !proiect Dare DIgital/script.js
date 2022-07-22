// alert('merge');
const button = document.querySelector(".hamburger-1");
const navbar = document.querySelector(".navbar-ul");

button.addEventListener("click",() =>{
    navbar.classList.toggle("open");
})

/*SLIDER*/

const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const first = document.getElementById('first');
const auto = true;


const nextSlide = () => {
    //get current
    const current = document.querySelector('.current');
    //remove current
    current.classList.remove('.current');
    //check for next slide
    if(current.nextElementSibling){
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    //get current
    const current = document.querySelector('.current');
    //remove current
    current.classList.remove('.current');
    //check for prev slide
    if(current.previousElementSibling){
        //add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

//pentru a face automat
// const interval = 7500;
let slideInterval;


next.addEventListener('click', e => {
    nextSlide();
});
prev.addEventListener('click', e => {  
    prevSlide();
});
//pentru a face automat
// if (auto) {
//     // Run next slide at interval time
//     slideInterval = setInterval(nextSlide, interval);
//   } 

// alert('merge');
const button = document.querySelector(".hamburger-1");
const navbar = document.querySelector(".navbar-ul");

button.addEventListener("click",() =>{
    navbar.classList.toggle("open");
})

    const buttonSection1 = document.getElementById('button-section-1');
    const buttonSection2 = document.getElementById('button-section-2');
    const buttonSection3 = document.getElementById('button-section-3');
    const buttonSection4 = document.getElementById('button-section-4');
    const section1 = document.querySelector('.section-1');
    const section2 = document.querySelector('.section-2');
    const section3 = document.querySelector('.section-3');
    const section4 = document.querySelector('.section-4');


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
            900:{
                items:3
            },
            1000:{
                items:3
            },
            1100:{
                items:4
            }
        }
    }) 
}

window.addEventListener('load', function () {
    initOwl();
} )

/* DRAGGEr*/

const dragger = document.getElementById('dragger');
const fileSelectorInput = document.getElementById('fileSelectorInput');

fileSelectorInput.addEventListener('change', function(){
    file = this.files[0]
    uploadFileHandler(file);
});

dragger.addEventListener('dragover', (e) =>{
    e.preventDefault();

});

dragger.addEventListener('dragleave', () =>{

});

dragger.addEventListener('drop', (e) =>{
    e.preventDefault();
    file = e.dataTransfer.files[0]
    uploadFileHandler(file);
});

const uploadFileHandler = (file) => {
    const validFileExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
    
    if(validFileExtensions.includes(file.type)){
        
        const fileReader = new FileReader();
        
        fileReader.onload = () =>{
            const fileURL = fileReader.result;
            const imageTag = `<img src=${fileURL} alt="" />`
            dragger.innerHTML = imageTag;
        }

        fileReader.readAsDataURL(file);
    }

}
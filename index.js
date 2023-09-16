const slides = document.querySelectorAll(".slide");


let activeSlide = 0;

let auto = setInterval(() => {
    slides[activeSlide].classList.remove('active');
    activeSlide++;

    if (activeSlide === slides.length) {
        activeSlide = 0;
    }
    slides[activeSlide].classList.add('active');
}, 4000)




const nextBtn = () => {


    slides[activeSlide].classList.remove('active');
    activeSlide++;
    if (activeSlide === slides.length) {
        activeSlide = 0;
    }
    slides[activeSlide].classList.add('active');

}


const backBtn = () => {


    slides[activeSlide].classList.remove('active');
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    slides[activeSlide].classList.add('active');

}
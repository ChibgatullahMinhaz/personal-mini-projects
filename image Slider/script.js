const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

const updateSlider = () => {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    const sliderWidth = document.querySelector('.slider-container').offsetWidth;
    document.querySelector('.slider').style.transform = `translateX(${-currentIndex * sliderWidth}px)`;
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

window.addEventListener('resize', updateSlider);

// Initialize the slider
updateSlider();

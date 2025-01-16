import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';


function loadCarousel(){
    //Main div
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    //Carousel imgs
    const images = [image1,image2,image3];
    const slides = []
    images.forEach((src,index)=>{
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if(index === 0){
            item.classList.add('carousel-item-active')
        }

        const img = document.createElement('img');
        img.src = src;
        img.alt = `image${index + 1}`;
        item.appendChild(img);

        carousel.appendChild(item);
        slides.push(item);
    });

    //Carousel btns
    const carouselActions = document.createElement('div');
    carouselActions.classList.add('carousel-actions');

    const prevBtn = document.createElement('button');
    prevBtn.id = 'carousel-prev-btn';
    prevBtn.setAttribute('aria-label','previus-slide');
    prevBtn.textContent = '<';

    const nextBtn = document.createElement('button');
    nextBtn.id = 'carousel-next-btn';
    nextBtn.setAttribute('aria-label','next-slide');
    nextBtn.textContent = '>';

    carousel.appendChild(carouselActions);

    carouselActions.appendChild(prevBtn);
    carouselActions.appendChild(nextBtn);

    //Logica del carrusel

    let slidePosition = 0;
    const totalSlides = slides.length;

    function updateSlidePosition() {
        slides.forEach((slide) => {
            slide.classList.remove('carousel-item-active');
            slide.classList.add('carousel-item-hidden');
        });
        slides[slidePosition].classList.add('carousel-item-active');
    }

    function moveToNextSlide() {
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0; // Reinicia al inicio
        } else {
            slidePosition++;
        }
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        if (slidePosition === 0) {
            slidePosition = totalSlides - 1; // Va al final
        } else {
            slidePosition--;
        }
        updateSlidePosition();
    }

    // Agrega los eventos a los botones
    prevBtn.addEventListener('click', moveToPrevSlide);
    nextBtn.addEventListener('click', moveToNextSlide);

    return carousel;
}

export default loadCarousel;
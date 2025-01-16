import coffeeshop from './assets/coffee-shop.jpg';
import instagram from './assets/instagram-brands-solid.svg';
import x from './assets/x-twitter-brands-solid.svg';
import facebook from './assets/square-facebook-brands-solid.svg';

function loadAbout(){
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutSection = document.createElement('div');
    aboutSection.classList.add('aboutSection');

    const aboutImg = document.createElement('div');
    aboutImg.classList.add ='aboutImg'; 
    aboutImg.innerHTML = `<img src="${coffeeshop}" alt="coffee-shop" class="menu-img">`; 
    /* Photo by Dmitry Zvolskiy: https://www.pexels.com/photo/inside-a-store-2199190/ */

    const aboutText = document.createElement('p');
    aboutText.innerHTML = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ante metus turpis dis consectetur; pharetra sed integer aliquet hendrerit. Auctor sodales cras egestas rutrum litora imperdiet metus. Enim morbi habitant pellentesque posuere sem rutrum scelerisque leo. Natoque bibendum iaculis ornare potenti enim.';

    const contactSection = document.createElement('div');
    contactSection.classList.add('contactSection');

    const contactTitle = document.createElement('h2');
    contactTitle.innerHTML = 'Contact Us';

    const contactEmail = document.createElement('p');
    contactEmail.innerHTML = 'coffee@email.com';

    const contactMedia = document.createElement('p');
    contactMedia.innerHTML = 'Follow Us';

    const socialMedia = document.createElement('div');
    socialMedia.classList.add('socialMedia');

    const media1 = document.createElement('div');
    media1.classList.add('media');
    media1.innerHTML = `<img src="${instagram}" alt="coffee-shop" class="menu-img">`;
    
    const media2 = document.createElement('div');
    media2.classList.add('media');
    media2.innerHTML = `<img src="${x}" alt="coffee-shop" class="menu-img">`;
    
    const media3 = document.createElement('div');
    media3.classList.add('media');
    media3.innerHTML = `<img src="${facebook}" alt="coffee-shop" class="menu-img">`;

    //Adding img to About Section
    aboutSection.appendChild(aboutImg);

    //Adding elements to Social Media
    socialMedia.appendChild(media1);
    socialMedia.appendChild(media2);
    socialMedia.appendChild(media3);

    //Adding elements to Contact Section
    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactEmail);
    contactSection.appendChild(contactMedia);
    contactSection.appendChild(socialMedia);

    //Adding elements to About
    about.appendChild(aboutSection);
    about.appendChild(aboutText);
    about.appendChild(contactSection);
 
    return about;
}
export default loadAbout;
import loadCarousel from "./carousel";
import loadMenu from './menu';
import capuccino from './assets/capuccino.jpg';
import golfeado from './assets/golfeado.jpg';
import chicken from './assets/mediterranean-chicken.jpg';
import icedmocha from './assets/iced-mocha.jpg';

function loadHome(){
    const home = document.createElement('div');
    home.classList.add('home');
    
    //Hero Section
    const hero = document.createElement('div');
    hero.classList.add('hero'); 
    const carousel = loadCarousel();
    hero.appendChild(carousel);

    //Menu Section
    const menuSection = document.createElement('div');
    menuSection.classList.add('menuSection')

    const menuTitle = document.createElement('h2');
    menuTitle.innerHTML = 'Menu';

    const menu = document.createElement('div');
    menu.classList.add('menuExample');

    const menuImg1 = document.createElement('div');
    menuImg1.innerHTML= `<img src="${capuccino}" alt="Capuccino">`;
    menuImg1.classList.add('menu-example');
    
    const menuImg2 = document.createElement('div');
    menuImg2.innerHTML= `<img src="${icedmocha}" alt="Iced Mocha">`;
    menuImg2.classList.add('menu-example');

    const menuImg3 = document.createElement('div');
    menuImg3.innerHTML= `<img src="${chicken}" alt="Chicken Sub">`;
    menuImg3.classList.add('menu-example');

    const menuImg4 = document.createElement('div');
    menuImg4.innerHTML= `<img src="${golfeado}" alt="Golfeado" >`;
    menuImg4.classList.add('menu-example');

    const exploreMenu = document.createElement('h3');
    exploreMenu.innerHTML = 'Explore Our Menu';

    //Location Section
    const locationSection = document.createElement('div');
    locationSection.classList.add('location');

    const locationTitle = document.createElement('h2');
    locationTitle.innerHTML = 'Locations';

    const location = document.createElement('p');
    location.innerHTML = '1237 Maple Street, <br>Downtown District <br>San Francisco CA, 94103, USA';

    const schedule = document.createElement('p');
    schedule.innerHTML = 'Store Schedule: <br>Mon-Fri: 7:00 AM - 7:00 PM <br>Sat-Sun: 9:00 AM - 5:00 PM';
    
    //Adding elementos to location section
    locationSection.append(locationTitle);
    locationSection.append(location);
    locationSection.append(schedule); 

    //Adding imgs to menu
    menu.appendChild(menuImg1);
    menu.appendChild(menuImg2);
    menu.appendChild(menuImg3);
    menu.appendChild(menuImg4);

    //Adding elements to menu section
    menuSection.appendChild(menuTitle);
    menuSection.appendChild(menu);
    menuSection.appendChild(exploreMenu);

    //Adding elements to home section
    home.appendChild(hero);
    home.appendChild(menuSection);
    home.appendChild(locationSection);

    return home;
}

export default loadHome; 
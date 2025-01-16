import capuccino from './assets/capuccino.jpg';
import icedmocha from './assets/iced-mocha.jpg';
import brownie from './assets/brownie.jpg';
import caprese from './assets/caprese-pressed.jpg';
import golfeado from './assets/golfeado.jpg';
import chicken from './assets/mediterranean-chicken.jpg';
import quesillo from './assets/quesillo.jpg';
import tresleches from './assets/tres-leches.jpg';

function loadMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //Hot Beverages//
    const hotBeveragesSection = document.createElement('div');
    hotBeveragesSection.classList.add('hotBeveragesSection')

    const hotBeveragesTitle = document.createElement('h2');
    hotBeveragesTitle.innerHTML = 'Coffees & Teas'

    const hotBeveragesItem = document.createElement('div');
    hotBeveragesItem.classList.add('menu-item');
    hotBeveragesItem.innerHTML = `<img src="${capuccino}" alt="Capuccino" class="menu-img">`;

    const hotBeverages = document.createElement('p');
    hotBeverages.innerHTML = 'Espresso <br>Americano <br>Capuccino <br>Latte <br>Green Tea <br>Earl Grey Tea <br>Hot Chocolate'

    //Cold Beverages//
    const coldBeveragesSection = document.createElement('div');
    coldBeveragesSection.classList.add('coldBeveragesSection');

    const coldBeveragesTitle = document.createElement('h2');
    coldBeveragesTitle.innerHTML = 'Beverages';

    const coldBeveragesItem = document.createElement('div');
    coldBeveragesItem.classList.add('menu-item');
    coldBeveragesItem.innerHTML = `<img src="${icedmocha}" alt="iced-mocha" class="menu-img">`;
    
    const coldBeverages = document.createElement('p');
    coldBeverages.innerHTML = 'Iced Latte <br>Iced Mocha <br>Frappe <br>Iced Tea <br>Lemonade';

    //Pressed Sub//
    const pressedSub = document.createElement('div');
    pressedSub.classList.add('pressedSub');

    const pressedSubTitle = document.createElement('h2');
    pressedSubTitle.innerHTML = 'Pressed Sub';

    const pressedSub1Title = document.createElement('h3');
    pressedSub1Title.innerHTML = 'Capresse'

    const pressedSub1 = document.createElement('p');
    pressedSub1.innerHTML = 'Bread, Mozarella, Tomatoes, Basil <br>Comes with some yuca chips';

    const pressedSub1Item = document.createElement('div');
    pressedSub1Item.classList.add('menu-item');
    pressedSub1Item.innerHTML = `<img src="${caprese}" alt="caprese-sub" class="menu-img">`;

    const pressedSub2Title = document.createElement('h3');
    pressedSub2Title.innerHTML = 'Mediterranean Chicken'

    const pressedSub2 = document.createElement('p');
    pressedSub2.innerHTML = 'Bread, Grill Chicken, Hummus, Spinach, Peppers, Feta Cheese <br>Comes with some yuca chips';

    const pressedSub2Item = document.createElement('div');
    pressedSub2Item.classList.add('menu-item');
    pressedSub2Item.innerHTML = `<img src="${chicken}" alt="chicken-sub" class="menu-img">`;

    //Desserts//
    const dessert = document.createElement('div');
    dessert.classList.add('dessert');

    const dessertsTitle = document.createElement('h2');
    dessertsTitle.innerHTML = 'Desserts';

    const dessert1Title = document.createElement('h3');
    dessert1Title.innerHTML = 'Tres Leches'

    const dessert1 = document.createElement('p');
    dessert1.innerHTML = 'A spongy cake soaked in a blend of three types of milk and topped with whipped cream.';

    const dessert1Item = document.createElement('div');
    dessert1Item.classList.add('menu-item');
    dessert1Item.innerHTML = `<img src="${tresleches}" alt="tres-leches" class="menu-img">`;

    const dessert2Title = document.createElement('h3');
    dessert2Title.innerHTML = 'Quesillo'

    const dessert2 = document.createElement('p');
    dessert2.innerHTML = 'A traditional Venezuelan flan made with condensed milk, regular milk, and eggs, topped with golden caramel.';

    const dessert2Item = document.createElement('div');
    dessert2Item.classList.add('menu-item');
    dessert2Item.innerHTML = `<img src="${quesillo}" alt="quesillo" class="menu-img">`;

    const dessert3Title = document.createElement('h3');
    dessert3Title.innerHTML = 'Golfeado'

    const dessert3 = document.createElement('p');
    dessert3.innerHTML = 'Sweet rolls with a hint of anise, glazed with cane syrup and served with fresh cheese.';

    const dessert3Item = document.createElement('div');
    dessert3Item.classList.add('menu-item');
    dessert3Item.innerHTML = `<img src="${golfeado}" alt="golfeado" class="menu-img">`;

    const dessert4Title = document.createElement('h3');
    dessert4Title.innerHTML = 'Brownie'

    const dessert4 = document.createElement('p');
    dessert4.innerHTML = 'Rich and moist, served with optional vanilla ice cream.';

    const dessert4Item = document.createElement('div');
    dessert4Item.classList.add('menu-item');
    dessert4Item.innerHTML = `<img src="${brownie}" alt="brownie" class="menu-img">`;

    //Adding elements to the hot beverages sections

    hotBeveragesSection.appendChild(hotBeveragesTitle);
    hotBeveragesSection.appendChild(hotBeveragesItem);
    hotBeveragesSection.appendChild(hotBeverages);

    //Adding elements to the cold beverages section

    coldBeveragesSection.appendChild(coldBeveragesTitle);
    coldBeveragesSection.appendChild(coldBeveragesItem);
    coldBeveragesSection.appendChild(coldBeverages);

    //Adding elements to the pressed sub section
    pressedSub.appendChild(pressedSubTitle);
    pressedSub.appendChild(pressedSub1Title);
    pressedSub.appendChild(pressedSub1);
    pressedSub.appendChild(pressedSub1Item)
    pressedSub.appendChild(pressedSub2Title);
    pressedSub.appendChild(pressedSub2);
    pressedSub.appendChild(pressedSub2Item);

    //Adding elements to the dessserts section
    dessert.appendChild(dessertsTitle);
    dessert.appendChild(dessert1Title);
    dessert.appendChild(dessert1);
    dessert.appendChild(dessert1Item);
    dessert.appendChild(dessert2Title);
    dessert.appendChild(dessert2);
    dessert.appendChild(dessert2Item);
    dessert.appendChild(dessert3Title);
    dessert.appendChild(dessert3);
    dessert.appendChild(dessert3Item);
    dessert.appendChild(dessert4Title);
    dessert.appendChild(dessert4);
    dessert.appendChild(dessert4Item);

    //Adding elements to menu section
    menu.appendChild(hotBeveragesSection);
    menu.appendChild(coldBeveragesSection);
    menu.appendChild(pressedSub);
    menu.appendChild(dessert);

    return menu;
}
export default loadMenu;
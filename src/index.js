import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

function init(){
    const content = document.getElementById('content');
    
    const clearContent = () =>{
        content.textContent = '';
    }

    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const about = document.getElementById('about');

    home.addEventListener('click', ()=>{
        clearContent();
        content.appendChild(loadHome());

    })

    menu.addEventListener('click', ()=>{
        clearContent();
        content.appendChild(loadMenu());
    })

    about.addEventListener('click', ()=>{
        clearContent();
        content.appendChild(loadAbout());
    })

    content.appendChild(loadHome());
}

init();
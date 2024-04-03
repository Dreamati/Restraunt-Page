import "./bg-image.jpg"
import "./style.css"
import {homepage} from './homepage.js'
import {menu} from './menu.js'
const home = document.getElementById('home')


homepage();
menu();
home.addEventListener('click', function(){
    homepage();
})


// document.body.style.backgroundImage =  "url('./bg-image.jpg')";
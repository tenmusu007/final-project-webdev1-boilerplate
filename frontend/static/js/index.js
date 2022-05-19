import {getCountries} from './countries.js'

export const countries = getCountries();

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    console.log(countries);

    const bodyEl = document.querySelector('body')
    const boxEl = document.querySelector('.boxContent')

    bodyEl.onscroll = logScroll
    setTimeout(logScroll, 0)

    function logScroll() {
        if (window.scrollY > boxEl.offsetTop) {
            document.querySelector('nav').style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
        } else {
            document.querySelector('nav').style.backgroundColor = 'transparent'
        }
    }

    const darkmodeBtn = document.querySelector(".btnDarkMod");

    darkmodeBtn.addEventListener("click", function(){
        const background = document.querySelector("body")
    
        if (background.style.backgroundColor === "white"){
            background.style.backgroundColor = "black"
            background.style.color = "white"
        }else{
            background.style.backgroundColor = "white"
            background.style.color = "black"
        }
    });
});





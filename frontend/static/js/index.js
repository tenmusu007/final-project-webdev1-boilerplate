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
});



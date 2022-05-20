import {getCountries} from './countries.js'

export const countries = getCountries();
let searchbox 
let url ="http://localhost:3000/countries"
window.addEventListener('DOMContentLoaded', (e) =>{
    document.body.addEventListener("click", (e) => {
        console.log(e.target);
    })
    if(location.href === url){
        const search = document.getElementById("search")
        const countriesContainer = document.getElementsByClassName("conatiner-country")[0];
        search.addEventListener("keyup", function(e){
            if(e.key === "Enter"){
                searchbox = e.target.value
                const searchArray = test(searchbox);
                // console.log(searchArray)
                countriesContainer.innerHTML = loop(searchArray);
            };
        })
        const region = document.getElementById("region")
        console.log(region) 
        region.addEventListener("change", (event) => {
        let selectedregion = (event.target.value)
        console.log(selectedregion)
        const regionArray =regionFn(selectedregion);
        countriesContainer.innerHTML = loop(regionArray)
    });
    console.log("country")
    }else{
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

    
    }
    console.log("home")
})

const darkmodeBtn = document.querySelector(".btnDarkMod");

    darkmodeBtn.addEventListener("click", function(){
        console.log("clicked")
        const background = document.querySelector("body")
    
        if (background.style.backgroundColor === "white"){
            background.style.backgroundColor = "black"
            background.style.color = "white"
        }else{
            background.style.backgroundColor = "white"
            background.style.color = "black"
        }
    });

function regionFn(data){
    let arr = [];
    for(let i = 0; i < info.length; i++){
        if(info[i].region.indexOf(data) != -1){
            arr.push(info[i])
        }
    }
    return arr;
}
function test(searchbox){
    let arr = [];
    for(let i = 0; i < info.length; i++){
        if(info[i].cname.toLowerCase().indexOf(searchbox.toLowerCase()) != -1){
            console.log("yes")
            arr.push(info[i])
            // console.log(searchArray)
        }
    }
    return arr;
}
    console.log(countries);
export const info = countries.map(item =>({
    cname :item.name.common,
    pop: item.population,
    region: item.region,
    capital: item.capital,
    img : item.flags.png,
    view : item.cca3
}))
console.log(info)

// window.addEventListener('DOMContentLoaded', (event) => {
    
// });



export const loop = (data)=>{
    let array1 = []
        for(let i = 0; i < data.length; i++){
            // console.log(data)
            array1.push(
            `
            <div class="cont-indiv">
            <a href="http://localhost:3000/countries/${data[i].view}">
            <div class="box">
            <img src="${data[i].img}" alt="" class="flag">
            <p class="name">${data[i].cname}</p>
            <p class="num-pop"><span class="bold">population:</span> ${data[i].pop.toLocaleString()}</p>
            <p class="region"><span class="bold">region:</span> ${data[i].region}</p>
            <p class="capital"><span class="bold">capital:</span> ${data[i].capital}</p>
            </div>
            </a>
            </div>
            `)
            }
            // console.log(array1)
    return array1.join('')
}
        



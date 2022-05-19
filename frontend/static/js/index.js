import {getCountries} from './countries.js'

export const countries = getCountries();
let searchbox 
window.addEventListener('DOMContentLoaded', (e) =>{
    const search = document.getElementById("search")
    const countriesContainer = document.getElementsByClassName("conatiner-country")[0];
    search.addEventListener("keyup", function(e){
        if(e.key === "Enter"){
            searchbox = e.target.value
            const searchArray = test(searchbox);
            console.log(searchArray)
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
})
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
        // console.log("loop")
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
            <p class="num-pop"><span class="bold">population:</span> ${data[i].pop}</p>
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
        

// let array2 =[]
// function showUpHtml(test){
//     // console.log("showUpHtml is working")
//     console.log(test)
//     for(let i = 0; i < test.length; i++){
//         array2.push(
//         `
//         <div class="cont-indiv">
//         <a href="http://localhost:3000/countries/${test[i].view}">
//         <div class="box">
//         <img src="${test[i].img}" alt="" class="flag">
//         <p class="name">${test[i].cname}</p>
//         <p class="num-pop"><span class="bold">population:</span> ${test[i].pop}</p>
//         <p class="region"><span class="bold">region:</span> ${test[i].region}</p>
//         <p class="capital"><span class="bold">capital:</span> ${test[i].capital}</p>
//         </div>
//         </a>
//         </div>
//         `
//         )
//         }
//         // console.log(array2)
//     return array2.join('')
// }
// // showUpHtml(info)
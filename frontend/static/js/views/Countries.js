import AbstractView from "./AbstractView.js";
// import { getCountries } from "../countries.js";
import { countries } from "../index.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        console.log(this.params.id);
        const info = countries.map(item =>({
            cname :item.name.common,
            pop: item.population,
            region: item.region,
            capital: item.capital,
            img : item.flags.png,
            view : item.cca3
        }))
        console.log(info)



        // const infomation = info.map(item2 =>{
        //     return `
        //     <img src="${item2.img}" alt="" class="flag">
        //     <p class="name">${item2.cname}</p>
        //     <p class="num-pop">population:${item2.pop}</p>
        //     <p class="region">region: ${item2.region}</p>
        //     <p class="cpital">capital: ${item2.capital}</p>
        //     `
        // })

        const infomation = (info)=>{
            let test = loop(info)
            return test
        }
        function loop(info){
            let array = []
            for(let i = 0; i < info.length; i++){
                array.push(
                `
                <div class="cont-indiv">
                <a href="http://localhost:3000/countries/${info[i].view}">
                <div class="box">
                <img src="${info[i].img}" alt="" class="flag">
                <p class="name">${info[i].cname}</p>
                <p class="num-pop"><span class="bold">population:</span> ${info[i].pop}</p>
                <p class="region"><span class="bold">region:</span> ${info[i].region}</p>
                <p class="capital"><span class="bold">capital:</span> ${info[i].capital}</p>
                </div>
                </a>
                </div>
                `)
            }
        return array.join('')
        }

        const div = document.createElement("div");
        const cont = document.getElementById("container")
        const box =document.createElement("div")
        box.innerHTML =`${infomation(info)}`
        div.innerHTML = `
        <p id ="ptag">This is content</p>
        `
        return `
        <div id= "container"> 
            <div class="conatiner-country">
                    ${box.innerHTML}
            </div>
        </div>
        `
    }
    
}


// })
// const cont = document.getElementById("container")
// const box =document.createElement("div")
// cont.appendChild(box);
// box.innerHTML =`<h1> atsu </h1>`

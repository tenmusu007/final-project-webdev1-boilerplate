import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";

import { info } from "../index.js";
import { loop } from "../index.js"
export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        console.log(this.params.id);
        

        const div = document.createElement("div");
        const cont = document.getElementById("container")
        const box =document.createElement("div")
        // const search = document.querySelector("#search")
        // console.log(search)
        console.log("box")
        box.innerHTML =`${loop(info)}`
        div.innerHTML = `
        <p id ="ptag">This is content</p>
        `
        return `
        <div id= "container"> 
        <input class="sarch-bar" type ="text" id="search">
        <select name="region" id="region">
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
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

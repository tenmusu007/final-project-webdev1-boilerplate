import AbstractView from "./AbstractView.js";

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
        // cont.appendChild(box);
        box.innerHTML =`<h1> atsu </h1>`
        div.innerHTML = `
        <p id ="ptag">This is content</p>
        `
        return `
        <div id= "container"> 
            ${box.innerHTML}
        </div>
        `
    }
}
// const cont = document.getElementById("container")
// const box =document.createElement("div")
// cont.appendChild(box);
// box.innerHTML =`<h1> atsu </h1>`

// const item = localStorage.getItem('countries')
// console.log(item)
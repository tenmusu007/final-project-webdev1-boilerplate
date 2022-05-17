import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";

const getName = function(country) {
    let name = "";
    for (let i = 0 ; i <  countries.length ; i++) {
        if (countries[i].cca3.toLowerCase() ===  country ){
            name= countries[i].name.common;
        } 
    }
    return name;
  };
  //  console.log(getName("arg"));


export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
    //    console.log(this.params.id);
        const countryId = this.params.id
        let countryName = ""
        countryName= getName(countryId);
        
        //GET MORE DETAILS
        let countryNativeName= ""
        let countryCapital= ""
        let countryFlag = ""
        let countryDomain = ""
        let countryPopulation = ""
        let countryRegion = ""
        let countrySubregion = ""
        let countryCurrencies = ""
        let countryLanguages =  ""
        let countryBorders = ""
        
        let domain = []
        let currencies = {}
        let languages= {}
        let borders = []
        let map= ""
        let nativeName = {}

        for(let i = 0; i< countries.length; i++){
          if (countries[i].cca3.toLowerCase() ===  countryId ){
            countryFlag= countries[i].flags.png;

            nativeName= countries[i].name;
            for (const property in nativeName) {
            //  console.log(`${property}: ${nativeName[property]}`);
              if (property=== "official"){
               countryNativeName= nativeName[property];
              }
            }

            countryCapital= countries[i].capital;
            map = countries[i].maps.googleMaps;
            //map= "http://www.google.com/maps/place/"+ countryName
            //console.log(map);
            

            domain = countries[i].tld.toString();
            countryDomain= domain;
                  
            
            countryPopulation = countries[i].population;
            countryRegion = countries[i].region;
            countrySubregion = countries[i].subregion;

            currencies = countries[i].currencies;
            console.log(currencies);
            for (const property in currencies) {
               //  console.log(`${property}: ${currencies[property]}`);
               if (countryCurrencies !== "")
               {
                countryCurrencies += ", "
               }
                 countryCurrencies += currencies[property].symbol +" "+currencies[property].name;
               }
                
            languages= countries[i].languages;
            console.log(languages);
            for (const property in languages) {
             //console.log(`${property}: ${languages[property]}`);
             if (countryLanguages !== "")
             {
                countryLanguages += ", "
             }
                        
             countryLanguages += languages[property];
            }
            
            
            borders = countries[i].borders 
            console.log(borders);
            for (let b = 0; b < borders.length; b++){
                countryBorders += "<img><a href= http://localhost:3000/countries/"+borders[b].toLowerCase()+">"+ getName(borders[b].toLowerCase()) + "</a></img>  ";
            }
              //console.log(countryName);
             //console.log(countryFlag);
            }
        }
    
        return `
            <div>
                <div>
                  <img><a href= http://localhost:3000/countries>Back</a></img>
                </div>
                <div class="container">
                    <div class="column"><img src=${countryFlag}></img></div>
                    <div class="column">
                        <div class="row"><h2>${countryName}</h2><div>
                        <div class="row">
                            <div class="container">
                                <div class="column">
                                    <div class="row"><label>Native Name: </label>${countryNativeName}</div>
                                    <div class="row"><label>Population: </label>${countryPopulation}</div>
                                    <div class="row"><label>Region: </label>${countryRegion}</div>
                                    <div class="row"><label>Sub Region: </label>${countrySubregion}</div>
                                    <div class="row"><label>Capital: </label>${countryCapital}</div>
                                </div>
                                <div class="column">
                                    <div class="row"><label>Top Level Domain: </label>${countryDomain}</div>
                                    <div class="row"><label>Currencies: </label>${countryCurrencies}</div>
                                    <div class="row"><label>Languages: </label>${countryLanguages}</div>
                                    <div class="row"><label>Routes: </label><a href=${map}>Google Maps</a></div>
                                </div>
                            </div>
                        </div> 
                        <div class="row">
                            <label>Borders Countries: </label> ${countryBorders}
                        </div>
                        <div class="row">
                         <!--    <iframe src="${map}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <!-->
                        </div>
                    </div>
                </div>    
            </div>`;
    }
}
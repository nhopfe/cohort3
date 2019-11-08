import { City, Community } from './classes.js'
import functions from './cities.js'

const community = new Community("The Greater Area");
console.log(community);
const parent = document.getElementById("idCityDisplay");
const createCity = () => {
    let newName = document.getElementById("idCityNameInput").value;
    let newLat = document.getElementById("idCityLatInput").value;
    let newLong = document.getElementById("idCityLongInput").value;
    let newPop = document.getElementById("idCityPopInput").value;
    community.createCity(parent, newName, newLat, newLong, newPop);
    console.log(community);
}


const cardButtons = () => {
    console.log(event.target.textContent);
    if (event.target.textContent == "Delete City") {
        const cardKey = event.target.parentNode.getAttribute('key')
        functions.deleteCityCard(event.target);
        community.deleteCity(cardKey)

    }
}



document.getElementById("idCityDisplay").addEventListener('click', cardButtons);
document.getElementById("idCreateCityButton").addEventListener('click', createCity);


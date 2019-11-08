import { City, Community } from './classes.js'
import functions from './cities.js'




const community = new Community("The Greater Area");
console.log(community);
const parent = document.getElementById("idCityDisplay");
const createCity = () => {
    let newName = document.getElementById("idCityNameInput").value;
    let newLat = document.getElementById("idCityLatInput").value;
    let newLong = document.getElementById("idCityLongInput").value;
    let newPop = Number(document.getElementById("idCityPopInput").value);
    community.createCity(parent, newName, newLat, newLong, newPop);
    console.log(community);
}


const cardButtons = () => {
    const targetCard = event.target.parentNode
    console.log(event.target.textContent);
    if (event.target.textContent == "Delete City") {
        const cardKey = targetCard.getAttribute('key')
        functions.deleteCityCard(event.target);
        community.deleteCity(cardKey)
    }
    if (event.target.textContent == "Move In") {
        const cardKey = targetCard.getAttribute('key')
        const input = Number(targetCard.children[4].value)
        community[cardKey].movedIn(input)
        targetCard.children[3].textContent = Number(community[cardKey].population)
    }
    if (event.target.textContent == "Move Out") {
        const cardKey = targetCard.getAttribute('key')
        const input = Number(targetCard.children[4].value)
        community[cardKey].movedOut(input)
        targetCard.children[3].textContent = Number(community[cardKey].population)
    }    
}



document.getElementById("idCityDisplay").addEventListener('click', cardButtons);
document.getElementById("idCreateCityButton").addEventListener('click', createCity);


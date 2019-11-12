import { Community } from './classes.js'
import functions from './cities.js'

const community = new Community("The Greater Area");
const parent = document.getElementById("idCityDisplay");
const createCity = () => {
    let newName = document.getElementById("idCityNameInput").value;
    let newLat = Number(document.getElementById("idCityLatInput").value);
    let newLong = Number(document.getElementById("idCityLongInput").value);
    let newPop = Number(document.getElementById("idCityPopInput").value);
    // let mostNorthernCity = document.getElementById("idMostNorthern").textContent;
    // let mostSouthernCity = document.getElementById("idMostSouthern").textContent;
    // let totalPop = document.getElementById("idTotalPopDisplay").textContent;
    // console.log(typeof(newLat));
    if ((newLat < -90) || (newLat > 90)) {
        return alert("Latitude must be a number between -90 and 90");
    } else if ((newLong < -180) || (newLong > 180)) {
        return alert("Longitude must be a number between -180 and 180");
    } else {
        community.createCity(parent, newName, newLat, newLong, newPop);
        console.log(community);
        // mostNorthernCity = community.mostNorthern();
        // mostSouthernCity = community.mostSouthern();
        // totalPop = community.totalPopulation();
    }

};

const cardButtons = () => {
    const targetCard = event.target.parentNode
    // console.log(event.target.textContent);
    if (event.target.textContent == "Show") {
        const cardKey = targetCard.getAttribute('key')
        targetCard.children[1].textContent = community.cities[cardKey].show();
    }
    if (event.target.textContent == "Move In") {
        const cardKey = targetCard.getAttribute('key')
        const input = Number(targetCard.children[2].value)
        community.cities[cardKey].movedIn(input);
    }
    if (event.target.textContent == "Move Out") {
        const cardKey = targetCard.getAttribute('key')
        const input = Number(targetCard.children[2].value)
        community.cities[cardKey].movedOut(input);
    }
    if (event.target.textContent == "How Big") {
        const cardKey = targetCard.getAttribute('key')
        targetCard.children[1].textContent = community.cities[cardKey].howBig();
    }
    if (event.target.textContent == "Show Hemisphere") {
        const cardKey = targetCard.getAttribute('key')
        targetCard.children[1].textContent = community.cities[cardKey].whichSphere();
    }
    if (event.target.textContent == "Delete City") {
        const cardKey = targetCard.getAttribute('key')
        functions.deleteCityCard(event.target);
        community.deleteCity(cardKey);
    }


}



document.getElementById("idCityDisplay").addEventListener('click', cardButtons);
document.getElementById("idCreateCityButton").addEventListener('click', createCity);

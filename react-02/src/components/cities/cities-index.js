import { Community } from './classes.js'
import functions from './cities.js'
import { serverFunctions } from './api.js'

const community = new Community("The Greater Area");
const parent = document.getElementById("idCityDisplay");

const cityChecker = () => {
    let northCityObj = community.mostNorthern();
    let southCityObj = community.mostSouthern();
    document.getElementById("idNorthCity").textContent = northCityObj.name; 
    document.getElementById("idSouthCity").textContent = southCityObj.name;
    document.getElementById("idTotalPopDisplay").textContent = community.totalPopulation();
}

serverFunctions.getDataOnStart(community, parent);

const createCity = () => {
    let newName = document.getElementById("idCityNameInput").value;
    let newLat = Number(document.getElementById("idCityLatInput").value);
    let newLong = Number(document.getElementById("idCityLongInput").value);
    let newPop = Number(document.getElementById("idCityPopInput").value);
    let currentCitiesArray = Object.values(community.cities);
    if ((newLat < -90) || (newLat > 90)) {
        return alert("Latitude must be a number between -90 and 90");
    } else if (newName == "") {
        return alert("Please Provide City Name");
    } else if ((newLong < -180) || (newLong > 180)) {
        return alert("Longitude must be a number between -180 and 180");
    } else if (currentCitiesArray.filter(el => el.latitude === newLat && el.longitude === newLong).length !== 0) {
        return alert("A City Already Exists with that Latitude and Longitude");
    } else {
        community.createCity(newName, newLat, newLong, newPop, parent);        
    }
    cityChecker();
};

const cardButtons = () => {
    const targetCard = event.target.parentNode
    if (event.target.textContent == "Show") {
        const cardKey = targetCard.getAttribute('key')
        targetCard.children[1].textContent = community.cities[cardKey].show();
    }
    if (event.target.textContent == "Move In") {
        const cardKey = targetCard.getAttribute('key')
        const input = Number(targetCard.children[2].value)
        community.cities[cardKey].movedIn(input);
        serverFunctions.updateServer(community.cities[cardKey]);
        cityChecker();
    }
    if (event.target.textContent == "Move Out") {
        const cardKey = targetCard.getAttribute('key')
        const input = Number(targetCard.children[2].value)
        community.cities[cardKey].movedOut(input);
        serverFunctions.updateServer(community.cities[cardKey]);
        cityChecker();
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
        let deleteServerObj= community.findKey(cardKey);
        serverFunctions.deleteServerCity(deleteServerObj);
        community.deleteCity(cardKey);
        cityChecker();
    }
}


document.getElementById("idCityDisplay").addEventListener('click', cardButtons);
document.getElementById("idCreateCityButton").addEventListener('click', createCity);
document.getElementById("refreshDisplayButton").addEventListener('click', cityChecker);
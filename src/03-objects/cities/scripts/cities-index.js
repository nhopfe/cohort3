import { City, Community } from './classes.js'
import functions from './cities.js'

const community = new Community("The Greater Area");
const parent = document.getElementById("idCityDisplay");
const createCity = () => {
    let newName = document.getElementById("idCityNameInput").value;
    let newLat = document.getElementById("idCityLatInput").value;
    let newLong = document.getElementById("idCityLongInput").value;
    let newPop = document.getElementById("idCityPopInput").value;
    community.createCity(parent, newName, newLat, newLong, newPop);
}






document.getElementById("idCreateCityButton").addEventListener('click', createCity);


import functions from './cities.js'

export class City {
    constructor(name, latitude, longitude, population, key) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        const mtArr = [];
        mtArr.push("Latitude: " + String(this.latitude))
        mtArr.push("Longitude: " + String(this.longitude))
        mtArr.push("Population: " + String(this.population))
        const reducer = (accumulator, currentValue) => accumulator + " " + currentValue;
        return mtArr.reduce(reducer);
    }

    movedIn(num) {
        this.population = this.population + num
        return this.population;
    }

    movedOut(num) {
        this.population = this.population - num
        return this.population;
    }

    howBig() {
        if (this.population >= 1 && this.population <= 100) { return "Hamlet" };
        if (this.population <= 1000) { return "Village" };
        if (this.population <= 20000) { return "Town" };
        if (this.population <= 100000) { return "Large Town" };
        return "City";
    }

    whichSphere() {
        if (this.latitude > 0 && this.latitude <= 90) { return "Northern Hemisphere" };
        if (this.latitude == 0) { return "On the Equator" };
        if (this.latitude >= -90 && this.latitude < 0) { return "Southern Hemisphere" };
        return "Invalid Latitude";
    }
}

export class Community {
    constructor(communityName) {
        this.communityName = communityName;
        this.counter = 0;
        this.cities = {};
    }

    createCity(parent, name, lat, long, pop) {
        this.counter++;
        const a = new City(name, lat, long, pop, this.counter);
        this.cities[`key${this.counter}`] = a;
        functions.createCityDiv(parent, name, this.counter);
    }

    findKey(cardKey) {
        const keyValue = (this.cities[cardKey].key);
        const deleteObj = {"key": keyValue};
        return deleteObj;
    }

    deleteCity(key) {
        delete this.cities[key];
        // console.log(this);
    }

    // mostNorthern() {
    //     const obj = this.cities;
    //      try 'for of' or 'for in'

    //     Object.keys(obj).forEach(function(key) {

    //         // console.log(obj[key])
    //         let biggest = 0;
    //         let next = obj[key];

    //         if (next > biggest) {
    //             next = biggest
    //             console.log(biggest);
    //         }

    //         return biggest;

    //     });
    // }

    // mostSouthern() {
    //     return this.cities.reduce((min, p) => p.latitude < min ? p.latitude : min, this.cities[0].latitude);
    // }
}
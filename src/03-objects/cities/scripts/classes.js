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
        mtArr.push(String(this.name))
        mtArr.push(String(this.latitude))
        mtArr.push(String(this.longitude))
        mtArr.push(String(this.population))
        const reducer = (accumulator, currentValue) => accumulator + " " + currentValue;
        return mtArr.reduce(reducer)
    }

    movedIn(num) {
        this.population = this.population + num
        return this.population
    }

    movedOut(num) {
        this.population = this.population - num
        return this.population
    }

    howBig() {
        if (this.population >= 1 && this.population <= 100) { return "Hamlet" };
        if (this.population <= 1000) { return "Village" };
        if (this.population <= 20000) { return "Town" };
        if (this.population <= 100000) { return "Large Town" };
        return "City"
    }
}

export class Community {
    constructor(communityName) {
        this.communityName = communityName;
        this.counter = 0

    }

    createCity(parent, name, lat, long, pop) {
        this.counter++;
        const a = new City(name, lat, long, pop, this.counter);
        this[`key${this.counter}`] = a;
        functions.createCityDiv(parent, name, lat, long, pop, this.counter)
    }

    deleteCity(key) {
        delete this[key];
        console.log(this);
    }
}
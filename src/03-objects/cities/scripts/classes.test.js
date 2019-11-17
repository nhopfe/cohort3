import { City, Community } from './classes.js'

test('testing City', () => {
    const a = new City("Testville", 49, 0, 500, "key1");
    const cityList = {};
    cityList[a.key] = a;

    expect(cityList.key1.name).toEqual("Testville");
    expect(cityList.key1.latitude).toEqual(49);
    expect(cityList.key1.longitude).toEqual(0);
    expect(cityList.key1.population).toEqual(500);
})

test('testing createCity', () => {
    let myDiv = document.createElement("div");
    const cityList3 = new Community("pittsburge")
    cityList3.createCity(myDiv, "Bobville", 74, 58, 900)

    expect(cityList3.cities.key1.key).toEqual(1);
    expect(cityList3.cities.key1.latitude).toEqual(74);
    expect(cityList3.cities.key1.longitude).toEqual(58);
    expect(cityList3.cities.key1.name).toEqual("Bobville");
    expect(cityList3.cities.key1.population).toEqual(900);
})

test('testing show', () => {
    let myDiv = document.createElement("div");
    const cityList5 = new Community("pittsburge")
    cityList5.createCity(myDiv, "CruellaStevil", 7, 9000, 500)


    expect(cityList5.cities.key1.show()).toEqual("Latitude: 7 Longitude: 9000 Population: 500");
})

test('testing movedIn', () => {
    let myDiv = document.createElement("div");
    const cityList6 = new Community("pittsburge")
    cityList6.createCity(myDiv, "SonicTown", 7, 68, 600)

    expect(cityList6.cities.key1.population).toEqual(600);
    expect(cityList6.cities.key1.movedIn(900)).toEqual(1500);
})

test('testing movedOut', () => {
    let myDiv = document.createElement("div");
    const cityList7 = new Community("pittsburge")
    cityList7.createCity(myDiv, "Testtown", 7, 68, 1000)

    expect(cityList7.cities.key1.population).toEqual(1000);
    expect(cityList7.cities.key1.movedOut(100)).toEqual(900);
})

test('testing howBig', () => {
    let myDiv = document.createElement("div");
    const cityList8 = new Community("pittsburge")
    cityList8.createCity(myDiv, "one", 7, 68, 1)
    cityList8.createCity(myDiv, "two", 7, 68, 200)
    cityList8.createCity(myDiv, "three", 7, 68, 5000)
    cityList8.createCity(myDiv, "four", 7, 68, 20500)
    cityList8.createCity(myDiv, "five", 7, 68, 9999999)

    expect(cityList8.cities.key1.howBig()).toEqual("Hamlet");
    expect(cityList8.cities.key2.howBig()).toEqual("Village");
    expect(cityList8.cities.key3.howBig()).toEqual("Town");
    expect(cityList8.cities.key4.howBig()).toEqual("Large Town");
    expect(cityList8.cities.key5.howBig()).toEqual("City");
})

test('testing whichSphere', () => {
    const a = new City("Testville1", 49, 0, 500, "key1");
    const b = new City("Testville2", 0, 0, 500, "key2");
    const c = new City("Testville3", -49, 0, 500, "key3");
    const d = new City("Testville4", 1000, 0, 500, "key4")
    const cityList = {};
    cityList[a.key] = a;
    cityList[b.key] = b;
    cityList[c.key] = c;
    cityList[d.key] = d;

    expect(cityList.key1.whichSphere()).toEqual("Northern Hemisphere");
    expect(cityList.key2.whichSphere()).toEqual("On the Equator");
    expect(cityList.key3.whichSphere()).toEqual("Southern Hemisphere");
    expect(cityList.key4.whichSphere()).toEqual("Invalid Latitude");
})

test('findKey', () => {
    const myDiv = document.createElement("div");
    const cityList = new Community("NukeTown");
    cityList.createCity(myDiv, "one", 7, 68, 1);
    cityList.createCity(myDiv, "two", 7, 68, 2);
    expect(cityList.findKey("key1")).toEqual({"key": 1});
    expect(cityList.findKey("key2")).toEqual({"key": 2});
})

test('test deleteCity object', () => {
    let myDiv = document.createElement("div");
    const cityList9 = new Community("NukeTown");

    cityList9.createCity(myDiv, "fatboy", 7, 68, 1)
    cityList9.createCity(myDiv, "fatboy", 7, 68, 1)
    expect(cityList9.cities.key1.name).toEqual('fatboy');
    cityList9.deleteCity("key1");
    expect(cityList9.key1).toEqual(undefined);
})

test('test mostNorthern', () => {
    let myDiv = document.createElement("div");
    const cityList = new Community("pittsburge");

    expect(cityList.mostNorthern()).toEqual(undefined);

    cityList.createCity(myDiv, "one", -60, 10, 500)
    cityList.createCity(myDiv, "two", 0, 10, 500)
    cityList.createCity(myDiv, "three", 50, 10, 500)
    let mostNorthernCity = cityList.mostNorthern();

    expect(mostNorthernCity.name).toBe("three");

    cityList.createCity(myDiv, "four", 51, 10, 500)
    mostNorthernCity = cityList.mostNorthern();

    expect(mostNorthernCity.name).toBe("four");
})


test('test mostSouthern', () => {
    let myDiv = document.createElement("div");
    const cityList = new Community("pittsburge");

    cityList.createCity(myDiv, "one", -60, 10, 500)
    cityList.createCity(myDiv, "two", 0, 10, 500)
    cityList.createCity(myDiv, "three", 50, 10, 500)
    let mostSouthernCity = cityList.mostSouthern();

    expect(mostSouthernCity.name).toBe("one");

    cityList.createCity(myDiv, "four", -61, 10, 500)
    mostSouthernCity = cityList.mostSouthern();

    expect(mostSouthernCity.name).toBe("four");
})

test('test totalPopulation', () => {
    let myDiv = document.createElement("div");
    const cityList = new Community("pittsburge");

    cityList.createCity(myDiv, "one", -60, 10, 500)
    cityList.createCity(myDiv, "two", 0, 10, 500)
    cityList.createCity(myDiv, "three", 50, 10, 500)

    expect(cityList.totalPopulation()).toEqual(1500);

    cityList.createCity(myDiv, "four", -61, 10, 500)

    expect(cityList.totalPopulation()).toEqual(2000);
})
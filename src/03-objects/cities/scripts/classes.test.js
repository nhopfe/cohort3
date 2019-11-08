import { City, Community } from './classes.js'
import functions from './cities.js'



test('testing createCityDiv', () => {
    let myDiv = document.createElement("div");
    functions.createCityDiv(myDiv, "TestCity", 50, 100, 25000, 1)
    expect(myDiv.children[0].getAttribute("key")).toBe("key1");
    expect(myDiv.children[0].childElementCount).toBe(8);
})


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


    expect(cityList5.cities.key1.show()).toEqual("CruellaStevil 7 9000 500");
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

test('test deleteCityCard', () => {
    const grandParent = document.createElement("div");
    const parent = document.createElement("div");
    const button = document.createElement("div");
    parent.appendChild(button);
    grandParent.appendChild(parent);
    expect(String(grandParent.childNodes[0])).toEqual("[object HTMLDivElement]");
    functions.deleteCityCard(button);
    expect(grandParent.childNodes[0]).toEqual(undefined);
})

test('test deleteCity object', () => {
    let myDiv = document.createElement("div");
    const cityList9 = new Community("NukeTown");
    cityList9.createCity(myDiv, "fatboy", 7, 68, 1)
    cityList9.createCity(myDiv, "fatboy", 7, 68, 1)
    expect(cityList9.cities.key1.name).toEqual('fatboy');
    // console.log(cityList9)
    cityList9.deleteCity("key1");
    // delete cityList9.key1;
    expect(cityList9.key1).toEqual(undefined);

})
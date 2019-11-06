import { City, Community } from './classes.js'
import functions from './cities.js'

let myDiv = document.createElement("div");

test('testing createCityDiv', () => {    
    functions.createCityDiv(myDiv, "TestCity", 50, 100, 25000, 1)
    expect(myDiv.children[0].getAttribute("key")).toBe("1");
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
    const cityList3 = new Community("pittsburge")
    cityList3.createCity(myDiv, "Bobville", 74, 58, 900)

    expect(cityList3.key1.key).toEqual(1);
    expect(cityList3.key1.latitude).toEqual(74);
    expect(cityList3.key1.longitude).toEqual(58);
    expect(cityList3.key1.name).toEqual("Bobville");
    expect(cityList3.key1.population).toEqual(900);
})


test('testing show', () => {
    const cityList5 = new Community("pittsburge")
    cityList5.createCity(myDiv, "CruellaStevil", 7, 9000, 500)
    

    expect(cityList5.key1.show()).toEqual("CruellaStevil 7 9000 500");
})

test('testing movedIn', () => {
    const cityList6 = new Community("pittsburge")
    cityList6.createCity(myDiv, "SonicTown", 7, 68, 600)
    
    expect(cityList6.key1.population).toEqual(600);
    expect(cityList6.key1.movedIn(900)).toEqual(1500);
})

test('testing movedOut', () => {
    const cityList7 = new Community("pittsburge")
    cityList7.createCity(myDiv, "Butts", 7, 68, 1000)
    
    expect(cityList7.key1.population).toEqual(1000);
    expect(cityList7.key1.movedOut(100)).toEqual(900);
})

test('testing howBig', () => {
    const cityList8 = new Community("pittsburge")
    cityList8.createCity(myDiv, "one", 7, 68, 1)
    cityList8.createCity(myDiv, "two", 7, 68, 200)
    cityList8.createCity(myDiv, "three", 7, 68, 5000)
    cityList8.createCity(myDiv, "four", 7, 68, 20500)
    cityList8.createCity(myDiv, "five", 7, 68, 9999999)
    
    expect(cityList8.key1.howBig()).toEqual("Hamlet");
    expect(cityList8.key2.howBig()).toEqual("Village");
    expect(cityList8.key3.howBig()).toEqual("Town");
    expect(cityList8.key4.howBig()).toEqual("Large Town");
    expect(cityList8.key5.howBig()).toEqual("City");
    
})
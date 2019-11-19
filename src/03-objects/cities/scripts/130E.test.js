import { Community } from './classes.js'

test('130E', () => {
    const myDiv = document.createElement("div");
    const cityList = new Community("TestCommunity");
    cityList.createCity(myDiv, "myCity", 7, 68, 100);
    let myCity = cityList.cities.key1;
    let myFav = myCity;
    
    expect(myCity.population).toEqual(100);
    expect(myFav.population).toEqual(100);

    myCity.movedIn(10);
    expect(myCity.population).toEqual(110);
    expect(myFav.population).toEqual(110);

    myFav.movedOut(60);
    expect(myCity.population).toEqual(50);
    expect(myFav.population).toEqual(50);
})
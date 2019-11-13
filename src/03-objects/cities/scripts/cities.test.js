import functions from './cities.js'

test('testing createCityDiv', () => {
    let myDiv = document.createElement("div");
    functions.createCityDiv(myDiv, "TestCity", 1);

    expect(myDiv.children[0].getAttribute("key")).toBe("key1");
    expect(myDiv.children[0].childElementCount).toBe(9);
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

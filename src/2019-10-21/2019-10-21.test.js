import functions from './2019-10-21'
test('test addCard', () => {
    const myDiv = document.createElement("div");
    functions.addCard(myDiv, 1);
});

// test('test whatCards', () => {
//     const myDiv2 = document.createElement("div");
//     functions.addCard(myDiv2, 1);
//     functions.addCard(myDiv2, 2);
//     functions.addCard(myDiv2, 3);
//     expect(functions.whatCards(myDiv2)).toEqual([1,2,3]);
//     functions.addCard(myDiv2, 4);
//     expect(functions.whatCards(myDiv2)).toEqual([1,2,3,4]);
// });
import cards from './functions.js'

// Working with Cards

test('testing addCard function via defaultAdd', () => {
    const myDiv = document.createElement("div");
    const cardList = myDiv.getElementsByClassName("card");
    cards.defaultAdd(myDiv);
    expect(myDiv.childElementCount).toEqual(1);
    cards.defaultAdd(myDiv);
    expect(myDiv.childElementCount).toEqual(2);
    expect(cardList.length).toBe(2);
    cards.defaultAdd(myDiv);
    /* the following tests for the card name, 
     as well as if the buttons were appended to the cards*/
    expect(cardList[2].textContent).toBe("Card " + 3 + "Add Before" + "Add After" + "Delete");
    expect(cardList[0].textContent).toBe("Card " + 1 + "Add Before" + "Add After" + "Delete");
});

test('testing addBefore function', () => {
    const myDiv2 = document.createElement("div");
    const cardList2 = myDiv2.getElementsByClassName("card");
    cards.defaultAdd(myDiv2);
    cards.addBefore(myDiv2, 1);
    expect(cardList2[0].textContent).toEqual("Card " + 2 + "Add Before" + "Add After" + "Delete");
});
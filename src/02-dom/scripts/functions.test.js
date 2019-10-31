import cards from './workingWithCardsFunctions.js'
import basicDomFuncs from './basicDomFunctions.js'

// Basic DOM
      

describe('Basic DOM tests', () => {
    // beforeEach(() => {
    //     const myBasicDomDiv = document.createElement("div");
    //     const myList = document.createElement("OL");
    //     myBasicDomDiv.append(myList);
    //     const myShowList = document.createElement("INPUT");
    //     myShowList.setAttribute("type", "text");
    //     myBasicDomDiv.append(myShowList);
    //     const myAddListItemToEnd = () => {
    //          let myAddLi = (text) => {
    //              let myLi = document.createElement("li");
    //              myLi.append(text);
    //              myList.append(myLi);
    //          }
    //          let myListChildCount = myList.childElementCount;
    //          myAddLi("Item " + (myListChildCount + 1));
    //      }
    //      myAddListItemToEnd();
    //      myAddListItemToEnd();
    //      myAddListItemToEnd();  
    // });

    test('testing displayItems function', () => {
        const myBasicDomDiv = document.createElement("div");
        const myList = document.createElement("OL");
        myBasicDomDiv.append(myList);
        const myShowList = document.createElement("INPUT");
        myShowList.setAttribute("type", "text");
        myBasicDomDiv.append(myShowList);
        const myAddListItemToEnd = () => {
            let myAddLi = (text) => {
                let myLi = document.createElement("li");
                myLi.append(text);
                myList.append(myLi);
            }
            let myListChildCount = myList.childElementCount;
            myAddLi("Item " + (myListChildCount + 1));
        }
        myAddListItemToEnd();
        myAddListItemToEnd();
        myAddListItemToEnd();
        basicDomFuncs.displayItems(myList, myShowList);
        expect(myShowList.textContent).toBe("Item 1Item 2Item 3");
        myAddListItemToEnd();
        myShowList.textContent = "";
        basicDomFuncs.displayItems(myList, myShowList);
        expect(myShowList.textContent).toBe("Item 1Item 2Item 3Item 4");
    });

    test('testing addLiTagToEnd function', () => {
        const myBasicDomDiv = document.createElement("div");
        const myList = document.createElement("OL");
        myBasicDomDiv.append(myList);
        const myShowList = document.createElement("INPUT");
        myShowList.setAttribute("type", "text");
        myBasicDomDiv.append(myShowList);
        const myAddListItemToEnd = () => {
            let myAddLi = (text) => {
                let myLi = document.createElement("li");
                myLi.append(text);
                myList.append(myLi);
            }
            let myListChildCount = myList.childElementCount;
            myAddLi("Item " + (myListChildCount + 1));
        }
        myAddListItemToEnd();
        myAddListItemToEnd();
        myAddListItemToEnd();
        expect(myList.textContent).toBe("Item 1Item 2Item 3");
        basicDomFuncs.addLiTagToEnd(myList);
        expect(myList.textContent).toBe("Item 1Item 2Item 3Item 4");
    });
});

// Working with Cards

test('testing addCard function via defaultAdd', () => {
    cards.count = 0;
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
    cards.count = 0;
    const myDiv2 = document.createElement("div");
    const cardList2 = myDiv2.getElementsByClassName("card");
    cards.defaultAdd(myDiv2);
    cards.addBefore(myDiv2, cardList2[0]);
    expect(cardList2[0].textContent).toEqual("Card " + 2 + "Add Before" + "Add After" + "Delete");
    cards.addBefore(myDiv2, cardList2[0]);
    expect(cardList2[0].textContent).toEqual("Card " + 3 + "Add Before" + "Add After" + "Delete");
});

test('testing addAfter function', () => {
    cards.count = 0;
    const myDiv3 = document.createElement("div");
    const cardList3 = myDiv3.getElementsByClassName("card");
    cards.defaultAdd(myDiv3);
    cards.addAfter(myDiv3, cardList3[0]);
    expect(cardList3[0].textContent).toEqual("Card " + 1 + "Add Before" + "Add After" + "Delete");
    expect(cardList3[1].textContent).toEqual("Card " + 2 + "Add Before" + "Add After" + "Delete");
    cards.addAfter(myDiv3, cardList3[0]);
    expect(cardList3[1].textContent).toEqual("Card " + 3 + "Add Before" + "Add After" + "Delete");
});

test('testing deleteCard function', () => {
    cards.count = 0;
    const myDiv4 = document.createElement("div");
    const cardList4 = myDiv4.getElementsByClassName("card");
    cards.defaultAdd(myDiv4);
    expect(cardList4[0].id).toBe("1");
    cards.deleteCard(cardList4[0]);
    expect(cardList4[0]).toBe(undefined);
})
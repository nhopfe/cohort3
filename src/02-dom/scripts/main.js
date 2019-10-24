import cards from './functions.js'

// Basic Dom

const domListener = document.getElementById('basicDomContainer2');
const showButton = document.getElementById('basicDomShowButton');
const addButton = document.getElementById('basicDomAddButton');
const showList = document.getElementById('showListField');
let list = document.getElementById('orderedList');

const logParameter = (p1) => {
    console.log(p1);
}

const displayItems = () => {
    // showList.value = [];
    let items = list.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        showList.append(items[i].cloneNode(true));
    }

}

const addLiTagToEnd = () => {
    let addLi = (text) => {
        let li = document.createElement("li");
        li.append(text);
        list.append(li);
    };
    let listChildCount = list.childElementCount;
    addLi("Item " + (listChildCount + 1));
}

domListener.addEventListener('click', logParameter);
showButton.addEventListener('click', displayItems);
addButton.addEventListener('click', addLiTagToEnd);

// Working with Cards Presentation Logic

leftPanel.addEventListener("click", () => {
    // console.log(event.target.textContent);
    switch (event.target.textContent) {
        case "Add Card":
            cards.defaultAdd(leftPanel);
            break;
        case "Add Before":
            cards.addBefore(leftPanel, event.target.parentElement);
            break;
        case "Add After":
            cards.addAfter(leftPanel, event.target.parentElement);
            break;
        case "Delete":
            cards.deleteCard(leftPanel, event.target.parentElement);
            break;
    }

});


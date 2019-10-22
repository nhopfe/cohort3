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

// Working with Cards

const addCard = () => {
    const leftPanel = document.getElementById("leftPanel");
    let divChildCount = leftPanel.childElementCount;
    let newCard = document.createElement("div");
    newCard.className = "card";
    newCard.setAttribute("count", (divChildCount));
    let newCardText = document.createTextNode ("Card" + divChildCount);
    let newCardAddBeforeButton = document.createElement("button");
    newCardAddBeforeButton.textContent = "Add Before";
    newCardAddBeforeButton.addEventListener('click', addBefore);
    let newCardAddAfterButton = document.createElement("button");
    newCardAddAfterButton.textContent = "Add After";
    newCardAddAfterButton.addEventListener('click', addAfter);
    let newCardDeleteButton = document.createElement("button");
    newCardDeleteButton.textContent = "Delete";
    newCard.appendChild(newCardText);
    newCard.appendChild(newCardAddBeforeButton);
    newCard.appendChild(newCardAddAfterButton);
    newCard.appendChild(newCardDeleteButton);
    leftPanel.appendChild(newCard);
}

const addBefore = () => {
    const leftPanel = document.getElementById("leftPanel");
    let divChildCount = leftPanel.childElementCount;
    let newCard = document.createElement("div");
    newCard.className = "card";
    newCard.setAttribute("count", (divChildCount));
    let newCardText = document.createTextNode ("Card" + divChildCount);
    let newCardAddBeforeButton = document.createElement("button");
    newCardAddBeforeButton.textContent = "Add Before";
    newCardAddBeforeButton.addEventListener('click', addBefore);
    let newCardAddAfterButton = document.createElement("button");
    newCardAddAfterButton.textContent = "Add After";
    newCardAddAfterButton.addEventListener('click', addAfter);
    let newCardDeleteButton = document.createElement("button");
    newCardDeleteButton.textContent = "Delete";
    newCard.appendChild(newCardText);
    newCard.appendChild(newCardAddBeforeButton);
    newCard.appendChild(newCardAddAfterButton);
    newCard.appendChild(newCardDeleteButton);
    leftPanel.insertBefore(newCard, ("count", (divChildCount)));
}

const addAfter = () => {
    const leftPanel = document.getElementById("leftPanel");
    const insertAfter = (el, referenceNode) => {
        referenceNode.leftPanel.insertBefore(el, referenceNode.nextSibling);
    }
    let divChildCount = leftPanel.childElementCount;
    let newCard = document.createElement("div");
    let newCardText = document.createTextNode ("Card" + divChildCount);
    newCard.appendChild(newCardText);
    insertAfter(newCard, this);
}

const defaultAddCardButton = document.getElementById("defaultAddCardButton").addEventListener('click', addCard);
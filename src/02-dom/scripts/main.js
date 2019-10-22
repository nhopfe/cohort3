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

leftPanel.addEventListener("click", () => {
    console.log(event.target.textContent);
    switch(event.target.textContent) {
        case "Add Card": cards.defaultAdd();
            break;
        case "Add Before": cards.addBefore(event.target.parentElement);
            break;
        case "Add After": cards.addAfter(event.target.parentElement);
            break;
        case "Delete": cards.deleteCard(event.target.parentElement);
    }

});

const cards = {
    count: 1,
    leftPanel: document.getElementById("leftPanel"),
    addCard: () => {
    // let divChildCount = leftPanel.childElementCount;
    let newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = cards.count;
    // newCard.setAttribute("count ", count);
    let newCardText = document.createTextNode ("Card " + cards.count);
    let newCardAddBeforeButton = document.createElement("button");
    newCardAddBeforeButton.textContent = "Add Before";
    // newCardAddBeforeButton.addEventListener('click', addBefore);
    let newCardAddAfterButton = document.createElement("button");
    newCardAddAfterButton.textContent = "Add After";
    // newCardAddAfterButton.addEventListener('click', addAfter);
    let newCardDeleteButton = document.createElement("button");
    newCardDeleteButton.textContent = "Delete";
    newCard.appendChild(newCardText);
    newCard.appendChild(newCardAddBeforeButton);
    newCard.appendChild(newCardAddAfterButton);
    newCard.appendChild(newCardDeleteButton);
    cards.count++;
    return newCard;
    },

    defaultAdd: () => {
        leftPanel.appendChild(cards.addCard());
    },

    addBefore: (card) => {
       leftPanel.insertBefore(cards.addCard(), card);
    },
    
    addAfter: (card) => {
        leftPanel.insertBefore(cards.addCard(), card.nextSibling);
    },

    deleteCard: (card) => {
        card.remove();
    }
};
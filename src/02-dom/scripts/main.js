import cards from './workingWithCardsFunctions.js'
import basicDomFuncs from './basicDomFunctions.js'

// Basic Dom

basicDomContainer2.addEventListener("click", (p1) => {
    console.log(p1);
    const domList = document.getElementById('orderedList');
    const showDomList = document.getElementById('showListField');
    switch(event.target.textContent) {
        case "Show":
            showDomList.textContent = "";
            basicDomFuncs.displayItems(domList, showDomList);
            break;
        case "Add":
            basicDomFuncs.addLiTagToEnd(domList);
            break;
    }
})

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
            cards.deleteCard(event.target.parentElement);
            break;
    }

});


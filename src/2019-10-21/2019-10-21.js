const functions = {
    addCard: (node, counter) => {
        // node.textContent = "I am in addCard";
        let newCard = document.createElement("div");
        // let cardText = document.createTextNode('Card' + counter.toString());
        // newCard.appendChild(cardText);
        newCard.setAttribute("class", "card");
        node.appendChild(newCard);
        // newCard.classList.add("card");
        newCard.setAttribute("counter", counter);
        newCard.textContent = "Card " + counter;
        // newCard.className = card;
    },
    whatCards: (node) => {
        // loop through DOM. then add 
        let cardsArray = [];
        // node.forEach(card => {

        // }
    },
};

export default functions;
const cards = {
    count: 1,
    addCard: () => {
        let newCard = document.createElement("div");
        newCard.className = "card";
        newCard.id = cards.count;
        let newCardText = document.createTextNode("Card " + cards.count);
        let newCardAddBeforeButton = document.createElement("button");
        newCardAddBeforeButton.textContent = "Add Before";
        let newCardAddAfterButton = document.createElement("button");
        newCardAddAfterButton.textContent = "Add After";
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

export default cards;
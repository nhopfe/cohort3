const cards = {
    count: 0,
    addCard: () => {
        cards.count++;
        const newCard = document.createElement("div");
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
        return newCard;
    },

    defaultAdd: (panel) => {
        panel.appendChild(cards.addCard());
    },

    addBefore: (panel, card) => {
        panel.insertBefore(cards.addCard(), card);
    },

    addAfter: (panel, card) => {
        panel.insertBefore(cards.addCard(), card.nextSibling);
    },

    deleteCard: (card) => {
        card.remove();
    }
};

export default cards;
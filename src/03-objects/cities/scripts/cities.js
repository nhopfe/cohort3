const functions = {

    createCityDiv: (parent, name, latitude, longitude, population, key) => {
        const newCityCard = document.createElement("div");
        newCityCard.id = `id-${key}`.toLowerCase();
        newCityCard.setAttribute("class", "city-card");
        newCityCard.setAttribute("key", `key${key}`);
        parent.appendChild(newCityCard);

        const newSpanName = document.createElement("span");
        newSpanName.setAttribute("class", "city-name");
        newSpanName.textContent = name;
        newCityCard.appendChild(newSpanName);

        const newSpanShow = document.createElement("span");
        newSpanShow.setAttribute("class", "city-show");
        newCityCard.appendChild(newSpanShow);

        const newInput = document.createElement("input");
        newInput.type = "number";
        newInput.id = `id-${key}-input`;
        newInput.setAttribute("class", "city-input");
        newCityCard.appendChild(newInput);

        const newShowButton = document.createElement("button");
        newShowButton.textContent = "Show";
        newShowButton.id = `id-${key}-show-button`;
        newShowButton.setAttribute("class", "show-button city-button");
        newCityCard.appendChild(newShowButton);

        const newMoveInButton = document.createElement("button");
        newMoveInButton.textContent = "Move In";
        newMoveInButton.id = `id-${key}-move-in-button`;
        newMoveInButton.setAttribute("class", "move-in-button city-button");
        newCityCard.appendChild(newMoveInButton);

        const newMoveOutButton = document.createElement("button");
        newMoveOutButton.textContent = "Move Out";
        newMoveOutButton.id = `id-${key}-move-out-button`;
        newMoveOutButton.setAttribute("class", "move-out-button city-button");
        newCityCard.appendChild(newMoveOutButton);

        const newHowBigButton = document.createElement("button");
        newHowBigButton.textContent = "How Big";
        newHowBigButton.id = `id-${key}-how-big-button`;
        newHowBigButton.setAttribute("class", "how-big-button city-button");
        newCityCard.appendChild(newHowBigButton);

        const newDeleteButton = document.createElement("button");
        newDeleteButton.textContent = "Delete City";
        newDeleteButton.id = `id-${key}-delete-button`;
        newDeleteButton.setAttribute("class", "delete-button city-button");
        newCityCard.appendChild(newDeleteButton);
    },

    deleteCityCard: (button) => {
        return button.parentNode.parentNode.removeChild(button.parentNode);
    }
};

export default functions;
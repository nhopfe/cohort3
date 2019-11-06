const functions = {

    createCityDiv: (parent, name, latitude, longitude, population, key) => {
        const newCityCard = document.createElement("div");
        newCityCard.id = `id-${key}`.toLowerCase();
        newCityCard.setAttribute("class", "city-card");
        newCityCard.setAttribute("key", key);
        parent.appendChild(newCityCard);

        const newSpanName = document.createElement("span");
        newSpanName.setAttribute("class", "city-name");
        newSpanName.textContent = name;
        newCityCard.appendChild(newSpanName);

        const newSpanLatitude = document.createElement("span");
        newSpanLatitude.setAttribute("class", "city-latitude");
        newSpanLatitude.textContent = Number(latitude);
        newCityCard.appendChild(newSpanLatitude);

        const newSpanLongitude = document.createElement("span");
        newSpanLongitude.setAttribute("class", "city-longitude");
        newSpanLongitude.textContent = Number(longitude);
        newCityCard.appendChild(newSpanLongitude);

        const newSpanPopulation = document.createElement("span");
        newSpanPopulation.setAttribute("class", "city-population");
        newSpanPopulation.textContent = Number(population);
        newCityCard.appendChild(newSpanPopulation);

        const newInput = document.createElement("input");
        newInput.type = "number";
        newInput.id = `id-${key}-input`;
        newInput.setAttribute("class", "city-input");
        newCityCard.appendChild(newInput);

        const newMoveInButton = document.createElement("button");
        newMoveInButton.textContent = "Move In";
        newMoveInButton.id = `id-${key}-move-in-button`;
        newMoveInButton.setAttribute("class", "move-in-button city-button");
        newCityCard.appendChild(newMoveInButton);

        const newMoveOutButton = document.createElement("button");
        newMoveOutButton.textContent = "Move Out";
        newMoveOutButton.id = `id-${key}-move-out-button`;
        newMoveOutButton.setAttribute("class","move-out-button city-button");
        newCityCard.appendChild(newMoveOutButton);

        const newDeleteButton = document.createElement("button");
        newDeleteButton.textContent = "Delete City";
        newDeleteButton.id = `id-${key}-delete-button`;
        newDeleteButton.setAttribute("class","delete-button city-button");
        newCityCard.appendChild(newDeleteButton);
    },

        deletecityCard: (button) => {
            return button.parentNode.parentNode.removeChild(button.parentNode);
        }
};

export default functions;
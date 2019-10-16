const domListener = document.getElementById('basicDomContainer2');
const showButton = document.getElementById('basicDomShowButton');
const addButton = document.getElementById('basicDomAddButton');
let list = document.getElementById('orderedList');

const logParameter = (p1) => {
    console.log(p1);
}

const displayItems = () => {
    let items = list.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}

const addLiTagToEnd = () => {
    let addLi = (text) => {
        let li = document.createElement("li");
        li.append(text);
        list.append(li);
    };
    addLi("test");
}




domListener.addEventListener('click', logParameter);
showButton.addEventListener('click', displayItems);
addButton.addEventListener('click', addLiTagToEnd);
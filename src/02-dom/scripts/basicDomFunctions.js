const basicDomFuncs = {
    displayItems: (list, showList) => {
        let items = list.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            showList.append(items[i].cloneNode(true));
        }
    },
    addLiTagToEnd: (list) => {
        let addLi = (text) => {
            let li = document.createElement("li");
            li.append(text);
            list.append(li);
        }
        let listChildCount = list.childElementCount;
        addLi("Item " + (listChildCount + 1));
    }
}

export default basicDomFuncs;
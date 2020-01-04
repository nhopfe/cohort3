export class LifoOrFifoParent {
    constructor() {
        this.list = ["jellyroll", "key lime pie", "ladyfingers", "lemon bars", "macaroons", 
        "pumpkin pie", "scones", "snickerdoodles", "truffles"];
    }
   
    add(listItem) {
        this.list.push(listItem);
        return listItem;
    }
};

export class Lifo extends LifoOrFifoParent {
    constructor() {
        super();
    }

    remove() {
        const removedItem = this.list.pop();
        return removedItem;
    }

    nextInLine() {
        return this.list[this.list.length -1];
    }
};

export class Fifo extends LifoOrFifoParent {
    constructor() {
        super();
    }

    remove() {
        const removedItem = this.list.shift();
        return removedItem;
    }

    nextInLine() {
        return this.list[0];
    }

    lastAdded() {
        return this.list[this.list.length -1];
    }
};

export class LifoFifoItemList {
    constructor() {
        this.list = ["almond cookie", "angel food cake", "apple crisp", 
        "apple pie", "banana split", "black forest cake", "blueberry muffin", 
        "brownie", "carrot cake", "cheesecake", "cinnamon roll", "cupcake", 
        "doughnut", "eclair", "fruit cake", "fudge", "gingerbread", "gingersnaps"];
    }

    add(listItem) {
        this.list.push(listItem);
        return listItem;
    }

    remove() {
        const removedItem = this.list.shift();
        return removedItem;
    }

    nextInLine() {
        return this.list[0];
    }
};
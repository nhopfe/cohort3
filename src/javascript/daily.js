// Start of More Array Work Daily for 2019, 10, 16-17

export const sliceExample = (p1) => {
        let defaultArray = [1, 2, 3];
        let newArray = [];
        newArray = defaultArray.slice(p1);
        return newArray;
}

export const spliceExample = (a, b) => {
        let defaultArray = [1, 2, 3];
        defaultArray.splice(a, 0, b);
        return defaultArray;
}

export const forEachExample = (a, b, c) => {
        let defaultArray = [a, b, c];
        let newArray = [];
        defaultArray.forEach((num) => { newArray.push(num)});
        return newArray;
}

export const mapExample = (p1) => {
        let defaultArray = [1, 2, 3];
        let newArray = [];
        const mapArr = defaultArray.map(x => x * p1);
        newArray = mapArr;
        return newArray;
}

export const reduceExample = (p1) => {
        let defaultArray = [1, 2, 3];
        let reducer = (accumulator, num) => accumulator + num;
        return defaultArray.reduce(reducer, p1);
}

export const filterExample = (p1) => {
        let defaultArray = ["hi", "hello", "pleasedToMeetYou"];
        let newArray = defaultArray.filter(num => num.length < p1);
        return newArray;
}

export const sortExample = (a, b, c) => {
        let defaultArray = [a, b, c];
        defaultArray.sort((x, y) => x - y);
        return defaultArray;
}

// End of More Array Work Daily for 2019, 10, 16-17

export const assertEquals = (a, b) => {
        if (a === b) return true;
        if (a !== b) console.log("*** the two values are not the same: \n   p1--> " + a + "\n   p2--> " + b);
        return false;
}

export const makeEmailArr = (arr) => {
        return arr[0].toLowerCase() + "." + arr[1].toLowerCase() + "@evolveu.ca";
}

export const makeEmailObj = (obj) => {
        return obj.fname.toLowerCase() + "." + obj.lname.toLowerCase() + "@evolveu.ca";
}

export const exampleForLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let i;
        for (i = 0; i < defaultArray.length ; i++) {
                newArray[i] = defaultArray[i];
        }
        return newArray;
}

export const exampleWhileLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let i = 0;
        while (i < defaultArray.length) {
                newArray[i] = defaultArray[i];
                i++;
        }
        return newArray;
}

export const exampleDoWhileLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let i = 0;
        do {newArray[i] = defaultArray[i]; i++;}
        while (i < defaultArray.length);
        return newArray;
}

export const exampleForInLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let i;
        for (i in defaultArray) {
                newArray[i] = defaultArray[i];
        }
        return newArray;
}

export const exampleForOfLoop = (a, b, c) => {
        const defaultArray = [a, b, c];
        let newArray = [];
        let x;
        for (x of defaultArray) {
                newArray.push(x);
        }
        return newArray;
}
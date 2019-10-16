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
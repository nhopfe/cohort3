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
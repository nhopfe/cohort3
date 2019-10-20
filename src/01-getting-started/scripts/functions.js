const functions = {

    size: (num) => {
        if (num < 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
    },

    // myCalculator

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },

    // Canadian Taxes

    taxes: (taxableAmount) => {
        const firstBracket = 47630;
        const secondBracket = 95259;
        const thirdBracket = 147667;
        const fourthBracket = 210371;
        const frstBrckTaxes = firstBracket * .15;
        const scndBrckTaxes = (secondBracket - firstBracket) * .205;
        const thrdBrckTaxes = (thirdBracket - secondBracket) * .26;
        const frthBrckTaxes = (fourthBracket - thirdBracket) * .29;
        if (taxableAmount < firstBracket)
            return +(Math.round((taxableAmount * .15) + "e+2") + "e-2");
        if (taxableAmount > firstBracket && taxableAmount < secondBracket) {
            let remainder = taxableAmount - firstBracket;
            return +(Math.round(((remainder * .205) + (firstBracket * .15)) + "e+2") + "e-2");
        }
        if (taxableAmount > secondBracket && taxableAmount < thirdBracket) {
            let remainder = taxableAmount - secondBracket;
            return +(Math.round((remainder * .26) + scndBrckTaxes + frstBrckTaxes + "e+2") + "e-2");
        }
        if (taxableAmount > thirdBracket && taxableAmount < fourthBracket) {
            let remainder = taxableAmount - thirdBracket;
            return +(Math.round((remainder * .29) + thrdBrckTaxes + scndBrckTaxes + frstBrckTaxes + "e+2")
                + "e-2");
        }
        let remainder = taxableAmount - fourthBracket;
        return +(Math.round((remainder * .33) + frthBrckTaxes + thrdBrckTaxes + scndBrckTaxes + frstBrckTaxes
            + "e+2") + "e-2");
    },

    // Working With Arrays
    
    workingWithArraysArray: []
    ,
    workingWithArraysAdd: (num) => {
        let p1 = typeof (num);
        if (p1 === "number") {
            functions.workingWithArraysArray.push(num);
            return num + " has been added to the array";
        }
        return "Input is not a valid number";
    },

    workingWithArraysShow: () => {
        return functions.workingWithArraysArray.toString();
    },

    workingWithArraysTotal: () => {
        return functions.workingWithArraysArray.reduce((a, b) => a + b, 0);
    },

    workingWithArraysClear: () => {
        return functions.workingWithArraysArray = [];
    },

    // Working with Dictionaries

    workingWithDictionaries: {
        'AB': 'Alberta',
        'NL': 'Newfoundland and Labrador',
        'PE': 'Prince Edward Island',
        'NS': 'Nova Scotia',
        'NB': 'New Brunswick',
        'QC': 'Quebec',
        'ON': 'Ontario',
        'MB': 'Manitoba',
        'SK': 'Saskatchewan',
        'BC': 'British Columbia',
        'YK': 'Yukon',
        'NT': 'Northwest Territories',
        'NU': 'Nunavut'
    },

    dictionaryLookup: (abb) => {
        return functions.workingWithDictionaries[abb];
    }
};

export default functions;

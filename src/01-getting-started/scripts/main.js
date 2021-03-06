import functions from './functions.js';
// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// MyCalculator Buttons

addButton.addEventListener('click', (() => {
    output.textContent = functions.add((Number(input1.value)), (Number(input2.value)));
}));

subtractButton.addEventListener('click', (() => {
    output.textContent = functions.subtract((Number(input1.value)), (Number(input2.value)));
}));

multiplyButton.addEventListener('click', (() => {
    output.textContent = functions.multiply((Number(input1.value)), (Number(input2.value)));
}));

divideButton.addEventListener('click', (() => {
    output.textContent = functions.divide((Number(input1.value)), (Number(input2.value)));
}));

// Canadian Taxes Button

cndTaxButton.addEventListener('click', (() => {
    cndTaxOutput.textContent = functions.taxes(Number(cndTaxInput.value));
}));

// Working With Arrays

workingWithArraysAddButton.addEventListener('click', (() => {
    workingWithArraysMessageArea.textContent = functions.workingWithArraysAdd(Number(workingWithArraysInput.value));
    workingWithArraysInput.value = "";
}));

workingWithArraysShowButton.addEventListener('click', (() => {
    workingWithArraysMessageArea.textContent = functions.workingWithArraysShow();
}));

workingWithArraysTotalButton.addEventListener('click', (() => {
    workingWithArraysMessageArea.textContent = functions.workingWithArraysTotal();
}));

workingWithArraysClearButton.addEventListener('click', (() => {
    functions.workingWithArraysClear();
    workingWithArraysMessageArea.textContent = "Empty Array";
}));

// Working with Dictionaries

dictionaryLookupButton.addEventListener('click', (() => {
    workingWithDictionariesMessageArea.textContent = functions.dictionaryLookup(String(workingWithDictionariesInput.value));
}));
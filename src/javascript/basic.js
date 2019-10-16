console.log("Hello World from basic.js")
const input = document.getElementById("input");
const printResult = document.getElementById ("textSize");
const pageHeading = document.getElementById("pageHeading");
const originalHeading = pageHeading.textContent;

const onButtonClick = () => {
    let userInput = Number(input.value);
    let sizeResult = size (userInput);
    printResult.textContent = sizeResult;
}

const button1 = document.getElementById("button1").addEventListener("click", onButtonClick);

const size = (num) => {
    if (num < 10) {
        return "small";
    } else if (num < 20) {
        return "medium";
    } else {
        return "large";
    }
}

const mouseOverHeading = () => {
    event.target.style.color= randomColors();
    event.target.textContent="Canada";
}

const randomColors = () => { 
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const resetHeading = () => {
    event.target.style.color="";
    event.target.textContent= originalHeading;
}

pageHeading.addEventListener("mouseover", mouseOverHeading)
pageHeading.addEventListener("mouseleave", resetHeading)

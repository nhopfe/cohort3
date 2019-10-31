import functions from './functions.js'

let buttonClick = () => {
    return functions.dummy();
}

document.getElementById("testButton").addEventListener('click', buttonClick);
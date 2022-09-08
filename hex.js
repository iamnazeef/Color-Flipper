const button = document.getElementById('button')
const bgColor = document.getElementById('color')
const simple = document.getElementById('simple')
const hex = document.getElementById('hex')
const logo = document.getElementById('logo')    //DOM ACCESSING
const colorCode = document.getElementById('color-code')

function active() {
    hex.style.backgroundColor = 'red'
}

active()  //ACTIVE SESSION INDICATOR

let previousColor = null; // VARIABLE TO STORE PREVIOUS COLOR AND PREVENT REPEATITION

//BUTTON FUNCTION
button.onclick = () => {

    //COLOR CODE MAKER
    let tempColor = Math.floor(Math.random() * 16777215).toString(16);

    //COLOR REPEATITION PREVENTER
    while (previousColor == tempColor) {
        tempColor = Math.floor(Math.random() * 16777215).toString(16);
    }

    //COLOR CHANGERS
    document.body.style.backgroundColor = '#' + tempColor   //BG COLOR CHANGER
    bgColor.textContent = '#' + tempColor   //COLOR CODE DISPLAYING

    //CONDITION TO CHANGE CONTENTS COLOR TO WHITE IF BG COLOR IS BLACK
    if (tempColor != '000000') {
        button.style.backgroundColor = '#' + tempColor
        simple.style.color = '#000000'
        hex.style.color = '#000000'
        logo.style.color = '#000000'
        colorCode.style.color = '#000000'
    } else {
        button.style.backgroundColor = '#FFFFFF'
        simple.style.color = '#FFFFFF'
        hex.style.color = '#FFFFFF'
        logo.style.color = '#FFFFFF'
        colorCode.style.color = '#FFFFFF'

    }

    //VARIABLE STORING COLOR
    previousColor = tempColor
}
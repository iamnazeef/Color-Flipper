const button = document.getElementById('button')
const bgColor = document.getElementById('color')
const simple = document.getElementById('simple')
const hex = document.getElementById('hex')
const logo = document.getElementById('logo')    //DOM ACCESSING
const colorCode = document.getElementById('color-code')

function active() {
    simple.style.backgroundColor = 'red'
}

active()    //ACTIVE SESSION INDICATOR

let colorBase = ['800000', 'FF0000', 'FFA500', 'FFFF00', '808000', '008000', '800080', 'FF00FF', '00FF00', '008080', '00FFFF', '0000FF', '000080', '000000', '808080', 'COCOCO', 'FFFFFF']  //COLOR ARRAY

let previousColor = null; // VARIABLE TO STORE PREVIOUS COLOR AND PREVENT REPEATITION

//BUTTON FUNCTION
button.onclick = () => {

    //COLOR CODE SELECTOR
    let tempColor = Math.floor(Math.random() * colorBase.length)

    //COLOR REPEATITION PREVENTER
    while (previousColor == tempColor) {
        tempColor = Math.floor(Math.random() * colorBase.length)
    }

    //COLOR CHANGERS
    document.body.style.backgroundColor = '#' + colorBase[tempColor]    //BG COLOR CHANGER
    bgColor.textContent = '#' + colorBase[tempColor]    //COLOR CODE DISPLAYING

    //CONDITION TO CHANGE CONTENTS COLOR TO WHITE IF BG COLOR IS BLACK
    if (colorBase[tempColor] == '000000') {
        button.style.backgroundColor = '#FFFFFF'
        simple.style.color = '#FFFFFF'
        hex.style.color = '#FFFFFF'
        logo.style.color = '#FFFFFF'
        colorCode.style.color = '#FFFFFF'
    } else {
        button.style.backgroundColor = '#' + colorBase[tempColor]
        simple.style.color = '#000000'
        hex.style.color = '#000000'
        logo.style.color = '#000000'
        colorCode.style.color = '#000000'
    }

    //VARIABLE STORING COLOR
    previousColor = tempColor
}
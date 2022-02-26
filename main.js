let gomb1 = document.getElementById('1')
let gomb2 = document.getElementById('2')
let gomb3 = document.getElementById('3')
let gomb4 = document.getElementById('4')
let gomb5 = document.getElementById('5')
let gomb6 = document.getElementById('6')
let gomb7 = document.getElementById('7')
let gomb8 = document.getElementById('8')
let gomb9 = document.getElementById('9')
let btn1 = ""
let btn2 = ""
let btn3 = ""
let btn4 = ""
let btn5 = ""
let btn6 = ""
let btn7 = ""
let btn8 = ""
let btn9 = ""
let xVagyKor = "O"

function gombKikapcs() {
    gomb1.disabled = true
    gomb2.disabled = true
    gomb3.disabled = true
    gomb4.disabled = true
    gomb5.disabled = true
    gomb6.disabled = true
    gomb7.disabled = true
    gomb8.disabled = true
    gomb9.disabled = true
}

function nyertes(nyertes){
    /*VÍZSZINTESEN ELLENŐRZÉS*/
    if (btn1 == nyertes && btn2 == nyertes && btn3 == nyertes) {
        alert(nyertes + " nyert!")
        gombKikapcs()
    } else if (btn4 == nyertes && btn5 == nyertes && btn6 == nyertes) {
        alert(nyertes + " nyert!")
        gombKikapcs()
    } else if (btn7 == nyertes && btn8 == nyertes && btn9 == nyertes) {
        alert(nyertes + " nyert!")
        gombKikapcs()
    }
    /*FÜGGŐLEGES ELLENŐRZÉS*/
    if (btn1 == nyertes && btn4 == nyertes && btn7 == nyertes) {
        alert(nyertes + " nyert!")
        gombKikapcs()
    } else if (btn2 == nyertes && btn5 == nyertes && btn8 == nyertes) {
        alert(nyertes + " nyert!")
        gombKikapcs()
    } else if (btn3 == nyertes && btn6 == nyertes && btn9 == nyertes) {
        alert(nyertes + " nyert!")
        gombKikapcs()
    }
    /*KERESZTBE ELLENŐRZÉS*/
    if (btn1 == nyertes && btn5 == nyertes && btn9 == nyertes) {
        alert(nyertes + " nyert!")
        gombKikapcs()
    } else if (btn7 == nyertes && btn5 == nyertes && btn3 == nyertes) {
        alert(nyertes + " nyert!")
        gombKikapcs()
    }
}

window.gombNyomas = function (szam){ 
    switch (szam) {
        case 1:
            gomb1.innerHTML = xVagyKor
            gomb1.disabled = true
            btn1 = xVagyKor
            break
        case 2:
            gomb2.innerHTML = xVagyKor
            gomb2.disabled = true
            btn2 = xVagyKor
            break
        case 3:
            gomb3.innerHTML = xVagyKor
            gomb3.disabled = true
            btn3 = xVagyKor
            break
        case 4:
            gomb4.innerHTML = xVagyKor
            gomb4.disabled = true
            btn4 = xVagyKor
            break
        case 5:
            gomb5.innerHTML = xVagyKor
            gomb5.disabled = true
            btn5 = xVagyKor
            break
        case 6:
            gomb6.innerHTML = xVagyKor
            gomb6.disabled = true
            btn6 = xVagyKor
            break
        case 7:
            gomb7.innerHTML = xVagyKor
            gomb7.disabled = true
            btn7 = xVagyKor
            break
        case 8:
            gomb8.innerHTML = xVagyKor
            gomb8.disabled = true
            btn8 = xVagyKor
            break
        case 9:
            gomb9.innerHTML = xVagyKor
            gomb9.disabled = true
            btn9 = xVagyKor
            break
    }
    nyertes(xVagyKor)
    if (xVagyKor === "O") {
        xVagyKor = "X"
    } else {
        xVagyKor = "O"
    }
}

window.ujJatek = function () {
    gomb1.disabled = false
    gomb1.innerHTML = ""
    gomb2.disabled = false
    gomb2.innerHTML = ""
    gomb3.disabled = false
    gomb3.innerHTML = ""
    gomb4.disabled = false
    gomb4.innerHTML = ""
    gomb5.disabled = false
    gomb5.innerHTML = ""
    gomb6.disabled = false
    gomb6.innerHTML = ""
    gomb7.disabled = false
    gomb7.innerHTML = ""
    gomb8.disabled = false
    gomb8.innerHTML = ""
    gomb9.disabled = false
    gomb9.innerHTML = ""
    xVagyKor = "O"
}

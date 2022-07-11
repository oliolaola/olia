alert(" привет, это игра удагадай цифру от 1 до 10, которую загадал комьпьютер")

let min = 1
let max = 10

function ChooseTheNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let num = ChooseTheNumber(min, Max)
let ans = prompt("RightTheNumber")
while (1) {
    if (prompt("rightTheNumder") == num) {
        alert("right")
        break
    } else {
        alert("false")
    }
} 
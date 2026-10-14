let homeScore = document.getElementById("home-score")
let GuestScore = document.getElementById("guest-score")
let clearButton = document.getElementById("clearBtn") 

let home = 0
let away = 0

//HOME
function HomeaddOne() {
    home += 1
    homeScore.textContent = home
}
function HomeaddTwo() {
    home += 2
    homeScore.textContent = home
}
function HomeaddThree() {
    home += 3
    homeScore.textContent = home
}
//GUEST
function GuestaddOne() {
    away += 1
    GuestScore.textContent = away
}
function GuestaddTwo() {
    away += 2
    GuestScore.textContent = away
}
function GuestaddThree() {
    away += 3
    GuestScore.textContent = away
}


//CLEAR BUTTON

function clearScore() {
    GuestScore.textContent = 0
    homeScore.textContent = 0
    away = 0
    home = 0
}
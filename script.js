let homeScore = document.getElementById("home-score")
let GuestScore = document.getElementById("guest-score")
let clearButton = document.getElementById("clearBtn") 

let score = 0

//HOME
function HomeaddOne() {
    score += 1
    homeScore.textContent = score
}
function HomeaddTwo() {
    score += 2
    homeScore.textContent = score
}
function HomeaddThree() {
    score += 3
    homeScore.textContent = score
}
//GUEST
function GuestaddOne() {
    score += 1
    GuestScore.textContent = score
}
function GuestaddTwo() {
    score += 2
    GuestScore.textContent = score
}
function GuestaddThree() {
    score += 3
    GuestScore.textContent = score
}


//CLEAR BUTTON

function clearScore() {
    GuestScore.textContent = 0
    homeScore.textContent = 0
    score = 0
}
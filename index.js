let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


let home_initial = 0
let guest_initial = 0

function homeplus1() {
    home_initial += 1
    homeScore.textContent = home_initial
}

function homeplus2() {
    home_initial += 2
    homeScore.textContent = home_initial
}

function homeplus3() {
    home_initial += 3
    homeScore.textContent = home_initial
}

function guestplus1() {
    guest_initial += 1
    guestScore.textContent = guest_initial
}

function guestplus2() {
    guest_initial += 2
    guestScore.textContent = guest_initial
}

function guestplus3() {
    guest_initial += 3
    guestScore.textContent = guest_initial
}

function resetgame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}
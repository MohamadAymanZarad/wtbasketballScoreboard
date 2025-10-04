homeScore = 0
guestScore = 0

// This function adds 1 point to the home score and updates the display
function addHomeScore1() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

// This function adds 2 points to the home score and updates the display
function addHomeScore2() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore ;
}

// This function adds 3 points to the home score and updates the display
function addHomeScore3() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}

// This function adds 1 point to the guest score and updates the display
function addGuestScore1() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}

// This function adds 2 points to the guest score and updates the display
function addGuestScore2() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}

// This function adds 3 points to the guest score and updates the display
function addGuestScore3() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}

// This function resets the scores to 0 and updates the display
function resetScore() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
}
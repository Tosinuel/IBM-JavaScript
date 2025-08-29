let count = 0; // Initialize the followers count to 0

// Function to update the displayed count in the HTML
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Show the current count
}

// Function to check if the count has reached specific milestones and show alerts
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

// Function to increase the followers count when the button is clicked
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Update the displayed count
    checkCountValue(); // Check for milestone messages
}

// Function to reset the followers count to 0 and show an alert
function resetCount() {
    count = 0; // Reset count to zero
    displayCount(); // Update the displayed count
    alert("Followers count has been reset."); // Show alert message
}
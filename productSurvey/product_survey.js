// Function to collect user input and display feedback
function submitFeedback() {
    // Get current values from input fields
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperince').value; // Get user experience

    // Display user input in the feedback section
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperienceOutput').innerHTML = experience; // Show experience
    document.getElementById('userInfo').style.display = 'block';

    // Show thank you alert after feedback is submitted
    alert('Thank you for your valuable feedback');
}

// Attach event listener to the submit button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Allow submitting feedback with Enter key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
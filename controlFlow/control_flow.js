// Defining variables and if else statement
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log(accessLevel);

// Defining variables and nested if

let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

// Defining variables and switch statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

// Use ternary operator for isAuth
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Authorization logic for Dietary Services
let personRole = "Enrolled Member"; // Change this value to test different roles
let eligibilityMessage;

switch (personRole) {
    case "Employee":
        eligibilityMessage = "You are authorized to access Dietary Services.";
        break;
    case "Enrolled Member":
        eligibilityMessage = "You are authorized to access Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        eligibilityMessage = "You are authorized to have partial access to Dietary Services.";
        break;
    case "Non-Subscriber":
        eligibilityMessage = "Please enroll or subscribe first to avail Dietary Services.";
        break;
    default:
        eligibilityMessage = "Role not recognized. Please contact support.";
}

console.log("Eligibility:", eligibilityMessage);

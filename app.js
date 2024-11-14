// Function to show the registration page
function showRegister() {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("register-page").style.display = "block";
}

// Function to show the login page
function showLogin() {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("login-page").style.display = "block";
}

// Function to handle user registration
function register() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Store user information in localStorage
    localStorage.setItem("user-username", username);
    localStorage.setItem("user-email", email);
    localStorage.setItem("user-password", password);

    alert("Registration successful! Please login now.");
    showLogin();
}

// Function to handle user login
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedEmail = localStorage.getItem("user-email");
    const storedPassword = localStorage.getItem("user-password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        localStorage.setItem("login-time", new Date().toLocaleString());
        document.getElementById("login-page").style.display = "none";
        document.getElementById("mood-tracking").style.display = "block";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Function to handle mood submission
function submitMood() {
    const mood = document.getElementById("mood-selection").value;
    const reason = document.getElementById("mood-reason").value;

    // Store the mood and reason in localStorage
    localStorage.setItem("current-mood", mood);
    localStorage.setItem("current-reason", reason);

    document.getElementById("mood-tracking").style.display = "none";
    document.getElementById("recommendations").style.display = "block";
}

// Function to show notifications page
function showNotifications() {
    document.getElementById("recommendations").style.display = "none";
    document.getElementById("notifications").style.display = "block";
}

// Function to show user history with mood and reason
function showHistory() {
    const username = localStorage.getItem("user-username");
    const loginTime = localStorage.getItem("login-time");
    const mood = localStorage.getItem("current-mood");
    const reason = localStorage.getItem("current-reason");

    document.getElementById("username-display").textContent = username;
    document.getElementById("login-time").textContent = loginTime;
    document.getElementById("user-mood").textContent = mood || 'No mood recorded';
    document.getElementById("user-reason").textContent = reason || 'No reason provided';

    document.getElementById("notifications").style.display = "none";
    document.getElementById("history").style.display = "block";
}

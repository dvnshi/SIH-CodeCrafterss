function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var schoolName = document.getElementById("schoolName").value;
    var age = document.getElementById("age").value;

    var storedUser = localStorage.getItem(username);

    if (storedUser && JSON.parse(storedUser).password === password) {
        document.getElementById("loginMessage").innerHTML = "Successfully Logged In!";
        document.getElementById("homeButton").style.display = "inline"; // Display home button on successful login
    } else {
        document.getElementById("loginMessage").innerHTML = "Incorrect Username or Password";
        document.getElementById("homeButton").style.display = "none"; // Hide home button if login fails
    }
}

function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;

    var existingUser = localStorage.getItem(username);

    if (!existingUser) {
        var newUser = { username: username, password: password };
        localStorage.setItem(username, JSON.stringify(newUser));
        document.getElementById("signupMessage").innerHTML = "Successfully Registered!";
    } else {
        document.getElementById("signupMessage").innerHTML = "Username already exists!";
    }
}

function toggleForm(formId) {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    if (formId === "loginForm") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }

    // Clear messages
    document.getElementById("loginMessage").innerHTML = "";
    document.getElementById("signupMessage").innerHTML = "";
    document.getElementById("homeButton").style.display = "none"; // Hide home button when switching forms
}
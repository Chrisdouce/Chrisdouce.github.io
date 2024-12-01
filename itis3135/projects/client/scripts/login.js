function updateSection() {
    const sectionPath = window.location.hash;
    
    document.getElementById("login").style.display="block";

    // Hide all sections
    document.querySelectorAll('section').forEach((section) => {
        section.style.display="none";
    });

    // Show the selected section
    if (sectionPath === "") {
        document.getElementById("login").style.display="block";
    } else {
        document.getElementById(sectionPath.slice(1)).style.display="block";
    }

}

// Initial call to show the correct section when the page loads
updateSection();

// Listen for hash changes
window.addEventListener('hashchange', updateSection);

//Login
const login = () => {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    fetch("./scripts/json/users.json")
        .then((response) => response.json())
        .then((data) => {
            const user = data.find((item) => item.username === usernameInput && item.password === passwordInput);

            if (user) {
                alert("Login successful!");
                // Redirect to another page or perform other actions
            } else {
                alert("Database needed. Enter user1 and password1 for demonstration");
            }
        })
        .catch((error) => console.error("Error fetching user data:", error));
};

//Create account
const createAccount = () => {
    const newUsername = document.getElementById("newusername").value;
    const newPassword = document.getElementById("newpassword").value;

    fetch("./scripts/json/users.json")
        .then((response) => response.json())
        .then((data) => {
            // Basic validation
            if (newUsername.trim() === "" || newPassword.trim() === "") {
                alert("Please fill in all fields.");
                return;
            }
            if (data.find((item) => item.username === newUsername)){
                alert("Username is taken.");
                return;
            }
            // Ideally, save the new user to the server or database
            const newUser = { username: newUsername, password: newPassword };
            alert("New user created!")
            
        })
        .catch((error) => console.error("Error fetching user data:", error));
};

const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", login);

document.getElementById("sign-up-btn").addEventListener("click", createAccount);
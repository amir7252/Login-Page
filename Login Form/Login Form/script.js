
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if username and password are valid
  if (username === "admin" && password === "password") {
    // Successful login
    alert("Login successful!");
    // You can redirect the user to another page here
  } else {
    // Failed login
    // document.getElementById("error").textContent = "Invalid username or password.";
    alert("Login Unsuccessful")
  }
}

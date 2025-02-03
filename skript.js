
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    
    if (username && email && password) {
      document.getElementById("resultMessage").textContent = "Registration Successful!";
    } else {
      document.getElementById("resultMessage").textContent = "Please fill out all fields.";
    }
  });


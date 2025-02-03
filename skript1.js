 // Function to set a cookie with a specific expiration date
 function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiry date in milliseconds
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  // Function to get a cookie's value by name
  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Check if the user has accepted cookies
if (!localStorage.getItem("cookiesAccepted")) {
    // Show the cookie notification
    document.getElementById("cookieNotification").style.display = "block";
  }
  
  // Handle the "Accept" button click
  document.getElementById("acceptBtn").addEventListener("click", function() {
    // Store in localStorage that cookies are accepted
    localStorage.setItem("cookiesAccepted", "true");
  
    // Hide the cookie notification
    document.getElementById("cookieNotification").style.display = "none";
  });

  // Check if the user has accepted cookies for this session
if (!sessionStorage.getItem("cookiesAccepted")) {
    // Show the cookie notification
    document.getElementById("cookieNotification").style.display = "block";
  }
  
  // Handle the "Accept" button click
  document.getElementById("acceptBtn").addEventListener("click", function() {
    // Store in sessionStorage that cookies are accepted
    sessionStorage.setItem("cookiesAccepted", "true");
  
    // Hide the cookie notification
    document.getElementById("cookieNotification").style.display = "none";
  });
  
  // Check if cookies are accepted
  if (!getCookie("cookiesAccepted")) {
    // Show the cookie notification
    document.getElementById("cookieNotification").style.display = "block";
  }
  
  // Handle the "Accept" button click
  document.getElementById("acceptBtn").addEventListener("click", function() {
    // Set a cookie to mark that cookies are accepted
    setCookie("cookiesAccepted", "true", 30);  // Expires in 30 days
  
    // Hide the cookie notification
    document.getElementById("cookieNotification").style.display = "none";
  });
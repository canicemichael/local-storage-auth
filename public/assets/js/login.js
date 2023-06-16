const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    // Send a POST request to the login endpoint
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // const token = response.data.token;
    const data = await response.json();
    console.log(data);
    // Stroe the token in local storage or as a cookie for future use
    const token = data.token;
    console.log(token);
    localStorage.setItem("token", token);

    if (token) {
      window.location.href = "/home"; //call a server endpoint that renders html page
    } else {
      window.location.href = "/login.html";
    }
  } catch (error) {
    console.error(error);
    alert("Error during login");
  }
});

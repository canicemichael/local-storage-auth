const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  try {
    // Send a POST request to the signup endpoint
    const response = await fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })      

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error(error);
    alert("Error during signup");
  }
});

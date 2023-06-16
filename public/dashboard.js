// Retrieve the token from localStorage
const token = localStorage.getItem("token");

// Check if the token is present
if (token) {
  // Use the token for authenticated requests or any other purpose
  console.log("Token:", token);
  console.log("dashboard water");
} else {
  // Handle the case when the token is not found
  console.log("Token not found");
}

async function hero() {
  try {
    const response = await fetch("/dashboard", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    const dataCont = document.getElementById("hello");
    dataCont.innerHTML = data.message;

    console.log(data.message);
  } catch (error) {
    console.error(error);
  }
}

hero();

// Retrieve the token from localStorage
const token = localStorage.getItem("token");

// Check if the token is present
if (token) {
  // Use the token for authenticated requests or any other purpose
  console.log("Token:", token);
  console.log("water");
} else {
  // Handle the case when the token is not found
  console.log("Token not found");
}

fetch("/api/data", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => {
    response.json();
  })
  .then((data) => {
    // Handle the response data
    console.log("data");
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });

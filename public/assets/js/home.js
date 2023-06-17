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

// async function getRes() {
//   try {
//     const response = await fetch("/api/data", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getRes();

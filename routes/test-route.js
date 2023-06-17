const router = require("express").Router();
const path = require("path");


router.get("/home", (req, res) => {
  // serve the home.html file
  console.log("came to home");
  res.sendFile(path.join(__dirname, "public/home.html"));
});

router.get("/api/data", async (req, res) => {
  let token;
  const authHeader = req.header("authorization");

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.slice(7);
    console.log("token ", token);
  }

  if (token) {
    res.sendFile(path.join(__dirname, "public/home.html"));
  }
});

module.exports = router;

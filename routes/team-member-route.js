const router = require("express").Router();
const path = require("path");
const authenticateToken = require("../middlewares/auth");

router.get("/teamMemberInit", (req, res) => {
  console.log("came to teamMemberInit");
  res.sendFile(path.join(__dirname, "../public/team-member.html"));
});

router.get("/teamMember", authenticateToken, (req, res) => {
  // Access the authenticated user via req.user
  const userId = req.user.userId;
  console.log("userId ", userId);
  // Fetch user data or perform any other action
  res.json({ message: `Welcome to the dashboard, User ID: ${userId}` });
});

router.get("/dashboardInit", (req, res) => {
  console.log("came to dashboardInit");
  res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});

router.get("/dashboard", authenticateToken, (req, res) => {
  // Access the authenticated user via req.user
  const userId = req.user.userId;
  console.log("userId ", userId);
  // Fetch user data or perform any other action
  res.json({ message: `Welcome to the dashboard, User ID: ${userId}` });
});

module.exports = router;

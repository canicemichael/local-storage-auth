require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const path = require("path");
const app = express();
const PORT = 3000;
const { connectDb } = require("./config/dbConnect");
const userRoute = require("./routes/user-route");
const authenticateToken = require("./middlewares/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

connectDb();

app.use(express.static("public"));
// app.use(express.static("public", { type: "module" }));
app.use("/auth", userRoute);

app.get("/home", (req, res) => {
  // serve the home.html file
  console.log("came to home");
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/api/data", async (req, res) => {
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

app.get("/dashboardInit", (req, res) => {
  console.log("came to dashboardInit");
  res.sendFile(path.join(__dirname, "public/dashboard.html"));
});

app.get("/dashboard", authenticateToken, (req, res) => {
  // Access the authenticated user via req.user
  const userId = req.user.userId;
  console.log("userId ", userId);
  // Fetch user data or perform any other action
  res.json({ message: `Welcome to the dashboard, User ID: ${userId}` });
});

app.get("/teamMemberInit", (req, res) => {
  console.log("came to teamMemberInit");
  res.sendFile(path.join(__dirname, "public/team-member.html"));
});

app.get("/teamMember", authenticateToken, (req, res) => {
  // Access the authenticated user via req.user
  const userId = req.user.userId;
  console.log("userId ", userId);
  // Fetch user data or perform any other action
  res.json({ message: `Welcome to the dashboard, User ID: ${userId}` });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// I'm trying to connect ejs to work as how express.static file worked
// will go and research on it
// will try and connect express session and cookies in this app

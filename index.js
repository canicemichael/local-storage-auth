require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const app = express();
const PORT = 3000;
const { connectDb } = require("./config/dbConnect");
const userRoute = require("./routes/user-route");
const teamMemberRoute = require('./routes/team-member-route');
const testRoute = require('./routes/test-route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

connectDb();

app.use(express.static("public"));
// app.use(express.static("public", { type: "module" }));
app.use("/auth", userRoute);
app.use(testRoute);
app.use(teamMemberRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// I'm trying to connect ejs to work as how express.static file worked
// will go and research on it
// will try and connect express session and cookies in this app

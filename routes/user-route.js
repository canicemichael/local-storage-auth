const User = require("../models/user-model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user instance
    const newUser = new User({
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error during signup", error);
    res.status(500).json({ message: "Signup failed. Internal server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, "secretKey");

    // res.cookie('token', token, { httpOnly: true }).status(200).json({ token });

    res.status(200).json({ token: token });
  } catch (error) {
    console.error("Error during login", error);
    res.status(500).json({ message: "Intrenal server error" });
  }
});

module.exports = router;

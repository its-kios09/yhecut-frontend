import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../model/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if the user is registered
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User doesn't exists." });
    }

    // compare hashed password with entered password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.status(200).json({
        success: true,
        token,
        message: "User has logged in successfully.",
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
//Route for user registration

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if the user is already registered
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }
    // validate email format and strong password

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "please enter a valid email." });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message:
          "please enter a strong password must be at least 8 characters long.",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res
      .status(201)
      .json({ success: true, message: "User registered successfully.", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.status(200).json({
        success: true,
        token,
        message: "Admin has logged in successfully.",
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

export { adminLogin, loginUser, registerUser };

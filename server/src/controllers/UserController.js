import User from "../models/User.js";
import { validateUserSignup, validateUserLogin } from "../models/User.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const { error } = validateUserSignup(req.body);
  if (error) {
    return res
      .status(401)
      .send({ success: false, message: error.details[0].message });
  }
  try {
    //1.destructure req.body - (name, email, password)
    const { name, email, password } = req.body;

    //2. check if user exist , if yes - throw error
    const user = await User.findOne({ email: email });

    if (user)
      return res
        .status(401)
        .json({ success: false, message: "User Already Exists" });

    // 3. Bcrypt the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //4. Enter the new user inside the database
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ success: true, data: {name: newUser.name, email: newUser.email} });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  const { error } = validateUserLogin(req.body);
  if (error) {
    return res
      .status(401)
      .send({ success: false, message: error.details[0].message });
  }
  try {
    //1.destructure req.body - (name, email, password)
    const { email, password } = req.body;

    //2. check if user does not exist , if yes - throw error
    const user = await User.findOne({ email: email });

    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "User Doesn't Exists" });

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      // Incorrect password
      return res.status(401).json({ message: "Incorrect password" });
    }

    return res.status(200).json({ success: true, data: {name: user.name, email: user.email} });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export { signup, login };

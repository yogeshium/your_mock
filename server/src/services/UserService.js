//Model Import
import User from "../models/User.js";

const insertUser = async (data) => {
  return await User.create(data);
};

export { insertUser };

const databaseConnect = require("../databases/database");

const registerController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await databaseConnect.usersCollection.insertOne({
      username,
      password,
    });
    res.status(201).json({ message: "User created", data: result });
  } catch (error) {
    console.error("Error in registerController:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginController = async (req, res) => {
  try {
    return res.status(200).json({ message: "Login success" });
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = {
  registerController,
  loginController,
};

const express = require("express");
const loginRouter = require("./routes/loginRoutes");
const databaseConnect = require("./databases/database");
const cors = require("cors");

const app = express();
const port = 4000;

app.use((err, req, res, next) => {
  return res.status(500).json({ error: err.toString() });
});
app.use(express.json());
app.use(cors());
databaseConnect.connect();

app.use("/api", loginRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

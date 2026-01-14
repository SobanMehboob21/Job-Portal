import dotenv from "dotenv";
import ConnectDb from "./config/Db.js";
import app from "./App.js";

dotenv.config();

ConnectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

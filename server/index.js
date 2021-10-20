const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./util/connectDB");
//routes
const route = require("./routes/index");
const PORT = process.env.PORT || 5000;
app.use(express.json());
//connect to db
dbConnection();
route(app);

app.listen(PORT, () => console.log("listening on port" + PORT));

const express = require("express");
var cors = require('cors')
const auth = require("./auth/auth");

const app = express();
const port = 3001;


app.use(express.json());
app.use(cors())
app.use("/auth",auth);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

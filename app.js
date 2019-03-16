const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(6000, () => {
  console.log("server is up and running on port 6000");
});

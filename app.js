const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

const getItems = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const items = JSON.parse(data);
        resolve(items);
      }
    });
  });
};

app.get("/", (req, res) => {
  getItems()
    .then(data => {
      const items = data.items;
      res.render("index", { items });
    })
    .catch(err => {
      res.render("index", { items: "<h1>Something went wrong</h1>" });
    });
});

app.listen(3000, () => {
  console.log("server is up and running on port 3000");
});

const express = require("express");
const axios = require("axios").default;

const app = express();
const port = 3001;

const client = axios.create({
  baseURL: "http://product-service-on-web:3000"
});

app.set("view engine", "pug");
app.get("/", async (req, res) => {
  try {
    const products = await client.get("/products");
    res.render("index", {
      title: "Hey",
      message: "Hello there wtf!",
      products
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR1!");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

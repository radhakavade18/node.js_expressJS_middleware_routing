const express = require("express");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.send("Landing page");
});

routes.get("/home", (req, res, next) => {
  res.send("Home page");
});

routes.get("/about", (req, res, next) => {
  res.send("About page");
});

// For invalid routes
routes.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

module.exports = routes;

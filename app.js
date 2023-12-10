// install express
const express = require("express");

// imported routes from local file
const routes = require("./routes/web-routes");

// create instance object of the express
const app = express();

// Simple request time logger
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());

  // This function call tells that more processing is
  // required for the current request and is in the next middleware function/route handler.
  next();
});

app.get("/home1", (req, res) => {
  res.send("Home Page new");
});

app.get("/about2", (req, res) => {
  res.send("About Page new");
});

app.use(routes);

// able to listen the application on port no :3000
app.listen(3000);

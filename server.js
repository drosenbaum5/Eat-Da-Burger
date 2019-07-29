// Required packages
var express = require("express");
var exphbs = require("express-handlebars");

// Require burger_controller
var routes = require("./controllers/burger_controller.js");

var PORT = process.env.PORT || 8080;

// Create an instance of express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Start the server so it can listen for client requests
app.listen(PORT, function(){
 // Log (server-side) when the server starts
 console.log("Server listening on: http://localhost: " + PORT);

});
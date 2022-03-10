const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFoundRoutes = require("./routes/404");
const rootDir = require("./helpers/path");

const app = express();

// Middelware, to parse body from req. It extracts data into an object, so the console log on the product route
// gives back a { title: 'something' } type object with key vaule pairs
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(notFoundRoutes);

app.listen(3000);

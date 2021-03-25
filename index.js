const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));

// morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// port
const { port } = require("./config");

// ejs template engine
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

// routes
const discoverRouter = require("./routes/discover.js");
const communityRouter = require("./routes/community.js");
const profileRouter = require("./routes/profile.js");

app.use("/", discoverRouter);
app.use("/community", communityRouter);
app.use("/profile", profileRouter);

app.listen(port, () => {
  console.log(`Server is listening on localhost: ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const shows = require("./routes/api/shows");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfuly connected"))
    .catch(err => console.log(err));

app.use(passport.initialize());
app.use(express.static('.'));

require("./config/passport") (passport);

app.use("/api/users", users);
app.use('/shows', shows);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
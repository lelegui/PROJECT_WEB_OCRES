var express = require("express");
var mongoose = require("mongoose")
var cors = require('cors');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var profilesRouter = require("./routes/profiles");

var app = express();

app.use(cors());

// connexion a mangoDB
mongoose.connect('mongodb+srv://backend:lea@backend.w6qvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//  erreur de co
mongoose.connection.on("error", err => {
  console.log("err", err)
})

// Message de co reussie
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/profiles", profilesRouter);

module.exports = app;
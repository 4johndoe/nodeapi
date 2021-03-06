const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("DB Connected"));

mongoose.connection.on('error', err => console.log(`DB connection error: ${err.message}`));

// routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);

// run
const port = process.env.PORT || 8800;
app.listen(port, () =>
    console.log(`A Node Js API is listening port: ${port}`)
);

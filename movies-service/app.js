require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const moviesRouter = require("./routes/movies");
const reviewsRouter = require("./routes/reviews");
const actorsRouter = require("./routes/actors");
const watchlistsRouter = require("./routes/watchlists");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/actors", actorsRouter);
app.use("/watchlists", watchlistsRouter);

module.exports = app;

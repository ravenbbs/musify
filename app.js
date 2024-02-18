/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */
"use strict";

/**
 * node modules
 */
const cors = require("cors");
const cookieParser = require("cookie-parser");

/**
 * custom modules
 */
const login = require("./src/routes/login.route");
const logout = require("./src/routes/logout.route");

const auth = require("./src/routes/auth.route");
const authenticatedUser = require("./src/middlewares/auth_user.middleware");
const home = require("./src/routes/home.route");
const explore = require("./src/routes/explore.route");
const album = require("./src/routes/album.route");
const playlist = require("./src/routes/playlist.route");

const profile = require("./src/routes/profile.route");
const artist = require("./src/routes/artist.route");
const search = require("./src/routes/search.route");
const track = require("./src/routes/track.route");

/**
 * Iniciar Express App
 */
const express = require("express");
const app = express();

/**
 * EJS setting
 */
app.set("view engine", "ejs");

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Activando cors & cookie parser
 */
app.use(cors());
app.use(cookieParser());

/**
 * Encode post request body
 */
app.use(express.urlencoded({ extended: true }));


/**
 * login page
 */
app.use("/login", login);

/**
 * Auth page
 */
app.use("/auth", auth);

/**
 * Check user is authenticated
 */
app.use(authenticatedUser);

/**
 * Home page
 */
app.use("/", home);

/**
 * Explore page
 */
app.use("/explore", explore);

/**
 * Album page
 */
app.use("/album", album);

/**
 * Album page
 */
app.use("/playlist", playlist);

/**
 * Profile page
 */
app.use("/me", profile);

/**
 * Search result page
 */
app.use("/search", search);

/**
 * Artist page
 */
app.use("/artist", artist);

/**
 * Track page
 */
app.use("/track", track);

/**
 * 404 page
 */
// app.use((res, req) => {
//   res.render("./pages/404" );
// });

//App listener
app.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`);
});

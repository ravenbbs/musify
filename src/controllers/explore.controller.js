/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * node modules
 */

/**
 * Custom modules
 */
const userApi = require("../api/user.api");
const playerApi = require("../api/player.api");
const categoryApi = require("../api/category.api");

const explore = async (req, res) => {
  res.render('./pages/explore')
}


module.exports = {
  explore
}
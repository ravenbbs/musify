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
  //current user profile
  const currentProfile = await userApi.getProfile(req);

  //recently played
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = await recentlyPlayed.items.map(
    ({ track }) => track
  );

  // get several categories
  const categories = await categoryApi.getSeveralDetail(req)



  res.render("./pages/explore", {
    currentProfile,
    recentlyPlayedTracks,
    categories
  });
};

module.exports = {
  explore,
};

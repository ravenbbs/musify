/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */
"use strict";


/**
 * custom modules
 */
const userApi = require("../api/user.api");
const playerApi = require("../api/player.api");
const apiConfig = require("../config/api.config");
const { msToTimeCode } = require('../utils/helpers.util');


const profile = async (req, res) => {
      //current user profile
      const currentProfile = await userApi.getProfile(req);

      //recently played
      const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
      const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
      );

      res.render("./pages/profile", {
        currentProfile,
        recentlyPlayedTracks,
      });
}


module.exports = {
  profile
}
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
const playlistApi = require("../api/playlist.api");
const { msToTimeCode } = require('../utils/helpers.util');

const playlist = async (req, res) => {
      //current user profile
      const currentProfile = await userApi.getProfile(req);

      //recently played
      const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
      const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
      );

      // featured Playlists
      const featuredPlaylists = await playlistApi.getFeatured(req)

      res.render("./pages/playlist", {
        currentProfile,
        recentlyPlayedTracks,
        featuredPlaylists,
      });
}


module.exports = {
  playlist
}
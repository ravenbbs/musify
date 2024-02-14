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
const albumApi = require("../api/album.api");

const album = async (req, res) => {
      //current user profile
      const currentProfile = await userApi.getProfile(req);

      //recently played
      const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
      const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
      );

      //new release albums
      const newRelease = await albumApi.getNewRelease(req);

      res.render("./pages/album", {
        title: 'Nuevos Lanzamientos',
        currentProfile,
        recentlyPlayedTracks,
        albums: newRelease,
        
      });
}


module.exports = {
  album
}
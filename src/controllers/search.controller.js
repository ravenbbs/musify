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
const searchApi = require("../api/search.api");
const { msToTimeCode } = require('../utils/helpers.util');

const searchRequest = async (req, res) => {
      res.redirect(`/search/all/${req.body.query}`)

}

const searchAll = async (req, res) => {
      //current user profile
      const currentProfile = await userApi.getProfile(req);

      //recently played
      const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
      const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
      );

      // search result
      const searchAll = await searchApi.getAll(req);

      res.render("./pages/search", {
        currentProfile,
        recentlyPlayedTracks,
        query: req.params.query,
        type: 'all',
        searchAll,
        msToTimeCode
      });

}

const searchAlbum = async(req, res) => {
        //current user profile
        const currentProfile = await userApi.getProfile(req);

        //recently played
        const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
        const recentlyPlayedTracks = await recentlyPlayed.items.map(
          ({ track }) => track
        );
  
        // search result
        const searchAlbum = await searchApi.getAlbum(req);
  
        res.render("./pages/search_album", {
          currentProfile,
          recentlyPlayedTracks,
          query: req.params.query,
          type: 'album',
          searchAlbum,
        });
}

module.exports = {
  searchRequest,
  searchAll,
  searchAlbum
}
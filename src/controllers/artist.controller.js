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
const artistApi = require("../api/artist.api");

const { msToTimeCode } = require("../utils/helpers.util");

const artistDetail = async (req, res) => {
  //current user profile
  const currentProfile = await userApi.getProfile(req);

  //recently played
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = await recentlyPlayed.items.map(
    ({ track }) => track
  );

  // artist detail
  const artistAlbums = await artistApi.getAlbum(req, apiConfig.LOW_LIMIT);

  //artist detail
  const artistDetail = await artistApi.getDetail(req);

  //artist top tracks
  const artistTopTracks = await artistApi.getTopTracks(req);

  //artist related artist
  const relatedArtist = await artistApi.getRelated(req)

  res.render("./pages/artist_detail", {
    currentProfile,
    recentlyPlayedTracks,
    artistAlbums,
    artistDetail,
    artistTopTracks,
    relatedArtist,
    msToTimeCode
  });
};

const artistAlbum = async (req, res) => {
    //current user profile
    const currentProfile = await userApi.getProfile(req);

    //recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
      ({ track }) => track
    );

    // artist detail
    const artistAlbums = await artistApi.getAlbum(req);
    
    //artist detail
    const artistDetail = await artistApi.getDetail(req);

    res.render("./pages/album", {
      currentProfile,
      recentlyPlayedTracks,
      title: artistDetail.name,
      albums: artistAlbums,
      isArtistAlbum: true
    });
}

module.exports = {
  artistDetail,
  artistAlbum
};

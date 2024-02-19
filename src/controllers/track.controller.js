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
const trackApi = require("../api/track.api");

const { msToTimeCode } = require("../utils/helpers.util");

const trackDetail = async (req, res) => {
  //current user profile
  const currentProfile = await userApi.getProfile(req);

  //recently played
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = await recentlyPlayed.items.map(
    ({ track }) => track
  );

  //track detail
  const trackDetail = await trackApi.getDetail(req);

  // track artist detail
  const artistIds = trackDetail.artists.map(({ id }) => id);
  const trackArtists = await artistApi.getSeveralDetail(
    req,
    artistIds.join(", ")
  );

  // first artist top track
  const [firstArtistId] = artistIds;
  const artistTopTracks = await artistApi.getTopTracks(req, firstArtistId);

  // first artist album
  const artistAlbum = await artistApi.getAlbum(req, 12, firstArtistId);

  //related artist
  const relatedArtist = await artistApi.getRelated(req, firstArtistId);

  //track lyrics
  const {
    name,
    artists,
    external_ids: { isrc },
  } = trackDetail;
  const trackLyrics = await trackApi.getLyrics(name, artists[0].name, isrc);

  res.render("./pages/track_detail", {
    currentProfile,
    recentlyPlayedTracks,
    trackArtists,
    artistTopTracks,
    relatedArtist,
    trackDetail,
    trackLyrics,
    artistAlbum,
    msToTimeCode,
  });
};

module.exports = {
  trackDetail,
};

/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * custom modules
 */
const { getData, musixmatchApi } = require("../config/axios.config");
const apiConfig = require("../config/api.config");

/**
 * Recommendations are generated based on the available information for a given seed entity and matched
 * against similar artist and tracks. If there is sufficient information about the provided seeds, a list
 * of tracks will be returned together with pool size details
 * @param {Object} req - server request object
 * @param {Object} trackSeed - object of artist or track seeds string
 * @param {number} itemLimit - the maximum number of items to return. default: 30
 * @returns {Object}
 */
const getRecommendedTrack = async (req, trackSeed, itemLimit) => {
  const {
    data: { tracks: recommendedTracks },
  } = await getData(
    `/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`,
    req.cookies.access_token
  );

  return recommendedTracks;
};

/**
 * Get spotify catalog in formation for a single track identified by its unique spotify ID
 * @param {Object} req - server request object
 * @returns {Object}
 */
const getDetail = async (req) => {
  const { trackId } = req.params;

  const { data: trackDetail } = await getData(
    `/tracks/${trackId}`,
    req.cookies.access_token
  );

  return trackDetail;
};

/**
 * Retrieves lyrics for a given track and artist using the Musixmatch API
 * @param {string} trackName - the name of the track
 * @param {string} artistName - the name of the artist
 * @param {string||null} isrc - the International Standard Recording Code ISRC of the track, if available.
 */
const getLyrics = async (trackName, artistName, isrc = null) => {
  const {
    message: {
      body: { lyrics },
    },
  } = await musixmatchApi("matcher.lyrics.get?", {
    q_track: trackName.toLowerCase(),
    q_artist: artistName.toLowerCase(),
    track_isrc: isrc,
  });

  return lyrics;
};

module.exports = {
  getRecommendedTrack,
  getDetail,
  getLyrics,
};

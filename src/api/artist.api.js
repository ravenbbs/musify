/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * custom modules
 * */
const apiConfig = require("../config/api.config");
const { getData } = require("../config/axios.config");
const { getUrlQuery } = require("../utils/helpers.util");

/**
 * Get Spotify catalog information for several artist based on their Spotify IDs
 * @param {Object} req - reserver request object
 * @param {string} artistIds - A comma-separated list of the Spotify IDs for the artist.
 * Maximum: 50 IDs
 * @returns {Object}
 */
const getSeveralDetail = async (req, artistIds) => {
  const { data: trackArtists } = await getData(
    `/artists?ids=${artistIds}`,
    req.cookies.access_token
  );
  return trackArtists;
};

/**
 * Get spotify catalog information about an artist albums
 * @param {Object} req - server request object
 * @param {number} itemLimit - the maximum number of items to return. defaults: 30
 * @param {string} id - the spotify ID of the artist
 */
const getAlbum = async (req, itemLimit, id) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);
  const { artistId = id } = req.params;

  const { data: artistAlbum } = await getData(
    `/artists/${artistId}/albums?limit=${limit}&offset=${offset}`,
    req.cookies.access_token
  );

  const /** {string} */ baseUrl = `${req.baseUrl}/${artistId}/album`;

  return { baseUrl, page, ...artistAlbum };
};

/**
 * Get spotify catalog information for a single artist identified by their unique spotify ID
 * @param {Object} req - server request object
 */
const getDetail = async (req) => {
  const { artistId } = req.params;

  const { data: artistDetail } = await getData(
    `/artists/${artistId}`,
    req.cookies.access_token
  );

  return artistDetail;
};

/**
 * Get spotify catalog information about an artists top tracks
 * @param {Object} req - server request object
 * @param {string} id - the spotify ID of the artist
 * @returns {Object}
 */
const getTopTracks = async (req, id) => {
  const { artistId = id } = req.params;

  const { data: artistTopTracks } = await getData(
    `/artists/${artistId}/top-tracks?market=${apiConfig.MARKET}`,
    req.cookies.access_token
  );

  return artistTopTracks;
};

/**
 * Get spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history
 * @param {Object} req - server request object
 * @param {string} id - the spotify ID of the artist
 * @returns {Object}
 */
const getRelated = async (req, id) => {
  const { artistId = id } = req.params;

  const { data: relatedArtist } = await getData(
    `/artists/${artistId}/related-artists`,
    req.cookies.access_token
  );

  return relatedArtist;
};

module.exports = {
  getSeveralDetail,
  getAlbum,
  getDetail,
  getTopTracks,
  getRelated
};

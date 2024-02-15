/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * custom modules 
 * */
const apiConfig = require("../config/api.config");
const { getData } = require('../config/axios.config')
const { getUrlQuery } = require('../utils/helpers.util');

/**
 * Get Spotify catalog information for several artist based on their Spotify IDs
 * @param {Object} req - reserver request object
 * @param {string} artistIds - A comma-separated list of the Spotify IDs for the artist.
 * Maximum: 50 IDs
 * @returns {Object}
 */
const getSeveralDetail = async (req, artistIds) => {
  const {data: trackArtists } = await getData(`/artists?ids=${artistIds}`, req.cookies.access_token)
  return  trackArtists
}

/**
 * Get spotify catalog information about an artist albums
 * @param {Object} req - server request object
 * @param {number} itemLimit - the maximum number of items to return. defaults: 30
 * @param {string} id - the spotify ID of the artist
 */
const getAlbum = async (req, itemLimit, id) => {
  const {offset, limit, page} = getUrlQuery(req.params, itemLimit)
  const { artistId = id} = req.params;

  const { data: artistAlbum } = await getData(`/artists/${artistId}/albums?limit=${limit}&offset=${offset}`, req.cookies.access_token)

  const /** {string} */ baseUrl = `${req.baseUrl}/${artistId}/album`

  return { baseUrl, page, ...artistAlbum}

}


module.exports = {
  getSeveralDetail,
  getAlbum
}
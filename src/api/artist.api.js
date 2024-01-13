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

module.exports = {
  getSeveralDetail
}
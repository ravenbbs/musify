/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * custom modules
 * */
const { getData } = require("../config/axios.config");
const { getUrlQuery } = require("../utils/helpers.util");

/**
 * Get spotify catalog information about albums, artists , playlists, tracks that match a query string
 * @param {Object} req - server request object
 * @returns {Object}
 */
const getAll = async (req) => {
  const { query } = req.params;

  const { data: searchAll } = await getData(`/search?q=${query}&type=track,album,artist,playlist&limit=12`, req.cookies.access_token);

  return searchAll;
};

module.exports = {
  getAll,
};

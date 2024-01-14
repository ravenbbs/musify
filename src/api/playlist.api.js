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
 * Get a list of Spotify featured playlists
 * @param {Object} req
 * @param {number} itemLimit
 * @returns {Object}
 */
const getFeatured = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);

  const { data: featuredPlayList } = await getData(
    `/browse/featured-playlists?limit=${limit}&offset=${offset}`,
    req.cookies.access_token
  );

  return { baseUrl: req.baseUrl, page, ...featuredPlayList };
};

/**
 *  Get a list of Spotify playlists tagged with a particular category
 * @param {Object} req - server request object
 * @param {number} itemLimit - the maximum number of items to return. default: 30
 * @returns {Object}
 */
const getCategoryPlaylist = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);
  const { categoryId = "toplists" } = req.params;

  const { data: catPlaylist } = await getData(
    `/browse/categories/${categoryId}/playlists?limit=${limit}&offset=${offset}`,
    req.cookies.access_token
  );

  const /**{string} */ baseUrl = `${req.baseUrl}/${categoryId}`;

  return { baseUrl, page, ...catPlaylist };
};

module.exports = {
  getFeatured,
  getCategoryPlaylist,
};

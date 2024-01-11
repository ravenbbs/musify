/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * custom modules
 */
const apiConfig = require("../config/api.config");
const axiosConfig = require("../config/axios.config");

/**
 * Get access token for api request
 * @param {string} code An authorization code that can be exchanged for 
  an Access token
 * @returns {Object}
 */

const getToken = async (code) => {
  try {
    const response = await axiosConfig.token.post("/token", {
      grant_type: "authorization_code",
      code,
      redirect_uri: apiConfig.REDIRECT_URI,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getToken };

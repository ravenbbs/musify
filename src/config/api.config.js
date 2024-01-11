/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * node modules
 */
require('dotenv').config()

// base address web api
const BASE_URL = 'https://api.spotify.com/v1'

// Base address of spotify authentication token
const TOKEN_BASE_URL = 'https://accounts.spotify.com/api'

// Spotify client id
const CLIENT_ID = process.env.CLIENT_ID

// Spotify client secret
const CLIENT_SECRET = process.env.CLIENT_SECRET

// redirect uri for spotify authorization code flow
const REDIRECT_URI = process.env.REDIRECT_URI

// const scope for api request
const SCOPE = process.env.SCOPE

// authentication state key
const STATE_KEY = 'spotify_auth_state'

// Api request queries
const MARKET = 'US'
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;


module.exports = {
  BASE_URL, 
  TOKEN_BASE_URL, 
  CLIENT_ID, 
  CLIENT_SECRET, 
  REDIRECT_URI, 
  SCOPE,
  STATE_KEY,
  MARKET,
  LOW_LIMIT,
  DEFAULT_LIMIT
}
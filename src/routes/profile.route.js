/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * node modules
 */
const router = require('express').Router()


/**
 * Custom modules
 */
const { profile, topArtist } = require('../controllers/profile.controller')

router.get('/' , profile)
router.get(['/top/artist', '/top/artist/page/:page'] , topArtist)


module.exports = router
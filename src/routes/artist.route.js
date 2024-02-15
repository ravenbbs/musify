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
const { artistDetail } = require('../controllers/artist.controller')

router.get( '/:artistId', artistDetail )


module.exports = router
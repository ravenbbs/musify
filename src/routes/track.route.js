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
const { trackDetail } = require('../controllers/track.controller')

router.get('/:trackId', trackDetail )


module.exports = router
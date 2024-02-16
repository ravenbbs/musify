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
const { playlist, playlistDetail } = require('../controllers/playlist.controller')

router.get(['/', '/page/:page'], playlist )

router.get('/:playlistId', playlistDetail)

module.exports = router
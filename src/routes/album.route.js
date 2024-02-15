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
const { album, albumDetail } = require('../controllers/album.controller')

router.get(['/', '/page/:page'], album)

router.get('/:albumId' , albumDetail)

module.exports = router
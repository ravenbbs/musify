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
const {explore, exploreDetail} = require('../controllers/explore.controller')

router.get(['/', '/page/:page'], explore)

router.get('/:categoryId', exploreDetail)

module.exports = router
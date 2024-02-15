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
const { profile } = require('../controllers/profile.controller')

router.get('/' , profile)


module.exports = router
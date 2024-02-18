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
const { searchRequest, searchAll } = require('../controllers/search.controller')

router.post('/', searchRequest )
router.get('/all/:query', searchAll )

module.exports = router
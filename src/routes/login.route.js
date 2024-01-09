/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */

const {login} = require('../controllers/login.controller')

router.get('/', login)

module.exports = router

/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */
"use strict";

/**
 * node modules
 */
const cors = require('cors')
const cookieParser = require('cookie-parser')

/**
 * custom modules
 */
const login = require('./src/routes/login.route')

/**
 * Iniciar Express App
 */ 
const express = require('express')
const app = express()

/**
 * EJS setting
 */
app.set('view engine', 'ejs' )

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`))

/**
 * Activando cors & cookie parser
 */
app.use(cors())
app.use(cookieParser())

/**
 * login page
 */
app.use('/login', login)


app.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`)
})
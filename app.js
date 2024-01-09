"use strict";

/**
 * node modules
 */

const cors = require('cors')
const cookieParser = require('cookie-parser')

// Iniciar Express App

const express = require('express')
const app = express()

/**
 * EJS setting
 */
app.get('view engine', 'ejs' )

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`))

/**
 * Activando cors & cookie parser
 */

app.use(cors()).use(cookieParser())

/**
 * login page
 */
app.get('/login', (req, res) => {
  res.send(`Login`)
})


app.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`)
})
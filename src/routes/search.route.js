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
const { searchRequest, searchAll, searchAlbum, searchArtist, searchTracks, searchPlaylist } = require('../controllers/search.controller')

router.post('/', searchRequest )
router.get('/all/:query', searchAll )
router.get(['/albums/:query', '/albums/:query/page/:page'], searchAlbum)
router.get(['/artists/:query', '/artists/:query/page/:page'], searchArtist)
router.get(['/tracks/:query', '/tracks/:query/page/:page'], searchTracks)
router.get(['/playlists/:query', '/playlists/:query/page/:page'], searchPlaylist)

module.exports = router
const { getMovies } = require('../Controller')

const movieRouter  = require('express').Router()


movieRouter.get('/query',getMovies)


module.exports = {movieRouter}
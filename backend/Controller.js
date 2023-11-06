const getMovies = async(req,res) =>
{
        const query = req.query.search
        const apiKey = `55bb902d`
        const omdb_url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
}

module.exports = {getMovies}
const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')
const helmet = require("helmet");


app.use(helmet());


app.get('/api/:searchTerm/:mediaType', (req, res) => {
    let searchTerm = req.params.searchTerm
    let mediaType = req.params.mediaType 
    console.debug(searchTerm)
    console.debug(mediaType)
    axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=${mediaType}`)
        .then(function (response) {
            // handle success
            console.log(response);
            res.json(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
        
})

// this end point is for testing purpose only as there isnt a frontend to specify the parameters and the variables was hard coded
app.get('/apiTest/', (req, res) => {
    let searchTerm = 'hammer'
    let mediaType = 'movie'
    console.debug(searchTerm)
    console.debug(mediaType)
    axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=${mediaType}`)
        .then(function (response) {
            // handle success
            console.log(response);
            res.json(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })

})










const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {


    console.log(`Server is listening on port ${PORT}`);
});
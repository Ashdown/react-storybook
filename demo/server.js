const express = require('express')
const path = require('path')

const server = express();
let port
let static_directory

if(process.env.NODE_ENV === 'production') {
    //production set up
    server.use(express.static(__dirname + '/public'))
    console.log(__dirname + '/public')
    static_directory = ''
    port = process.env.PORT
} else {
    //local set up
    const config = require('./webpack-run-local.config')
    const webpack = require('webpack')
    const compiler = webpack(config)
    port = 4000

    static_directory = `//localhost:${port}/static/`

    server.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath
    }))

    server.use(require('webpack-hot-middleware')(compiler));
}
server.set('views', path.join(__dirname, 'views'))
server.get('/', (req, res) => res.render('demo.ejs', {static_directory: static_directory}))
server.get('/components', (req, res) => res.render('demo.ejs', {static_directory: static_directory}))
server.get('/inputs', (req, res) => res.render('demo.ejs', {static_directory: static_directory}))

server.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
})

module.exports = server;
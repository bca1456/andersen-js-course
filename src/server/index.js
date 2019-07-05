const express = require('express')
const app = express()
const port = 3000
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.get('/', (request, response) => {
    response.send('Hello from Express!')
})
app.get('/alltodos', (request, response) => {
    response.send('kek')
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
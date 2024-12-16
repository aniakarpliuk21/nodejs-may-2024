const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}`))

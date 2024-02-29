const express = require('express')

const app = express()


app.use(express.static(`${__dirname}/public`))


app.listen(4040, () => console.log(`Crank it up to 4040`))



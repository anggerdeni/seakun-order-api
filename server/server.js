const express = require('express')
const apiRouter = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.options('/registered-user', cors())
app.use('/registered-user', apiRouter)

app.listen(process.env.PORT || '4000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '4000'}`);
})
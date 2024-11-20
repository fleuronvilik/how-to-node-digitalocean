import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { route } from './src/routes'

const app = express()
const PORT = 3000

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/crmdb", {
    useNewUrlParser: true
})

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

route(app)

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
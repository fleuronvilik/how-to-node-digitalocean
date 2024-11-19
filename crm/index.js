import express from 'express'
import { route } from './src/routes'

const app = express()
const PORT = 3000

route(app)

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
import express from 'express'
import cors from 'cors'
import { ROUTE } from './src/routes/index.js'

const app = express()
app.use(express.json())
app.use(cors('*'))

const port = process.env.PORT

app.listen(port, () => {
    console.log('App is running on port :', port)
})
ROUTE(app)
console.log('hello world')
console.log(process.env.PORT)

export default app
import express from 'express'
import cors from 'cors'
import {SERVER_CONFIG, MONGO_CONFIG} from './src/config/index.js'
import {ROUTE} from './src/routes/index.js'
// import {route} from './src/routes/index.js'
// console.log('route', route)
const app = express()
app.use(express.json())
app.use(cors('*'))
// app.use(route)



const port = process.env.PORT




app.listen(port , ()=>{
    console.log('App is running on port :', port)
})
ROUTE(app)
console.log('hello world')
console.log(process.env.PORT)

export default app
import express from 'express'
import products from './data/products.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'


dotenv.config()

connectDb();
const app = express();


app.use(cors({
    origin: 'http://localhost:3000'
}))

let data = JSON.stringify(products)


app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    console.log('☂', req.params.id)
    let product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server runnig in ${process.env.NODE_ENV} mode on ${port}`.yellow.bold))
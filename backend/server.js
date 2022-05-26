import express from 'express'
import products from './data/products.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoute.js'
import { notFound, errorHandler } from './middleware/errormiddleWare.js'

dotenv.config({ path: '../config.env' })


connectDb();
const app = express();


app.use(cors({
    origin: 'http://localhost:3000'
}))

//when ever the route starts with 'api/products/ link to productRoutes
app.use('/api/products', productRoutes)


app.use(notFound);
app.use(errorHandler);



const port = process.env.PORT || 5000;

app.listen(port, console.log(`server runnig in ${process.env.NODE_ENV} mode on ${port}`.yellow.bold))
import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './Config/db.js'
import productRouter from './router/productRouter.js'
import userRouter from './router/userRoute.js'
import orderRoutes from './router/orderRoutes.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js'

dotenv.config();
const app=express();
connectDB();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('API is running ..')
})
app.use('/api/product',productRouter)
app.use('/api/users',userRouter)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3300;

app.listen(port,
    console.log(`Server working on port ${port}`.magenta.inverse)
);
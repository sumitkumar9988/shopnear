import express from 'express';
import colors from 'colors'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './Config/db.js'
import productRouter from './router/productRouter.js'
import userRouter from './router/userRoute.js'
import orderRoutes from './router/orderRoutes.js';
import uploadRoutes from './router/uploadRouter.js'
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
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3300;


app.listen(port,
    console.log(`Server working on port ${port}`.magenta.inverse)
);
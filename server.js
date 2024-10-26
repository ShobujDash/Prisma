import express from 'express';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 4000;



// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))



// Routes
import routes from './routes/index.js'
app.use(routes)


app.get('/', (req, res) => {
  return res.send("Hi Everyone")
})



app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
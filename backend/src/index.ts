import express from 'express'
const app = express()
import cors from 'cors' 
const port = 3006   
import userRouter from './routes/user'
app.get('/',(req,res) => {
    res.json({message:"Thanks God           1"})
})

app.use(cors({
    credentials:true,
    origin:'',
    optionsSuccessStatus:200
}))
app.use(express.json())
app.use(express.urlencoded({'extended':false}))

app.use('/api/user',userRouter)

app.listen(port,() => console.log(`app is alive at http://localhost:${port}`))
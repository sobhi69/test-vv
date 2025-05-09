import express from 'express'
const app = express()
import cors from 'cors' 
const port = 3006   
import userRouter from './routes/user'
app.get('/',(req,res) => {
    res.json({message:"Thanks God           1"})
})

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Credentials','true')
    res.header("Access-Control-Allow-Origin",'*')
    next()
})

app.use(cors({
    origin(requestOrigin, callback) {
        console.log(requestOrigin)
        return callback(null,true)
    },optionsSuccessStatus:200,credentials:true}
))

app.use(express.json())
app.use(express.urlencoded({'extended':false}))

app.use('/api/user',userRouter)

app.listen(port,() => console.log(`app is alive at http://localhost:${port}`))
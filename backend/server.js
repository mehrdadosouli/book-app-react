import { books } from './constants/mockData.js'
const express=require('express')

const cors=require('cors')
const app=express()
app.use(cors())

app.get('/',cors(),(req,res)=>{
    console.log(req);
    res.send(JSON.stringify('hello mehrdad'))
})
app.listen(5000)


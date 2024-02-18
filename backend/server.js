const allbooks=require('./constants/mockData')
const fs=require('fs')
const path=require('path')
const express=require('express')
const cors=require('cors')
const app=express()
app.use(express.json({extends:false}))
const photos=path.join(__dirname,'/assets')
const objphotos=[]
app.use('/assets', express.static('assets'));
app.use(cors())

fs.readdir(photos,'UTF-8',(err,photo)=>{
    if(err){
        console.log(err);
    }else{
        objphotos.push(photo)
    }
})

app.get('/text',cors(),(req,res)=>{
    if(req.method == 'GET'){
        res.send(JSON.stringify(allbooks.books))
    }else{
        res.send(JSON.stringify('method is wrong'))
    }
})


app.get('/photos',cors(),(req,res)=>{
    if(req.method == 'GET'){
        res.send(JSON.stringify(objphotos))
    }else{
        res.send(JSON.stringify('method is wrong'))
    }
})
app.listen(5000)



const allbooks=require('./constants/mockData')
const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.get('/',cors(),(req,res)=>{
    console.log(allbooks);

    res.send(JSON.stringify(allbooks.books))
})
app.listen(5000)



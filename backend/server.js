const allbooks=require('./constants/mockData')
const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.get('/',cors(),(req,res)=>{
    if(req.method == 'GET'){
        res.send(JSON.stringify(allbooks.books))
    }else{
        res.send(JSON.stringify('method is wrong'))
    }
})
app.listen(5000)



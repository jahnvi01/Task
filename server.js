const express =require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
const app=express();
const routes=require('./routes/api/products')

app.use(bodyParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',routes)

mongoURI=require('./config/keys').mongoURI;
mongoose.connect(mongoURI,{useNewUrlParser:true,useCreateIndex:true})
.then(()=>console.log("db connected"))
.catch(err=>console.log(err))
const port=process.env.PORT||5000;
app.listen(port,()=>console.log("Server connected to port 5000"))
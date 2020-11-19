const express =require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
const path=require('path');
const http = require('http');
const app=express();
const routes=require('./routes/api/products')
const hostname = '159.203.186.98';
app.use(bodyParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',routes)

mongoURI=require('./config/keys').mongoURI;
mongoose.connect(mongoURI,{useNewUrlParser:true,useCreateIndex:true})
.then(()=>console.log("db connected"))
.catch(err=>console.log(err))
const port=process.env.PORT||5000;

    app.use(express.static(path.join(__dirname,'client/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })



// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
//   	res.setHeader('Content-Type', 'text/plain');
//   	res.end('Sysmon App is Up and Running!\n');
// });

app.listen(port, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});

// var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
// var server_host = process.env.YOUR_HOST || '0.0.0.0';
// app.listen(server_port, server_host, function() {
//     console.log('Listening on port %d', server_port);
// });
app.listen(port,()=>console.log("Server connected to port 5000"))


    // server {
    //     listen 80;
    //     server_name _;
    //     location / {
    //         proxy_pass http://{private ip}:{port 5000/8080};
    //         proxy_http_version 1.1;
    //         proxy_set_header Upgrade $http_upgrade;
    //         proxy_set_header Connection 'upgrade';
    //         proxy_set_header Host $host;
    //         proxy_cache_bypass $http_upgrade;
    //         proxy_redirect off;
    //      }
    // }

follow https://medium.com/@Keithweaver_/setting-up-mern-stack-on-aws-ec2-6dc599be4737

(youtube video also available)
const express=require('express');
const app=express();
require('./models/conn');
var studentContr=require('./controllers/studentController');
app.get('/',(req,res)=>{
    res.send('home');
});
app.get('/add',studentContr.addStudent);
app.get('/crud',studentContr.crudOpearation);
app.get('/query',studentContr.queryData);
app.listen(3000);
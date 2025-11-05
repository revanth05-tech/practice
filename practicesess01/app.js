const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{success:null});
});

app.post('/add-conference',(req,res)=>{
    const { name } = req.body;

    console.log("Conference added:",name);

    res.render('index',{success:`Conference "${name}" added successfully!`});
});

app.listen(3000,()=>{
    console.log("Server is on http://localhost:3000")
});
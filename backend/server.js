const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host :'localhost',
    user:'root',
    password:"1111",
    database:"siva"
})
app.post('/signup',(req, res)=>{
    const sql = "Insert into users(name,email,password) values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    
    const values1=values.flat();
        
    console.log(values1)
    db.query(sql,[values1], (err,data) => {
        if(err){
            return res.json(err);
        }
        else{
            return res.json(data);
console.log(data)
        }
    })
})
app.post('/login',(req, res)=>{
    const sql = "Select * from users where email=? and password=? ";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    
    db.query(sql,[req.body.email, req.body.password], (err,data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("success");
console.log(data)
        }
        else{
            return res.json("Failed")
        }
    })
})

app.listen(3318,()=>{
    console.log("Listening...")
    
})

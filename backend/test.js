import mysql2 from 'mysql2'
import express from 'express'


const connection = mysql2.createConnection({
    host :"localhost",
    database: "siva",
    user: "root",
    password: "1111"

})

const app = express();
const port= 5000;

app.listen(port,()=>{
console.log(`SERVER : http://localhost:${port}`);
connection.connect((err)=>{
    if(err) throw err;
    console.log("db connected");
})
})

app.use("/all",(req, res)=>{
const sql_query = `select * from students`
connection.query(sql_query,(err,result)=>{
    if(err) throw err;
    res.send(result);
})
})
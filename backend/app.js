import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 4000;

//use cors to connect to frontend
app.use(cors());

//Parsing frontend data
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get('/',(req,res)=>{
    res.send("ss");
})

//app.post() get frontend request，and set res.status to response
app.post('/save', (req, res) => {
     const name  = req.body.inputname;
    if (name && !saveNames.includes(name)) {
       saveNames.push(name);
       res.status(201).json({ message: 'Name saved successfully.' });
     } else {
       res.status(400).json({ message: 'Invalid name or name already exists.' });
     }
    console.log(saveNames);
  });

app.listen(port, ()=>console.log('server started on http://localhost:' + port));
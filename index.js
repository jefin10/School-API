import express from "express"
const app=express();
import schools from './routes/schools.js'
app.use(express.json())
app.use('/',schools);

app.listen(5000,()=>{
    console.log("The project is running");
})
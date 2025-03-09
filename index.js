import express from "express"
const app=express();
import schools from './routes/schools.js'
app.use(express.json())
app.use('/',schools);
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("The project is running");
})
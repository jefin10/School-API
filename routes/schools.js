import express from "express";

const router = express.Router();
import db from "../db.js";

router.post('/addSchool',(req,res)=>{
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).json({ error: 'Invalid input. Provide valid name, address, latitude, and longitude.' });
      }
      const query = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;
      db.run(query, [name, address, latitude, longitude], function(err) {
        if (err) {
          console.error('Error adding school:', err);
          return res.status(500).json({ error: 'Database error while adding school.' });
        }
        res.status(201).json({ message: 'School added successfully', schoolId: this.lastID });
      });


})

router.post('/list-Schools',(req,res)=>{
    const {latitude, longitude} = req.body;
    if(!latitude|| !longitude){
        return res.status(400).json({ error:"Invalid input. Provide valid latitude, and longitude." });

    }
    const query = `SELECT *,(latitude - ?)+(longitude - ?) as distance FROM schools order by distance`;
    db.all(query,[latitude,longitude],(err,rows)=>{
        if (err) {
            console.error('Error fetching schools:', err);
            return res.status(500).json({ error: 'Database error while fetching schools.' });
          }
          res.json({schools:rows});
        
    });
});


export default router;

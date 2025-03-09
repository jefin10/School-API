import sqlite3 from 'sqlite3'


const db =new sqlite3.Database('./database/database.sqlite',(err)=>{
    if(err){
        console.log("Eror occured", err);
    }
    else{
        console.log("Connection success");
    }
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS schools (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL
)
`;

db.run(createTableQuery,(err)=> {
    if(err){
        console.log("Eror occured", err);

    }
    else{
        console.log("Connection success");
    }
});

export default db;

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors= require('cors');

// Set up the express app
const app = express();
const port = 5000;


// app.options("*", cors());

const allowedOrigins = ["https://sql-editor-v4zq.vercel.app","http://localhost:3000","https://sql-editor-sable.vercel.app/","https://sql-editor-git-main-dhananjaydognes-projects.vercel.app/"];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));


// Body parser middleware to parse JSON request body
app.use(bodyParser.json());

// Open the SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Database opened');
  }
});

// Handle SQL queries sent from the frontend
app.post('/query', (req, res) => {
  const { query } = req.body;

  // Execute the SQL query
  try{
    db.all(query, [], (err, rows) => {
      if (err) {
        console.log('Error executing query:', err);
        res.status(400).json({ error: 'Invalid SQL query' });
      } else {
        res.json(rows); // Return the rows from the query result
      }
    });
  }catch(e){
    console.log(e);
  }
});

app.get('/',(req, res) => {
  res.send('SQL Query Runner API');
}
);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

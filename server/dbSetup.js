 // dbSetup.js
const sqlite3 = require('sqlite3').verbose();

// Create or open the SQLite database file
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Database opened');
  }
});

// Create a sample table and insert mock data
db.serialize(() => {
  // Create Users table
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)");

  // Insert mock data
  const stmt = db.prepare("INSERT INTO users (name, age) VALUES (?, ?)");
  stmt.run("John Doe", 25);
  stmt.run("Jane Smith", 30);
  stmt.run("Alice Johnson", 35);
  stmt.finalize();

  // Create Orders table
  db.run("CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, user_id INTEGER, amount REAL)");

  // Insert mock data
  const stmt2 = db.prepare("INSERT INTO orders (user_id, amount) VALUES (?, ?)");
  stmt2.run(1, 250.75);
  stmt2.run(2, 450.20);
  stmt2.run(3, 150.50);
  stmt2.finalize();
});

db.close((err) => {
  if (err) {
    console.error('Error closing database:', err);
  } else {
    console.log('Database closed');
  }
});

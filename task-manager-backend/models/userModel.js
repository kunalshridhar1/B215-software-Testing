const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./task-manager.db');

// Create Users table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = {
  createUser: (username, email, password, callback) => {
    const query = `INSERT INTO Users (username, email, password) VALUES (?, ?, ?)`;
    db.run(query, [username, email, password], function (err) {
      callback(err, this.lastID);
    });
  },

  getUserByEmail: (email, callback) => {
    const query = `SELECT * FROM Users WHERE email = ?`;
    db.get(query, [email], (err, row) => {
      callback(err, row);
    });
  },

  getUserById: (id, callback) => {
    const query = `SELECT * FROM Users WHERE id = ?`;
    db.get(query, [id], (err, row) => {
      callback(err, row);
    });
  }
};

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./task-manager.db');

// Create Tasks table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed INTEGER DEFAULT 0,
      userId INTEGER NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(userId) REFERENCES Users(id)
    )
  `);
});

module.exports = {
  createTask: (title, description, userId, callback) => {
    const query = `INSERT INTO Tasks (title, description, userId) VALUES (?, ?, ?)`;
    db.run(query, [title, description, userId], function (err) {
      callback(err, this.lastID);
    });
  },

  getTasksByUser: (userId, callback) => {
    const query = `SELECT * FROM Tasks WHERE userId = ?`;
    db.all(query, [userId], (err, rows) => {
      callback(err, rows);
    });
  },

  getTaskById: (id, callback) => {
    const query = `SELECT * FROM Tasks WHERE id = ?`;
    db.get(query, [id], (err, row) => {
      callback(err, row);
    });
  },

  updateTask: (id, title, description, callback) => {
    const query = `UPDATE Tasks SET title = ?, description = ? WHERE id = ?`;
    db.run(query, [title, description, id], function (err) {
      callback(err, this.changes);
    });
  },

  markTaskCompleted: (id, callback) => {
    const query = `UPDATE Tasks SET completed = 1 WHERE id = ?`;
    db.run(query, [id], function (err) {
      callback(err, this.changes);
    });
  },

  deleteTask: (id, callback) => {
    const query = `DELETE FROM Tasks WHERE id = ?`;
    db.run(query, [id], function (err) {
      callback(err, this.changes);
    });
  }
};

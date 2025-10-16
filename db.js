const sqlite3 = require("sqlite3").verbose();

// Crear o abrir la base de datos local
const db = new sqlite3.Database("./tienda.db", (err) => {
  if (err) {
    console.error("❌ Error al conectar con SQLite:", err.message);
  } else {
    console.log("✅ Conectado a la base de datos SQLite");
  }
});

// Crear tabla si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS productos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      precio REAL NOT NULL,
      stock INTEGER DEFAULT 0,
      categoria TEXT DEFAULT 'General'
    )
  `);
});

module.exports = db;

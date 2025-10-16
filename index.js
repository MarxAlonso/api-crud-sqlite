const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("Servidor Express con SQLite funcionando 🚀");
});

// CREATE - Agregar producto
app.post("/productos", (req, res) => {
  const { nombre, precio, stock, categoria } = req.body;

  const query = "INSERT INTO productos (nombre, precio, stock, categoria) VALUES (?, ?, ?, ?)";
  db.run(query, [nombre, precio, stock, categoria], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, nombre, precio, stock, categoria });
  });
});

// READ - Todos los productos
app.get("/productos", (req, res) => {
  db.all("SELECT * FROM productos", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// READ - Producto por ID
app.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM productos WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(row);
  });
});

// UPDATE - Actualizar producto
app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock, categoria } = req.body;

  const query = "UPDATE productos SET nombre = ?, precio = ?, stock = ?, categoria = ? WHERE id = ?";
  db.run(query, [nombre, precio, stock, categoria, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json({ id, nombre, precio, stock, categoria });
  });
});

// DELETE - Eliminar producto
app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM productos WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json({ message: "Producto eliminado correctamente" });
  });
});

// READ - Filtrar productos por categoría
app.get("/productos/categoria/:categoria", (req, res) => {
  const { categoria } = req.params;
  const query = "SELECT * FROM productos WHERE categoria = ?";
  
  db.all(query, [categoria], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (rows.length === 0)
      return res.status(404).json({ message: "No se encontraron productos en esta categoría" });
    res.json(rows);
  });
});


// Iniciar servidor
app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000")
);

# 🧩 API CRUD con Node.js y SQLite

### Proyecto de backend con integración a frontend en React

Este proyecto implementa una **API RESTful** desarrollada con **Node.js**, **Express** y **SQLite**, diseñada para gestionar productos a través de operaciones CRUD.  
Forma parte de un sistema completo que se comunica con un **frontend en React** mediante peticiones HTTP.

---

## 🚀 Objetivo del Proyecto

El objetivo principal es demostrar la conexión entre un **frontend moderno (React + Vite)** y un **backend liviano (Node.js + SQLite)**, aplicando buenas prácticas de desarrollo, modularidad y separación de responsabilidades.

---

## 🏗️ Arquitectura del Proyecto


- **Frontend:** Implementa componentes, servicios y vistas que consumen la API mediante Axios.  
- **Backend:** Gestiona la lógica de negocio y expone endpoints REST.  
- **Base de datos:** Persistencia local con SQLite (archivo `tienda.db`), ideal para pruebas y entornos ligeros.

---

## ⚙️ Tecnologías Utilizadas

| Componente  | Tecnología          | Descripción |
|--------------|--------------------|--------------|
| Lenguaje     | JavaScript (ES6)   | Lógica principal del backend |
| Framework    | Express.js          | Creación del servidor y rutas REST |
| Base de datos| SQLite3             | Almacenamiento ligero y embebido |
| ORM / Query  | Better-SQLite3 o sqlite3 | Acceso directo a la base de datos |
| CORS         | Middleware Express  | Permite la conexión con el frontend |
| Body Parser  | JSON integrado en Express | Manejo de peticiones con cuerpo JSON |

---

## 📂 Estructura del Proyecto

api-crud-sqlite/
├── src/
│ ├── db/
│ │ └── database.js # Configuración de la base de datos SQLite
│ ├── routes/
│ │ └── productos.routes.js # Definición de rutas CRUD
│ ├── controllers/
│ │ └── productos.controller.js # Lógica de controladores
│ ├── models/
│ │ └── producto.model.js # Modelo de datos
│ └── index.js # Punto de entrada del servidor
├── package.json
├── package-lock.json
└── README.md # Este archivo
---

## 🧪 Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| **GET** | `/productos` | Obtiene todos los productos |
| **GET** | `/productos/:id` | Obtiene un producto por ID |
| **POST** | `/productos` | Crea un nuevo producto |
| **PUT** | `/productos/:id` | Actualiza un producto existente |
| **DELETE** | `/productos/:id` | Elimina un producto por ID |

📌 **Ejemplo de petición POST:**

```json
POST http://localhost:3000/productos
Content-Type: application/json

{
  "nombre": "Mouse Gamer",
  "precio": 150,
  "stock": 10,
  "categoria": "Tecnología"
}
```
git clone https://github.com/MarxAlonso/api-crud-sqlite.git
cd api-crud-sqlite

---

## 🧪 Integracion del front con react
git clone https://github.com/MarxAlonso/tienda-crud-frontend.git

---
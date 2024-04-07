const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./db");

const app = express();
dotenv.config();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
//Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
//Get all todos
//Get a todo
//Update a todo
//Delete a todo

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

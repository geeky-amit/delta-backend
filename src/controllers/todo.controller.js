const Todo = require("../model/todo.model");
const asyncHandler = require("express-async-handler");

const createTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!(title || description)) {
    throw new Error("Please enter all the required fields");
  }

  const todo = await Todo.create({ title, description });

  if (todo) {
    res.status(201).json(todo);
  } else {
    res.status(400);
    throw new Error("Failed to todo list");
  }
});

const getTodos = asyncHandler(async (req, res) => {
  const data = await Todo.find();

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error("No Todo list Found");
  }
});

module.exports = { createTodo, getTodos };

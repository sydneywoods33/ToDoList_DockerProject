const express = require("express");
const client = require("./db");
const router = express.Router();
const { ObjectID } = require('mongodb');

const db = client.db("todo_db");
const tasksCollection = db.collection("tasks");

// Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await tasksCollection.find().toArray();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new task
router.post("/tasks", async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const result = await tasksCollection.insertOne({ title, description, status });
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a task
router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const result = await tasksCollection.findOneAndUpdate(
      { _id: new ObjectID(id) },
      { $set: { title, description, status } },
      { returnOriginal: false }
    );
    res.json(result.value);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a task
router.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tasksCollection.deleteOne({ _id: new ObjectID(id) });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
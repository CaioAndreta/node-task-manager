const Task = require("../models/task");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}, "name completed");
    res.status(201).json({ tasks: tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ task: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ task: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }
    res.status(200).json({ task: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

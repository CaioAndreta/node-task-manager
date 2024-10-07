const {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const express = require("express");
const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;

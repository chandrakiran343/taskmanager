const express = require('express');

const router = express.Router();
const { getTasks, getTask,createTask,deleteTask,updateTask } = require('../controllers/tasks');
router.get("/", getTasks).post("/",createTask);

router.get("/:id", getTask).patch("/:id",updateTask).delete("/:id", deleteTask);
module.exports = router;


// mongodb+srv://chunky:Chunky2002@taskmanager.nywqval.mongodb.net/test   
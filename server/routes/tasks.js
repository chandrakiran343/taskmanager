const express = require('express');

const router = express.Router();
const { getTasks, getTask,createTask,deleteTask,updateTask } = require('../controllers/tasks');
router.get("/", (req,res) => getTasks(req,res)).post("/",createTask);

router.get("/:id", (req,res) => getTask(req,res)).patch("/:id",(req,res) => updateTask(req,res)).delete("/:id",(req,res) => deleteTask(req,res));
module.exports = router;


// mongodb+srv://chunky:Chunky2002@taskmanager.nywqval.mongodb.net/test   
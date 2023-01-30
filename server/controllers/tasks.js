const Task = require("../models/Task")

const getTasks = async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ error });
    }
}
const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: "No task found" })
        }
        res.status(200).json({ task });

    } catch (error) {
        res.status(500).json({ msg: "Did not found task with id: "+taskID });
    }
}
const createTask = async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(202).json(task)
    }
    catch (e) {
        res.status(500).json({ msg: e })
    }
}
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        console.log(taskID);
        const task = await Task.findOneAndUpdate(taskID, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).json({ msg: "No task found" })
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error});
    }
}
const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: "No task found" })
        }
        res.status(200).json({ msg: "Deleted the task successfully"});
    } catch (error) {
        res.status(500).json({ msg: "Did not found task with id: "+taskID });
    }
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}
const Task = require("../models/Task")
const asyncwrapper = require("../middleware/asyncwrapper")
const {createCustomError} = require("../middleware/customError")
const getTasks = asyncwrapper(async (req, res, next) => {

        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    }
)

const getTask = asyncwrapper( async (req, res,next) => {
        const {id: taskID} = req.params;
        const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomError("Could not find the specified task", 404));
        }
    res.status(200).json({ task });
})

const createTask = asyncwrapper(async (req, res,next) => {
    const task = new Task(req.body)
        await task.save()
        res.status(202).json(task)
})

const updateTask = asyncwrapper( async (req, res,next) => {
        const { id: taskID } = req.params;
        console.log(taskID);
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        });
    if (!task) {
        return next(createCustomError("Could not find the specified task", 404));
        }
        res.status(200).json({ task });
})

const deleteTask = asyncwrapper(async (req, res,next) => {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError("Could not find the specified task", 404));
        }
        res.status(200).json({ msg: "Deleted the task successfully"});
})

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}
const Task = require('../models/Task');

const getTasks = async (req, res) => {
    try {
        const task = await Task.find({});
        res.json(task);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
}

const createTask = async (req, res) => {
    const { body } = req.body;
    const newTask = new Task({ body });
    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
}

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
}

const updateTaskById = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
            new: true
        });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
}

const deleteTaskById = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.taskId);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
}

module.exports = { getTasks, createTask, getTaskById, updateTaskById, deleteTaskById };




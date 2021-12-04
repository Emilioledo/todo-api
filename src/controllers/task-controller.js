const getTasks = (req, res) => {
    res.json('Get Tasks');
}

const createTask = (req, res) => {
    res.json('Create a task');
}

const getTaskById = (req, res) => {
    res.json('Get tasks by ID');
}

const updateTaskById = (req, res) => {
    res.json('Update tasks by ID');
}

const deleteTaskById = (req, res) => {
    res.json('Delete tasks by ID');
}

module.exports = { getTasks, createTask, getTaskById, updateTaskById, deleteTaskById };




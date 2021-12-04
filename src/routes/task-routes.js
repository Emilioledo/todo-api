const express = require('express');
const router = express.Router();
const taskControllers = require('../controllers/task-controller');

router.get('/', taskControllers.getTasks);
router.post('/', taskControllers.createTask);
router.get('/:taskId', taskControllers.getTaskById);
router.put('/:taskId', taskControllers.updateTaskById);
router.get('/:taskId', taskControllers.deleteTaskById);

module.exports = router;
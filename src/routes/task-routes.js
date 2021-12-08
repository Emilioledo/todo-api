const express = require('express');
const router = express.Router();
const authJwt = require('../middleware/auth-jwt');
const taskControllers = require('../controllers/task-controller');

router.get('/', authJwt.verifyToken, taskControllers.getTasks);
router.post('/', authJwt.verifyToken, taskControllers.createTask);
router.get('/:taskId', authJwt.verifyToken, taskControllers.getTaskById);
router.put('/:taskId', authJwt.verifyToken, taskControllers.updateTaskById);
router.delete('/:taskId', authJwt.verifyToken, taskControllers.deleteTaskById);

module.exports = router;
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');

router.get('/employees', employeeController.getAllEmployees);

module.exports = router;

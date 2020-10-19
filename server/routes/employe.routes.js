const express = require('express');
const employeeCtrl = require('../controllers/employee.controller');
const router = express.Router();

const emploCtrl = require('../controllers/employee.controller');

router.get('/', emploCtrl.getEmployees);
router.post('/', emploCtrl.createEmployee);
router.get('/:id', emploCtrl.getEmployee);
router.put('/:id', employeeCtrl.editEmployee);
router.delete('/:id', employeeCtrl.deleteEmployee);

module.exports = router;


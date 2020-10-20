const Employee = require('../models/employee');
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res)=> {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res)=> {
    const employee = new  Employee(req.body);
    await employee.save();
    res.json({
        'status': "guardado"
    });
};

employeeCtrl.getEmployee = async(req, res)=> {
  
   const employee = await Employee.findById(req.params.id);
   res.json(employee);  
};

employeeCtrl.editEmployee = async(req, res)=>{

    const {id } = req.params
    const employee = {
        name: req.body.name,
        office: req.body.office,
        position: req.body.position,
        salary: req.body.salary
    }
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({'status': 'employeed update'})

    
};

employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'employee deleted'})
};



module.exports = employeeCtrl;
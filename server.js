const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;



async function formatEmployeeData(employee, token) {
    const dependentOnEmployeeDetails = await getDependentOnEmployeDetails(employee.id, token);
    return {
      id: employee.id,
      name: employee.displayName,
      title: employee.jobTitle,
      email: employee.workEmail,
      first_name: employee.firstName,
      last_name: employee.lastName,
      preferred_name: employee.preferredName,
      display_name: employee.displayName,
      photo_url: employee.photoUrl,
      personal_phone_number: employee.mobilePhone,
      work_email: employee.workEmail,
      job_title: employee.jobTitle,
      department: employee.department,
      supervisor: employee.supervisor,
      dependentOnEmployeeDetails,
    };
  }
  
  async function getEmployeesData(token) {
    try {
      const response = await axios.get('https://api.bamboohr.com/api/gateway.php/onestack/v1/employees/directory', {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Basic ' + token
        }
      });
  
      const employees = await Promise.all(response.data.employees.map(async (employee) => {
        return formatEmployeeData(employee, token);
      }));
  
      const result = response.data.employees;
  
      return { employees, result };
    } catch (error) {
        console.log("Error ",error);
      throw new Error(error);
    }
  }

  async function getDependentOnEmployeDetails(employeeId, token) {
    try {
      const response = await axios.get(`https://api.bamboohr.com/api/gateway.php/onestack/v1/employeedependents/${employeeId}`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Basic ' + token
        }
      });
  
      const dependentsInformation = response.data && response.data['Employee Dependents'].map(dependent => ({
        date_of_birth: dependent.dateOfBirth,
        first_name: dependent.firstName,
        last_name: dependent.lastName,
        relationship: dependent.relationship
      }));
  
      return dependentsInformation;
    } catch (error) {
      return "dependentsInformation doesnot exist";
    }
  }

  app.get('/employees', async (req, res) => {
    try {
        const token = req.headers.authorization;
        console.log({token});
        const { employees } = await getEmployeesData(token);
        res.json(employees);
    } catch (error) {
      console.log("Error ",error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
    

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

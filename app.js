const express = require('express');
const employeeRoutes = require('./routes/employee');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', employeeRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

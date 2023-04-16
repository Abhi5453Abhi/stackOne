# stackOne

This is an API that fetches employee data and dependent information from the BambooHR API using Node.js and Express.

# Prerequisites
Node.js and npm must be installed on your system.
You will need a BambooHR account and API key to use this API.

# Installation
1. Clone the repository or download the zip file and extract it.
2. Run npm install to install all the required dependencies.
3. Run node app.js to start the server.

# Usage
1. To retrieve a list of all employees and their details, send a GET request to http://localhost:3000/employees with an Authorization header that includes your BambooHR API key. If you want to fetch dependent information as well, include the query parameter dependents_information with a value of "true".
2. The response will be an array of employee objects with their details and dependent information.
3. You can also use the following curl command to send the GET request: 
    curl --location --request GET 'http://localhost:3000/employees' \
--header 'Authorization: <your token>'
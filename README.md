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
1. To get a list of all employees and their details, make a GET request to http://localhost:3000/employees with the authorization header containing your BambooHR API key.
2. The response will be an array of employee objects with their details and dependent information.
3. curl --location --request GET 'http://localhost:3000/employees' \
--header 'Authorization: <your token>'


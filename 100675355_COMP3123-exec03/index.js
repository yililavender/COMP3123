var http = require("http");
//TODO - Use Employee Module here
var employee = require('./Employee')

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081



//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
           
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write(JSON.stringify(employee.employees))
           
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascwriteing order in JSON Array
            res.write(JSON.stringify(employee.display()))
           
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            res.write(JSON.stringify(employee.salary()))
           
            //e.g. { "total_salary" : 100 }  
        }
        res.write(`{"error": "${http.STATUS_CODES[404]}"}`)
       
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
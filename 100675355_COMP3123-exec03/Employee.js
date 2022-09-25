//TODO - Create Employee Module here and export to use in index.js
const e = require("express");
let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
];

let display = () => {
    let full_name = []
    for (let i in employees) { 
        full_name.push( `${employees[i].firstName} ${employees[i].lastName}`)
        full_name.sort()    
    } 
    return full_name;
}

let salary = () => {
    let total = 0
        for(let i in employees){
            total += employees[i].Salary
        }
    return `Total salary: ${total} `
}


module.exports = {employees,display,salary}


  
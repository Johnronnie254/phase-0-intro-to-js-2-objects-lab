const employee = {
    "name": "Sam",
    "streetAddress": "11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployees = {...employee};
    newEmployees[key]=value;
    return newEmployees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployees = {...employee};
    newEmployees[key]=value;
    employee.streetAddress = "12 Broadway";
    return newEmployees;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployees = {...employee};
    delete newEmployees[key];
    return newEmployees;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}


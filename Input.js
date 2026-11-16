const employees = [
  {  name: "John", department: "IT",salary: 60000  },
  { name: "David", department: "HR",salary: 45000 },
  { name: "Mike", department: "IT", salary: 70000 },
  { name: "Sarah", department: "Finance", salary: 50000 }
]

function getEmployees() {
  return employees;
}
console.log(getEmployees())

function getHighestPaidEmployee() {
    let highestPaidEmployee = employees[0];
    for (let i = 1; i < employees.length; i++) {
        if (employees[i].salary > highestPaidEmployee.salary) {
            highestPaidEmployee = employees[i];
        }
    }
    return highestPaidEmployee;
}

console.log("Highest Salary Employee:", getHighestPaidEmployee());


function getAverageSalary()
{
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].salary;
    }
    return totalSalary / employees.length;
}

console.log("Average Salary:", getAverageSalary());

function filterEmployeesByDepartment(department) {
    return employees.filter(employee => employee.department === department);
}

console.log( filterEmployeesByDepartment("IT"));


const Input=[5,2,8,2,5,9,1]

function removeDuplicates(Input) {
    let uniqueArray = [];
    for (let i = 0; i < Input.length; i++) {
        if (!uniqueArray.includes(Input[i])) {
            uniqueArray.push(Input[i]);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates(Input));


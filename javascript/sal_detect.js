let sal= Number(prompt("Enter the salary:"));
let twork= Number(prompt("Enter the working days:"));
let work= Number(prompt("Enter the cwork days:"));
let det= Number(prompt("Enter the amount"));

let pds= sal/twork;
let csal =pds*work;
let detamt= csal-det;
document.write("This month Salary:"+detamt);

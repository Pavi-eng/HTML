let a= Number(prompt("enter the value:"));
if(a%3==0 && a%5==0){
    document.write("Frizz Bus");
}
else if(a%3==0){
    document.write("Frizz");
}
else if(a%5==0){
    document.write("Bus")
}
else{
    document.write(a);
}

Days 

let num= Number(prompt("Enter the number:"));
if(num==1){
    document.write("Sunday");
}
else if(num==2){
    document.write("Monday");
}
else if(num==3){
    document.write("Tuesday");
}
else if(num==4){
    document.write("wednesday");
}
else if(num==5){
    document.write("Thursday");
}
else if(num==6){
    document.write("Friday");
}
else if(num==7){
    document.write("Saturday");
}
else{
    document.write("No more days");
}

arthmetic

let a= Number(prompt("enter the number:"));
let b= Number(prompt("enter the number:"));
let c= Number(prompt("enter the number:"));

if(c==1){
    document.write(a+b);
}
else if(c==2){
    document.write(a-b);
}
else if(c==3){
    document.write(a*b);
}
else if(c==4){
    document.write(a/b);
}
else{
    document.write(c)
}
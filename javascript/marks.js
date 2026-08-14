const Tamil= Number(prompt("Enter the Tamil Mark:"));
const English= Number(prompt("Enter the English Mark:"));
const Maths= Number(prompt("Enter the Maths Mark:"));
const Physics= Number(prompt("Enter the Physics Mark:"));
const Chemistry= Number(prompt("Enter the Chemistry Mark:"));
const Biology=Number(prompt("Enter the biology Mark:"))

let cut_off=Maths+((Physics+Chemistry)/2);
let cut_offp= (cut_off/200)*100;
document.write("cut_off mark:" +cut_off+ "</br>");
document.write("cut_offp:" +cut_offp );
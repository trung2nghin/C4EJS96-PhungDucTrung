//Bài 1
console.log("Bài 1:");
console.log("1. Trong trường các hợp: biến bắt đầu bằng số, biến có kí tự đặc biệt (trừ $ và _), biến có chứa từ khoá của JS ");
console.log("Ví dụ: ");
console.log("Biến bắt đầu bằng số: let 2000trung");
console.log("Biến có kí tự đặc biệt: let trung 2000,trung-2000");
console.log("Biến có chứa từ khoá của JS: let double");
console.log("2.Kiểm tra kiểu dữ liệu của biến bằng toán từ typeof");
let x=10
console.log("VD: x=10 is a "+ typeof x);
//Bài 2
console.log("Bài 2: 1-b, 2-a, 3-e , 4-d");
//Bài 3
console.log("Bài 3: ");
let message = 'Coding is great';
console.log("a, " + message);
let studentCount = 0;
console.log("b, " + studentCount);
//Bài 4
console.log("Bài 4: ");
message = 'Coding might not be easy, but still great'
console.log("a, "+message);
studentCount = 16;
console.log("b, "+ studentCount);
message=message.toLowerCase();
console.log("c, "+message);
studentCount++;
console.log("d, "+studentCount);
// Bài 5
alert("You look beautiful today");
// Bài 6
let name = prompt("Hi there, your name please?");
alert("Hi " +name);
// Bài 7
let firstname = prompt("Enter your first name");
let lastname = prompt("Enter your last name");
alert("Hi "+firstname+" "+lastname)
// Bài 8
let y = prompt("Enter side length of the square");
alert("The square area is "+y*y);
// Bài 9
let z = prompt("Enter the radius of the circle");
alert("The circle area is "+z*z*3.14159265359);
// Bài 10
let m = prompt("Enter the temperature in Celcius");
alert(m+"(C) = "+(m*1.8+32)+"(F)");
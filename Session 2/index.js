//Bài 1
console.log("1.var và const đều để khai báo biến ");
console.log("2. let và var giống nhau ngoại trừ phạm vi hoạt của chúng");
console.log(
  "var có tầm hoạt đồng rộng hơn (cả bên ngoài scope đã khai báo) còn let thì chỉ hoạt động bên trong scope đã khai báo"
);
console.log(
  "3. Khi gán giá trị cho const thì sẽ không thể thay đổi đc giá trị đó nữa còn let thì có thể thay đổi  "
);
console.log(
  "4. let: khi cần code dễ đọc và sự chính xác \n const: sử dụng khi muốn cố định giá trị biến "
);
//Bài 2
console.log("1. Boolean là phép chỉ có 2 giá trị đúng hoặc sai");
console.log(
  "2. Thứ tạo ra boolean thường là các đoạn mã khi sử dụng lệnh if hoặc vòng lặp for"
);
console.log("");

// Bài 3
console.log("a. ");
for (let a = 0; a < 7; a++) {
  console.log(a);
}
console.log("\nb. ");
let b = prompt("Enter a number?");
for (let x = 0; x < b; x++) {
  console.log(x);
}
console.log("\nc ");
let n = prompt("Enter n");
for (let y = 3; y < n; y++) {
  console.log(y);
}
console.log("\nd ");
let c = prompt("Enter c");
let m = prompt("Enter m");
for (let z = c; z < m; z++) {
  console.log(z);
}
console.log("\ne ");
let e = parseInt(prompt("Enter e"));
let f = parseInt(prompt("Enter f"));
for (let g = e; g < f; g += 3) {
  console.log(g);
}
console.log("\nf ");
let p = parseInt(prompt("Enter p"));
let q = parseInt(prompt("Enter q"));
let s = parseInt(prompt("Enter s"));
for (let o = p; o < q; o = o + s) {
  console.log(o);
}

//Bài 4
let numx = parseInt(prompt("Enter start number"));
let kq = 1;
for (let i = 1; i <= a; i++) {
  kq = kq * i;
}
alert("the factorial of " + numx + " is " + result);

//Bài 5
let age = prompt("How old are you ?");
if (age >= 14) {
  alert("Enjoy!");
} else {
  alert("You are not old enough to view this content");
}

//Bài 6
let num = prompt("Enter a number");
if (num >= 0 && num < 4.5) {
  alert("Lower half of 9");
} else if (num > 4.5 && num <= 9) {
  alert("Higher half of 9");
} else if (num == 4.5) {
  alert("Half of 9");
}

//Bài 7
let num1 = prompt("n = ");
let num2 = prompt("x = ");
if (num1 >= 0 && num1 < num2 / 2) {
  alert(num1 + " is in lower half of " + num2);
} else if (num1 > num2 / 2 && num1 <= num2) {
  alert(num1 + " is in higher half of " + num2);
} else if (num1 == num2 / 2) {
  alert(num1 + " is in half of " + num2);
}

//Bài 8
let num3 = prompt("x = ");
if (num3 % 2 == 0) {
  alert(num3 + " is an even number");
} else {
  alert(num3 + " is an odd number");
}

//Bài 10
let w = parseFloat(prompt("Your weight in kg?"));
let h = parseFloat(prompt("Your height in m?"));
let bmi = w / (h * h);
alert("Your BMI is " + bmi);
if (bmi < 16) {
  alert("You are Severely underweight");
} else if (bmi >= 16 && bmi < 18.5) {
  alert("You are underweight");
} else if (bmi >= 18.5 && bmi < 25) {
  alert("You are Normal");
} else if (bmi >= 25 && bmi <= 30) {
  alert("You are overweight");
} else if (bmi > 30) {
  alert("You are obese");
}
// //Bài 11
// console.log("\na. A square ");
// function square() {
//   for (var sq = 1; sq <= 4; sq++) {
//     fd(50);
//     lt(90);
//   }
// }
// square();
// console.log("\nb. A triangle");
// function triangle() {
//   for (var tri = 1; tri <= 3; tri++) {
//     fd(50);
//     rt(120);
//   }
// }
// triangle();
// console.log("c. A pentagon ");
// function pentagon() {
//   for (var pen = 1; pen <= 5; pen++) {
//     fd(50);
//     rt(72);
//   }
// }
// pentagon();

// console.log("d. A hexagon ");
// function hexagon() {
//   for (var hex = 1; hex <= 6; hex++) {
//     fd(50);
//     rt(60);
//   }
// }
// hexagon();

// //Bài 12
// let edge = parseInt(prompt("Enter number of edges"));
// if ((edge = 3)) {
//   function triangle1() {
//     for (var tri1 = 1; tri1 <= 3; tri1++) {
//       fd(50);
//       rt(120);
//     }
//   }
//   triangle1();
// } else if ((edge = 4)) {
//   function square1() {
//     for (var sq1 = 1; sq1 <= 4; sq1++) {
//       fd(50);
//       rt(90);
//     }
//   }
//   square1();
// } else if ((edge = 5)) {
//   function pentagon1() {
//     for (var pen1 = 1; pen1 <= 5; pen1++) {
//       fd(50);
//       rt(72);
//     }
//   }
//   pentagon1();
// } else if ((edge = 6)) {
//   function hexagon1() {
//     for (var hex1 = 1; hex1 <= 6; hex1++) {
//       fd(50);
//       rt(60);
//     }
//   }
//   hexagon1();
// } else if ((edge = 999)) {
//   function circle1() {
//     for (var cir = 1; cir <= 720; cir++) {
//       fd(1);
//       rt(1);
//     }
//   }
//   circle1();
// }

// //Bài 13
// let polygons = prompt("How many polygons?");
// function triangle2() {
//   for (var tri2 = 1; tri2 <= 3; tri2++) {
//     fd(50);
//     rt(120);
//   }
// }
// function square2() {
//   for (var sq2 = 1; sq2 <= 4; sq2++) {
//     fd(50);
//     rt(90);
//   }
// }
// function pentagon2() {
//   for (var pen2 = 1; pen2 <= 5; pen2++) {
//     fd(50);
//     rt(72);
//   }
// }
// function hexagon2() {
//   for (var hex2 = 1; hex2 <= 6; hex2++) {
//     fd(50);
//     rt(60);
//   }
// }
// function heptagon2() {
//   for (var hep2 = 1; hep2 <= 7; hep2++) {
//     fd(50);
//     rt(51.429);
//   }
// }
// if (polygons = 1){
//     triangle2()
// }
// else if (polygons=2){
//     triangle2()
//     square2()
// }
// else if (polygons=3){
//     triangle2()
//     square2()
//     pentagon2()
// }
// else if (polygons=4){
//     triangle2()
//     square2()
//     pentagon2()
//     hexagon2()
// }
// else if (polygons=5){
//     triangle2()
//     square2()
//     pentagon2()
//     hexagon2()
//     heptagon2()
// }

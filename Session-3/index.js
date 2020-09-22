//Bài 1
//C1
{let a = 5,
  b = 6;
[a, b] = [b, a];
console.log(a, b);
}
//C2
{let a = 5,
  b= 6;
  c = a;
  a = b;
  b = c;
  console.log(a,b);
}

//Bài 2
let x = "Hello beauty there";
result = x.split(' ');
console.log(result);

//Bài 3
{
const a = [4, 5, 7 , -8];
console.log(...a);
}

//Bài 4
{
    var x = prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?")
let items = ["Jeans","T-Shirt","Socks"];
if (x != "c" && x != "r" &&x != "u" &&x != "d" && x != "C" && x != "R" &&x != "U" &&x != "D" ){
    console.log(alert("This command is not supported"));
}
if (x == "r" || x=="R" ){
    for (let i = 0 ; i < items.length; i++){
        console.log([i+1]+". "+items[i]);
    }
}
if (x == "c" || x == "C"){
    let newitems = prompt("Enter the name of the item");
    alert("Done");
    items.push = newitems;
    console.log(items);
}
if (x=="u" || x == "U"){
    let num = parseInt(prompt("Enter the position you want to update"));
    let newitems = prompt("Enter the name")
    items[num] = newitems
    console.log(items);
}
if (x=="d" || x =="D"){
    let num = parseInt(prompt("Enter the position you want to delete"));
    items.splice(num,1);
    console.log(items);
}
}


//Bài 5
{
    let x = prompt("Enter a squence of Number, separated by commas(,)")
    result = x.split(",");
    console.log(result);
    let sum = 0
    for(i=0;i<result.length;i++){
        sum+=parseInt(result[i],10)
    }
    alert("The sum of them is "+sum);
}

//Bài 6
{
  let x = prompt("Enter a squence of Number, separated by "," ");
  result = x.split(",");
  console.log(x);
  let min = result[0];  //khai báo min ở vị trí đầu tiên của mảng
  for (let i = 0; i < result.length; i++) {
    if (result[i] > min) { // nếu kq lớn hơn giá trị min
      result = min;  //gán giá trị min = kq đó
    }
  }
  alert("The smallest number is " + min);
}

//Bài 7
{
    let x = ['3','4','6','-9','10','-88'];
    let y = prompt("Enter a number");
    for (var i=0;i<x.length;i++){
        if (x[i] == y){
            console.log(y + " is FOUND in my array at index " +[i] );
            break;
        }
    }
    if(i==x.length){
        console.log(y + " is NOT found in my array");
    }
}

//Bài 8
let size = [5,7,300,90,24,50,75];
console.log("Hello, my name is Duc Trung and here is my sheep sizes:")
let x = (console.log(...size));
let y = parseInt(Math.max(...size));
console.log("Now my biggest sheep has size "+ y +", let's shave it");

//Bài 9
{
  const cl = ["red", "gray", "blue", "purple", "cyan"];
  function square() {
    for (var i = 1; i <= 4; i++) {
      fd(20);
      lt(90);
    }
  }
  function square2() {
    for (var i = 1; i <= 4; i++) {
      fd(40);
      lt(90);
    }
  }
  function square3() {
    for (var i = 1; i <= 4; i++) {
      fd(60);
      lt(90);
    }
  }
  function square4() {
    for (var i = 1; i <= 4; i++) {
      fd(80);
      lt(90);
    }
  }
  if (cl == "red") {
    square3();
  }
  if (cl == "gray") {
    square();
  }
  if (cl == "blue") {
    square();
  }
  if (cl == "purple") {
    square2;
  }
  if (cl == "cyan") {
    square4;
  }
}

//Bài 10
{
    let x = prompt("Enter a sequence of names, separated by commas(,)")
    let y = x.split(",")
    let z = y.map(m =>"<"+m+">")
    alert(y+" => "+z);
}

//Bài 11
{
    let x = prompt("Enter a sequence number");
    let y = x.split(",");
    let z = y.filter(n => n%2!=0);
    alert(y+" => "+z);
}



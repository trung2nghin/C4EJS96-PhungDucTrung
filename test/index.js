// //A
// //1.
// function findOppositeNumber(n, x) {
//   n = Number(prompt("Nhập số n"));
//   if (n % 2 == 0 && n >= 4 && n <= 20) {
//     x = Number(prompt("Nhập số x"));
//     if (x >= 0 && x < n / 2) {
//       console.log(x + n / 2);
//     } else if (x >= n / 2 && x <= n) {
//       console.log(x - n / 2);
//     }
//   }
// }
// findOppositeNumber();

// //2
// function merge2String(str1, str2) {
//     let finalStr = ``;
//     let totalLength = 0;
//     if (str1.length > str2.length) {
//         totalLength = str1.length;
//     } else {
//         totalLength = str2.length;
//     }
//     for (let i = 0; i < totalLength; i++) {
//         let char1 = str1[i];
//         let char2 = str2[i];
//         if (str1[i] == undefined) {
//             char1 = ``;
//         } else if (str2[i] == undefined) {
//             char2 = ``;
//         }
//         finalStr += char1 + char2;
//     }``
//     return finalStr;
// }
// console.log(merge2String(abc, 123));
// console.log(merge2String(abcd, 0123));

//B
let btnR = document.getElementById('btn_roll')
let inputNumber = document.getElementById('inputNumber')

let Count=0;

console.log( getRandomNumber())

function CheckNumber() {
    let number = inputNumber.value;
    while (true) {
        if (number == "") {
            alert('Không để rỗng');
            break;
        } else if (isNaN(number)) {
            alert('Nhập Số ???');
            break;
        } else if (number < 1 || number > 10) {
            alert('Số cần nằm trong khoảng 0-->10');
            break;
        } else {
            Count++;
            return number ;
        }
    }
}

btnR.addEventListener('click', () => {
    let number = CheckNumber();
    
    if (number == randomNumber) {
        alert('Chúc mừng, bạn đã đoán đúng ');
        Count = 0;
    }
    if 
    (!isNaN(number) && (number <= 10 && number >= 1)) {
        alert(`Số lần thử bạn còn lại ${3 - Count} `);
    }
    if (Count == 3) {
        alert(`Bạn đã thua! Con số may mắn là:  ${randomNumber}`);
        alert("Chơi lại nào!!!")
    }
});


// let RandomNumber1 = Number(Math.floor(Math.random() * 10) + 1);
let RandomNumber1 = getRandomNumber()
function getRandomNumber() {
    randomNumber = Number(Math.floor(Math.random() * 10) + 1);
    return randomNumber;
}
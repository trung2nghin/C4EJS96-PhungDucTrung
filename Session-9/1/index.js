// //cau 1
// // Cách 1:
// {
//   let promise1 = new Promise((resolve, reject) => {
//     resolve(setTimeout(() => console.log("Promise is da best"), 5000));
//   });
//   return promise1;
// }
// // Cách 2
// {
//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 5000);
//   });
//   promise2.then(() => {
//     console.log("Promise is da best");
//   });
// }

// // Bài 1.2
// {
//   console.log("Bài 1.2");
//   function resolve5s() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Promise is da best 1.2");
//       }, 5000);
//     });
//   }
//   async function load() {
//     const data = await resolve5s();
//     console.log(data);
//   }
//   load();
// }
// // Bài 1.3
// {
//   let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 5000);
//   });
//   promise3.then(() => {
//     console.log("Promise is da best 1.3");
//   });
// }

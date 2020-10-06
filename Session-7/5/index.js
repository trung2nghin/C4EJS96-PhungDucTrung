document.addEventListener("DOMContentLoaded", function () {
  let y = document.getElementsByTagName("div");
  for (i = 0; i < y.length; i++) {
    console.log(y[i]);
  }
  console.log("-------------------------------------------");
  let x = document.getElementsByClassName("singer");
  console.log(x[2 - 1]);
  console.log("-------------------------------------------");
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let bt = document.getElementById("upper_btn");
  console.log(bt);

  let btn = document.getElementById("upper_btn");
  btn.addEventListener(`click`, (e) => {
    let btn1 = document.getElementById("name_input").value.toUpperCase();
    document.getElementById("result_div").innerHTML = btn1;
    console.log(btn1);
  });

  let x = document.getElementById("name_input");
  console.log(x);

  let y = document.getElementById("result_div");
  console.log(y);
});



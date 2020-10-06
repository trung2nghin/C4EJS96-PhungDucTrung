document.addEventListener("DOOMContentLoaded",function(){
    let bt = document.getElementById("Button")
    bt.addEventListener(`click`,(e)=>{
        console.log(e.target.bt);
    })
})
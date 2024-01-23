let btn = document.querySelector("#btn");
let rgb = document.querySelector(".showRgb");
let printColor = document.querySelector(".colorBox");
btn.addEventListener("click",() =>{
    let val1=Math.floor(Math.random()*256);
    let val2=Math.floor(Math.random()*256);
    let val3=Math.floor(Math.random()*256);
    console.log(val1,val2,val3);
    rgb.innerText=`rgb(${val1}, ${val2}, ${val3})`;
    document.querySelector(".colorBox").style.backgroundColor=`rgb(${val1}, ${val2}, ${val3})` ;
});
let bg = document.querySelector("#bg");
let clr = document.querySelector("#clr");
let p = document.querySelector("p");

bg.addEventListener("click", setBackgroundColor);
clr.addEventListener("click", setColor);

function setBackgroundColor(event){
    let color = event.target.value;
    document.body.style.backgroundColor = color;
}

function setColor(event){
  let color = event.target.value;
  p.style.color = color;
}
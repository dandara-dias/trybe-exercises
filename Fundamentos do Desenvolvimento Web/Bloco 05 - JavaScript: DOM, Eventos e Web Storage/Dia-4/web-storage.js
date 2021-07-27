let bg = document.querySelector("#bg");
let clr = document.querySelector("#clr");
let p = document.querySelector("p");
let size = document.querySelector("#ft-sz");

bg.addEventListener("click", setBackgroundColor);
clr.addEventListener("click", setColor);
size.addEventListener("click", setSize);

function setBackgroundColor(event){
    let color = event.target.value;
    document.body.style.backgroundColor = color;
}

function setColor(event){
  let color = event.target.value;
  p.style.color = color;
}

function setSize(event){
  let size = event.target.value;
  p.style.fontSize = `${size}px`;
}
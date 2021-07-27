let bg = document.querySelector("#bg");
let clr = document.querySelector("#clr");
let p = document.querySelector("p");
let size = document.querySelector("#ft-sz");
let height = document.querySelector("#ft-ht");
let font = document.querySelector("#ft-fml");

bg.addEventListener("click", setBackgroundColor);
clr.addEventListener("click", setColor);
size.addEventListener("click", setSize);
height.addEventListener("click", setHeight);
font.addEventListener("click", setFont);

function setBackgroundColor(event){
    let color = event.target.value;
    document.body.style.backgroundColor = color;

    localStorage.setItem("5.4-background-color", color);
}

function setColor(event){
  let color = event.target.value;
  p.style.color = color;

  localStorage.setItem("5.4-color", color);
}

function setSize(event){
  let size = event.target.value;
  p.style.fontSize = `${size}px`;

  localStorage.setItem("5.4-font-size", `${size}px`);
}

function setHeight(event){
  let height = event.target.value;
  p.style.lineHeight = height;

  localStorage.setItem("5.4-line-height", height);
}

function setFont(event){
  let family = event.target.value;
  p.style.fontFamily = family;
}

let savedBg = localStorage.getItem("5.4-background-color");
let savedColor = localStorage.getItem("5.4-color");
let savedSize = localStorage.getItem("5.4-font-size");
let savedHeight = localStorage.getItem("5.4-line-height");

document.body.style.backgroundColor = savedBg;
p.style.color = savedColor;
p.style.fontSize = savedSize;
p.style.lineHeight = savedHeight;

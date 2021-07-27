let bg = document.querySelector("#bg");

bg.addEventListener("click", setBackgroundColor)

function setBackgroundColor(event) {
    let color = event.target.value;
    document.body.style.backgroundColor = color;
}
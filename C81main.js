var canvas = document.getElementById("aNewCanvas");

ctx = canvas.getContext("2d");

color = 'red';

radius = 40;

ctx.beginPath();

ctx.strokeStyle = color;

ctx.lineWidth = 2;

ctx.arc(300, 200, radius, 0, 2 * Math.PI);

ctx.stroke();

function submit() {
    radius = document.getElementById("inputbox1").value;
}

canvas.addEventListener('mousedown', getPosition);

function getPosition(e) {

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log(`x = ${mouse_x}`);
    console.log(`y = ${mouse_y}`);
    
    drawCircle(mouse_x, mouse_y)
}

function drawCircle(x, y) {
    ctx.beginPath();

    ctx.lineWidth = 2;

    ctx.arc(x, y, radius, 0, 2 * Math.PI);

    ctx.stroke();
}
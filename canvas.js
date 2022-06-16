let canvas = document.querySelector('canvas');
canvas.height = window.screen.height;
canvas.width = window.screen.width;

let penColor = 'red';
let penwidth = 2;
let eraserColor = 'white';
let eraserWidth = 3;

let tool = canvas.getContext('2d');
tool.strokeStyle = penColor;

let isDrawing = false;

canvas.addEventListener('mousedown',(e)=> {
    isDrawing = true;
    tool.beginPath()
    tool.moveTo(e.clientX,e.clientY);
})

canvas.addEventListener('mousemove',(e) => {
    if(isDrawing) {
        tool.lineTo(e.clientX,e.clientY);
        tool.stroke();
    }
})

canvas.addEventListener('mouseup',() => {
    isDrawing = false;
})

let toolColorRed = document.querySelector('.toolColorRed');
toolColorRed.addEventListener('click',() => {
    penColor = 'red';
    tool.strokeStyle = penColor;
})

let toolColorBlue = document.querySelector('.toolColorBlue');
toolColorBlue.addEventListener('click',() => {
    penColor = 'blue';
    tool.strokeStyle = penColor;
})

let toolColorGreen = document.querySelector('.toolColorGreen');
toolColorGreen.addEventListener('click',() => {
    penColor = 'green';
    tool.strokeStyle = penColor;
})

let rangeInput = document.querySelector('.inputPenTool input');
rangeInput.addEventListener('change',() => {
    penwidth = rangeInput.value;
    console.log(penwidth);
    tool.lineWidth = penwidth;
})

let newEraser = document.querySelector('.eraser');
let isEraser = false;
newEraser.addEventListener('click',() => {
    isEraser ? isEraser = false : isEraser = true;

    if(isEraser) {
        tool.strokeStyle = 'white';
        tool.lineWidth = eraserWidth;
    } else if(!isEraser) {
        tool.strokeStyle = penColor;
        tool.lineWidth = penwidth;
    }
})

let eraserRange = document.querySelector('.inputeraser input');
eraserRange.addEventListener('change',() => {
   eraserWidth = eraserRange.value;
   tool.lineWidth = eraserWidth;
})

let file_download = document.querySelector('.file_download');
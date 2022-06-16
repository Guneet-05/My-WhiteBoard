let canvas = document.querySelector('canvas');
canvas.height = window.screen.height;
canvas.width = window.screen.width;

let penColor = 'red';
let penwidth = 2;
let eraserColor = 'white';
let eraserWidth = 3;

let canvasUndoRedoData = [];
tracker = 0;

let tool = canvas.getContext('2d');
tool.strokeStyle = penColor;

let isDrawing = false;

canvas.addEventListener('mousedown',(e)=> {
    isDrawing = true;
    // tool.beginPath()
    // tool.moveTo(e.clientX,e.clientY);

    let data = {
        x : e.clientX,
        y : e.clientY
    }
    beginPath(data);

})

canvas.addEventListener('mousemove',(e) => {
    if(isDrawing) {
        // tool.lineTo(e.clientX,e.clientY);
        // tool.stroke();

        let data = {
            x : e.clientX,
            y : e.clientY
        }

        drawStroke(data);

    }
})

canvas.addEventListener('mouseup',() => {
    isDrawing = false;
    let imageData = canvas.toDataURL();
    canvasUndoRedoData.push(imageData);
    tracker = canvasUndoRedoData.length - 1; 
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
file_download.addEventListener('click',() => {
    let url = canvas.toDataURL()
    let a = document.createElement('a')
    a.href = url;
    a.download = 'whiteBoardImage.jpg'
    a.click()
})

let undo = document.querySelector('.undo');
undo.addEventListener('click',() => {
    if(tracker > 0) tracker--;
    console.log(tracker);
    canvasDrawImageAgain(tracker,canvasUndoRedoData);
})

let redo = document.querySelector('.redo');
redo.addEventListener('click',() => {
    if(tracker < canvasUndoRedoData.length -1) tracker++;
    console.log(tracker);
    canvasDrawImageAgain(tracker,canvasUndoRedoData);
})

function canvasDrawImageAgain(tracker,canvasUndoRedoData) {
    let imageData = canvasUndoRedoData[tracker];
    let newImage =  new Image();
    newImage.src = imageData;
    newImage.onload = (e) => {
        tool.drawImage(newImage,0,0,canvas.width,canvas.height)
    }
}


function beginPath(data) {
    tool.beginPath()
    tool.moveTo(data.x,data.y);
}


function drawStroke(data) {
    tool.lineTo(data.x,data.y);
    tool.stroke();
}
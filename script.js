let menuBtn = document.querySelector(".menuBtn");
let toolHeader = document.querySelector(".toolHeader");

let toolHeaderFlag = true;
menuBtn.addEventListener('click',() => {
    toolHeaderFlag ? toolHeaderFlag = false : toolHeaderFlag = true;
    if(toolHeaderFlag) {
        toolHeader.style.display = "none";
        toolHeader.classList.remove("toolHeaderAni");
    } else if(!toolHeaderFlag) {
        toolHeader.style.display = "";
        toolHeader.classList.add("toolHeaderAni");
    }
})

let pen = document.querySelector(".pen");
let toolPenFlag = true; //true means invisible
let penToolBox = document.querySelector(".penTool-Box");
pen.addEventListener('click',() => {
    toolPenFlag ? toolPenFlag = false : toolPenFlag = true;

    if(toolPenFlag) {
        penToolBox.style.display = 'none';
    } else {
        penToolBox.style.display = '';
    }
})

let eraser = document.querySelector(".eraser");
let toolEraserBox = true; //true means invisible
let eraserToolBox = document.querySelector(".eraser-Box");
eraser.addEventListener('click',() => {
    toolEraserBox ? toolEraserBox = false : toolEraserBox = true;

    if(toolEraserBox) {
        eraserToolBox.style.display = 'none';
    } else {
        eraserToolBox.style.display = '';
    }
})
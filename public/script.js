let menuBtn = document.querySelector(".menuBtn");
let toolHeader = document.querySelector(".toolHeader");

let toolHeaderFlag = true;
menuBtn.addEventListener('click', () => {
    toolHeaderFlag ? toolHeaderFlag = false : toolHeaderFlag = true;
    if (toolHeaderFlag) {
        toolHeader.style.display = "none";
        toolHeader.classList.remove("toolHeaderAni");
    } else if (!toolHeaderFlag) {
        toolHeader.style.display = "";
        toolHeader.classList.add("toolHeaderAni");
    }
})

let pen = document.querySelector(".pen");
let toolPenFlag = true; //true means invisible
let penToolBox = document.querySelector(".penTool-Box");
pen.addEventListener('click', () => {
    toolPenFlag ? toolPenFlag = false : toolPenFlag = true;

    if (toolPenFlag) {
        penToolBox.style.display = 'none';
    } else {
        penToolBox.style.display = '';
    }
})

let eraser = document.querySelector(".eraser");
let toolEraserBox = true; //true means invisible
let eraserToolBox = document.querySelector(".eraser-Box");
eraser.addEventListener('click', () => {
    toolEraserBox ? toolEraserBox = false : toolEraserBox = true;

    if (toolEraserBox) {
        eraserToolBox.style.display = 'none';
    } else {
        eraserToolBox.style.display = '';
    }
})

let stickyNote = document.querySelector(".stickyNote");
stickyNote.addEventListener('click', () => {
    let div = document.createElement('div');
    div.setAttribute('class', 'sticky-notes-cont');
    div.innerHTML = `
   <div class="sticky-notes-header">
    <div class="StickyMinimizeButton">
        <span class="material-icons-outlined">
            do_not_disturb_on
            </span>
    </div>
    <div class="StickyCancelButton">
        <span class="material-icons-outlined">
            cancel
            </span>
    </div>
    </div>

    <div class="sticky-contentArea">
    <textarea class="textArea"></textarea>
    </div>`;

    document.querySelector('body').append(div);
    
    let minimize = div.querySelector(".StickyMinimizeButton");
    let minimizeStatus = false;
    minimize.addEventListener('click',() => {
        minimizeStatus ? minimizeStatus = false : minimizeStatus = true;
        if(minimizeStatus) {
            let contentArea = div.querySelector('.sticky-contentArea');
            contentArea.style.display = 'none';
        } else if(!minimizeStatus) {
            let contentArea = div.querySelector('.sticky-contentArea');
            contentArea.style.display = '';
        }
    })

    let remove = div.querySelector('.StickyCancelButton');
    remove.addEventListener('click',() => {
        remove.parentElement.parentElement.remove();
    })
    
    dragAndDrop(div);  
})


let imageNotes = document.querySelector(".imageNotes");
imageNotes.addEventListener('click', () => {

    let input = document.createElement('input');
    input.setAttribute('type','file');

    input.click();

    input.addEventListener('change',() => {
        let imgFile = input.files[0];
        let url = URL.createObjectURL(imgFile);
        
        let div = document.createElement('div');
        div.setAttribute('class', 'sticky-notes-cont');
        div.innerHTML = `
       <div class="sticky-notes-header">
        <div class="StickyMinimizeButton">
            <span class="material-icons-outlined">
                do_not_disturb_on
                </span>
        </div>
        <div class="StickyCancelButton">
            <span class="material-icons-outlined">
                cancel
                </span>
        </div>
        </div>
    
        <div class="sticky-contentArea">
        <img src = '${url}'>
        </div>`;
    
        document.querySelector('body').append(div);
        
        let minimize = div.querySelector(".StickyMinimizeButton");
        let minimizeStatus = false;
        minimize.addEventListener('click',() => {
            minimizeStatus ? minimizeStatus = false : minimizeStatus = true;
            if(minimizeStatus) {
                let contentArea = div.querySelector('.sticky-contentArea');
                contentArea.style.display = 'none';
            } else if(!minimizeStatus) {
                let contentArea = div.querySelector('.sticky-contentArea');
                contentArea.style.display = '';
            }
        })
    
        let remove = div.querySelector('.StickyCancelButton');
        remove.addEventListener('click',() => {
            remove.parentElement.parentElement.remove();
        })
        
        dragAndDrop(div);  
    })

})



function dragAndDrop(div) {
    div.onmousedown = function(event) {

        let shiftX = event.clientX - div.getBoundingClientRect().left;
        let shiftY = event.clientY - div.getBoundingClientRect().top;
      
        div.style.position = 'absolute';
        div.style.zIndex = 1000;
        // document.body.append(div);
      
        moveAt(event.pageX, event.pageY);
      
        // moves the ball at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
          div.style.left = pageX - shiftX + 'px';
          div.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the ball, remove unneeded handlers
        div.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          div.onmouseup = null;
        };
      
      };
}
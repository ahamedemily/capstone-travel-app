// const cors = require("cors");

const fill = document.querySelector('#fill1');
const fill2 = document.querySelector('#fill2');
const fill3 = document.querySelector('#fill3');
const fill4 = document.querySelector('#fill4');
const fill5 = document.querySelector('#fill5');
const fill6 = document.querySelector('#fill6');
const boxes = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill2.addEventListener('dragstart', dragStart);
fill2.addEventListener('dragend', dragEnd);
fill3.addEventListener('dragstart', dragStart);
fill3.addEventListener('dragend', dragEnd);
fill4.addEventListener('dragstart',dragStart);
fill4.addEventListener('dragend',dragEnd);
fill5.addEventListener('dragstart',dragStart);
fill5.addEventListener('dragend',dragEnd);
fill6.addEventListener('dragstart',dragStart);
fill6.addEventListener('dragend',dragEnd);


// Loop through boxes and call drag events
for(const empty of boxes) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart(e) {
    const draggable = e.path[0]
    e.dataTransfer.setData("text/plain", draggable.id);
    this.ClassName += 'hold';
    setTimeout(() => (this.ClassName = 'invisble'), 0);
}

function dragEnd() {
    this.ClassName = 'fill';
}

function dragOver(e) {
    e.preventDefault(); 
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';  
}

function dragDrop(e) {
    const droppedElementId = e.dataTransfer.getData("text/plain")
    const droppedElement = document.getElementById(droppedElementId)
    e.preventDefault;
    this.className = 'empty';
    this.append(droppedElement);
}
'use strict';

const canvas = document.querySelector('.canvas');
const control = document.querySelector('.control');
const saveBtn = document.querySelector('.saveBtn');
const resultImage = document.querySelector('.result-image');

let context = canvas.getContext("2d");
let xPos = 10;
let count = 0;
let drawingMode; // true일때만 사용
let brush = 'color'; // 'color','image
let colorVal = 'black';

let imgElem = new Image();
imgElem.src = 'images.png';


function downHandler(){
    drawingMode = true;
}

function upHandler(){
    drawingMode = false;
}

function moveHandler(e){
    if(!drawingMode) return
    
    switch (brush) {
        case 'color':
            context.beginPath();
            context.arc(e.layerX,e.layerY,5,0,Math.PI*2,false);
            context.fill();
            break;
        case 'image': 
            context.drawImage(imgElem, e.layerX, e.layerY,50,50)
            break;
    }

}


function setColor(e){
    if(e.target.tagName == "BUTTON" ){
        brush = e.target.getAttribute('data-type');
        colorVal = e.target.getAttribute('data-color');
        context.fillStyle = colorVal;

        colorVal = imgElem.src
    }
}

function createImage() {
    const url = canvas.toDataURL('images.png');
    const imgElem = new Image();
    imgElem.src = url;
    resultImage.appendChild(imgElem);
}

canvas.addEventListener('mousedown',downHandler);
canvas.addEventListener('mousemove',moveHandler);
canvas.addEventListener('mouseup',upHandler);
control.addEventListener('click',setColor);
saveBtn.addEventListener('click',createImage);
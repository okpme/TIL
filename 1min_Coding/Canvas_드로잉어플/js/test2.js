'use strict';

const canvas = document.querySelector('.canvas');
const control = document.querySelector('.control');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const orange = document.querySelector('#orange');

let context = canvas.getContext("2d");
let xPos = 10;
let count = 0;
let drawingMode; // true일때만 사용
let colorVal = 'black';

function downHandler(){
    drawingMode = true;
}

function upHandler(){
    drawingMode = false;
}

function moveHandler(e){
    if(!drawingMode) return
    
    context.fillStyle = colorVal;
    context.beginPath();
    context.arc(e.layerX,e.layerY,5,0,Math.PI*2,false);
    context.fill();
}


function setColor(e){
    if(e.target.tagName == "BUTTON" ){
        colorVal = e.target.getAttribute('data-color');
    }
}

canvas.addEventListener('mousedown',downHandler);
canvas.addEventListener('mousemove',moveHandler);
canvas.addEventListener('mouseup',upHandler);
control.addEventListener('click',setColor);
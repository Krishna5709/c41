var Umbrella
var maxDrops

function preload(){
    
}

function setup(){
canvas = createCanvas(displayWidth-20, displayHeight-30);
var maxDrops=100

    
}

function draw(){
   for(var i=0; i<maxDrops; i++){
    Drops.push(new createDrop(random(0,400), random(0,400)));
   } 
}   


const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var bgImage;
var snowFlakes=[]
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  
  
}
function preload(){
bgImage=loadImage("snow2.jpg");

}
function draw() {
  background(bgImage);  
Engine.update(engine);
  if(frameCount%0.5===0){
    snowFlakes.push(new Snow(random(width/2-400,width/2+400),10))
  }
  for(var i=0;i<snowFlakes.length;i++){
    snowFlakes[i].display();
    
  }
}
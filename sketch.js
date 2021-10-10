var shipSprite
var seaSprite
var shipImg
var seaImg
function preload(){

  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  seaSprite = createSprite(400,200);
  seaSprite.addImage(seaImg);
  seaSprite.velocityX = -1;
  seaSprite.scale = 0.3;
  //ship Animation
  shipSprite = createSprite(200,200,45,50);
  shipSprite.addAnimation("shipMoving",shipImg);
  shipSprite.scale = 0.3;
}

function draw() {
  background("blue");
 
  if (seaSprite.x<0) {
    seaSprite.x = seaSprite.width/8
    
  }
  drawSprites();
}
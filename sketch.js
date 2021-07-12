var ship_movement , sea_image;
var ship , sea

function preload(){
  //load annimation for the ship and image for the sea
  ship_movement = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_image = loadImage("sea.png");
}

function setup(){
   createCanvas(600,300);
  
  //create sea and add image to it
  sea= createSprite(400,200);
  sea.addImage("background",sea_image);
  sea.scale= 0.3;
  
  //create ship and add animation to it
  ship= createSprite(130,200,30,30);
  ship.addAnimation("movement of the ship", ship_movement);
  ship.scale = 0.25;
}

function draw() {
  //give background
  background("SteelBlue");
  //give velocity to
  sea.velocityX=-3;

  //reset image to show continuous movement 
  if(sea.x < 0){
    sea.x =600 ;
  }
  
  drawSprites();
}
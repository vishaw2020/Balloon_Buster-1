var background, background2;
var redballoons, pinkballoon, blueballon, greenballoon;
var bow, bow2;
var red1, green1, pink1, blue1;

function preload(){

  redBalloon=loadImage("red_balloon0.png");
  blueBalloon=loadImage("blue_balloon0.png");
  greenBalloon=loadImage("green_balloon0.png");
  pinkBalloon=loadImage("pink_balloon0.png");
  bow=loadImage("bow0.png");
  backgroundimage=loadImage("background0.png");
 
  
}

function setup() {
  createCanvas(600, 600);
  
bg1=createSprite(0,100,600,600);
  bg1.scale=3;
  bg1.addImage(backgroundimage);
  bg1.velocityX=-3;
  bg1.x=bg1.width/2;
  
  bow1= createSprite(550,300,10,10);
  bow1.addImage(bow);
  
  for(var i=270;i<500;i=i+35)
  {
    red1=createSprite(50,i,2,2);
    red1.addImage(redBalloon);
    red1.scale=0.05;
  }
  
  for(var i=300;i<460;i=i+35)
  {
    blue1=createSprite(100,i,2,2);
    blue1.addImage(blueBalloon);
    blue1.scale=0.0549;
  }
  
  for(var i=320;i<440;i=i+35)
  {
    green1=createSprite(150,i,2,2);
    green1.addImage(greenBalloon);
    green1.scale=0.05;
  }
  
  for(var i=360;i<400;i=i+35)
  {
    pink1=createSprite(200,i,2,2);
    pink1.addImage(pinkBalloon);
    pink1.scale=0.7;
  }
  
}

function draw() {

  background("white");
  bg1.velocityX=-3;
  if(bg1.x<0)
  {
     bg1.x=bg1.width/2;
    
  }
  drawSprites();
  bow1.y=mouseY;

}


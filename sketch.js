var garden,rabbit, Apple, Leaf;
var gardenImg,rabbitImg, appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  createApple();
  createLeaf();

  rabbit.x=World.mouseX;
}
function createApple() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    Apple = createSprite(600,100,40,10);
    Apple.addImage(appleImg)
    Apple.x = Math.round(random(10,400))
    Apple.scale = 0.1;
    Apple.velocityY = 3;
    
    
    //assigning lifetime to the variable
    Apple.lifetime = 134
  }}
    function createLeaf() {
      //write code here to spawn the clouds
      if (frameCount % 60 === 0) {
        Leaf = createSprite(600,100,40,10);
        Leaf.addImage(leafImg);
        Leaf.x = Math.round(random(10,400))
        Leaf.scale = 0.1;
        Leaf.velocityY = 3;
        
        
        //assigning lifetime to the variable
        Leaf.lifetime = 134
      }
      
    }




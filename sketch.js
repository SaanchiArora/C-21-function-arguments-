var fixedRect, movingRect;

var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "yellow";
  gameobject1.debug = true;

  gameobject2 = createSprite(200,200,50,50);
  gameobject2.shapeColor = "white";
  gameobject2.debug = true;

  gameobject3 = createSprite(300,300,50,50);
  gameobject3.shapeColor = "purple";
  gameobject3.debug = true;

  gameobject4 = createSprite(400,400,50,50);
  gameobject4.shapeColor = "skyblue";
  gameobject4.debug = true;


  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
 
  if(isTouching( movingRect,gameobject4)){
    movingRect.shapeColor = "pink";
    gameobject4.shapeColor = "pink";
  }
  else{
    movingRect.shapeColor = "green";
    gameobject4.shapeColor = "green";
  }

  drawSprites();
}

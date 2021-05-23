var O1, O2, O3, O4;
var movingRect;


function setup() {
  createCanvas(1200,800);
  O1 = createSprite(100, 100, 50, 50);
  O1.shapeColor = "green";
  O1.debug = true;

  O2 = createSprite(200, 100, 50, 50);
  O2.shapeColor = "green";
  O2.debug = true;

  O3 = createSprite(300, 100, 50, 50);
  O3.shapeColor = "green";
  O3.debug = true;

  O4 = createSprite(400, 100, 50, 50);
  O4.shapeColor = "green";
  O4.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (touching(movingRect,O2)) {
    movingRect.shapeColor = "red";
    O2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    O2.shapeColor = "green";
  }
  drawSprites();
}
 function touching(r1,r2){
   if(r1.x - r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x < r2.width/2 + r1.width/2
    && r1.y - r2.y < r2.height/2 + r1.height/2
    && r2.y - r1.y < r2.height/2 + r1.height/2){
    return true;
   }
   else{
    return false;
   }
 }
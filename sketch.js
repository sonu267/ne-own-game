

var bg1
var gr1
var gr2
var ninjaboy1
var ninjagirl
var power = 0 
var jumps = 0
var maxjumps = 0

function preload(){
bg1 = loadImage("pngs/BG/BG.png")
gr1 = loadImage("pngs/Untitled-1.png")
gr2 = loadImage("pngs/Untitled-2.png")
ninjaboy1 = loadImage("pngs/boy ninja/Idle__007.png")
ninjagirlimg = loadImage("pngs/ninja girl/Idle__003.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  ninjaboy = createSprite(100,windowHeight-300);
  ninjaboy.addImage(ninjaboy1);
  ninjaboy.scale = 0.3
  //ninjagirl = createSprite(100,windowHeight-300);
  //ninjagirl.addImage(ninjagirlimg);
  //ninjagirl.scale = 0.3
  ground1 = createSprite(200,windowHeight-200);
  ground1.addImage(gr1)  
  ground2 = createSprite(windowWidth/2-100,windowHeight-200);
  ground2.addImage(gr2)  
  ground1.debug = true
  ground1.setCollider("rectangle",-25,0,350,100)
  invground1 = createSprite(200,windowHeight-240,300,10);
  
  
}

function draw() {
  background(bg1);  
  ninjaboy.collide(invground1)
  if(keyIsDown(UP_ARROW) && power<40){
    
    power++
  }
  
  if(keyWentUp(UP_ARROW) && jumps<maxjumps){
    ninjaboy.velocityY = -(power)
    jumps++
  }
  if(ninjaboy.isTouching(invground1)){
    power = 0 
    jumps = 0

  }
  if(keyDown(RIGHT_ARROW)){
    ninjaboy.velocityX = 10
    

  }
  if(keyDown(LEFT_ARROW)){
    ninjaboy.velocityX = -10
    

  }
  ninjaboy.velocityY = ninjaboy.velocityY +0.5
  
  drawSprites();
  createEdgeSprites();

}
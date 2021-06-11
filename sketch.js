var bg1
var ease, med, dif, levels;
function preload(){
    bg1 = loadImage("back.png");
    level = loadAnimation("easy.png");
    level1 = loadAnimation("medium.png");
    level2 = loadAnimation("difficult.png");
}

function setup(){
    createCanvas(windowWidth-10, windowHeight-10);
   ease = createSprite(300, 500, 50 ,50);
   ease.addAnimation("easy.png", level)
   med = createSprite(650, 500, 50 ,50);
   med.addAnimation("medium.png", level1)
   dif = createSprite(1000, 500, 50 ,50);
   dif.addAnimation("difficult.png", level2)
}

function draw(){
   background(bg1);
   drawSprites();
   textSize(60)
   fill("white")
   stroke(0)
   strokeWeight(10)
   text("MAZE RUNNER", windowWidth/2-250, 100 )
   fill("black")
   stroke(0 , 255, 255)
   strokeWeight(10)
   text("WELCOME! To The Maze Runner Game", windowWidth/2-550, 200 )
   textSize(40)
   fill("white")
   stroke(0)
   strokeWeight(10)
   text("Choose Level", windowWidth/2-140, windowHeight/2 )
}
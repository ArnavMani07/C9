var Arnav;

function setup() {
  createCanvas(400,400);

  Arnav= createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    Arnav.position.x= Arnav.position.x+5;
  }

  if(keyIsDown(LEFT_ARROW)){
    Arnav.position.x= Arnav.position.x-5;
  }
  drawSprites();

}





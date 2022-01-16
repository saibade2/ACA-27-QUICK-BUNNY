var bunny;
var bricks;
var edges;
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(800,740);
  edges=createEdgeSprites();
  bunny=createSprite(40,715,15,15);
  carrot=createSprite(715,40,30,30);
  carrot.shapeColor="orange";
  bunny.shapeColor="white";
  obs1=createSprite(70,340,120,15);
  obs2=createSprite(230,340,120,15);
  obs1.shapeColor="red";
  obs2.shapeColor="red";
  obs3=createSprite(390,340,120,15);
  obs4=createSprite(550,340,120,15);
  obs3.shapeColor="red";
  obs4.shapeColor="red";
  obs5=createSprite(720,340,120,15);
  obs6=createSprite(120,400,120,15);
  obs5.shapeColor="red";
  obs6.shapeColor="red";
  obs5=createSprite(280,400,120,15);
  obs6=createSprite(440,400,120,15);
  obs5.shapeColor="red";
  obs6.shapeColor="red";
  obs7=createSprite(590,400,120,15);
  obs8=createSprite(750,400,120,15);
  obs7.shapeColor="red";
  obs8.shapeColor="red";
 /* obs9=createSprite(490,300,90,25);
  obs10=createSprite(600,380,90,25);
  obs9.shapeColor="red";
  obs10.shapeColor="red";*/
 
 
}


function draw() {
  background("black");  
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
    if(keyDown("up")){
      bunny.y=bunny.y-3;
    }
    if(keyDown("down")){
      bunny.y=bunny.y+3;
    }
    if(keyDown("right")){
      bunny.x=bunny.x+3;
    }
    if(keyDown("left")){
      bunny.x=bunny.x-3;
    }  
    if(bunny.isTouching(carrot)){
      text("YOU WIN",200,200);
    }
    if(bunny.isTouching(obs1)){
      obs1.velocityX=0;
      obs2.velocityX=0;
      text("YOU LOSE",200,200);
    }
    if(bunny.isTouching(obs2)){
      obs2.velocityX=0;
      obs1.velocityX=0;
      text("YOU LOSE",200,200);
    }
    if(bunny.isTouching(obs3)){
      obs2.velocityX=0;
      obs1.velocityX=0;
      text("YOU LOSE",200,200);
    }
    if(bunny.isTouching(obs4)){
      obs2.velocityX=0;
      obs1.velocityX=0;
      text("YOU LOSE",200,200);}
    
    if(bunny.isTouching(obs5)){
      obs2.velocityX=0;
      obs1.velocityX=0;
      text("YOU LOSE",200,200);
    }
    if(bunny.isTouching(obs6)){
      obs2.velocityX=0;
      obs1.velocityX=0;
      text("YOU LOSE",200,200);
    }
    if(bunny.isTouching(obs7)){
     obs2.velocityX=0;
     obs1.velocityX=0;
     text("YOU LOSE",200,200);
    }
    if(bunny.isTouching(obs8)){
      obs2.velocityX=0;
      obs1.velocityX=0;
      text("YOU LOSE",200,200);
    }
    /*if(bunny.isTouching(obs9)){
      obs2.velocityX=0;
      obs1.velocityX=0;
      text("YOU LOSE",200,200);
      }
    if(bunny.isTouching(obs10)){
        obs2.velocityX=0;
        obs1.velocityX=0;
        text("YOU LOSE",200,200);
      }*/
    drawSprites();
  }
  
  


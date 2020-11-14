var car, wall;
var speed, weight;
var deforformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 20, 20);
  car.velocityX= speed= random(55, 100);
  deforformation= 0.5*weight*speed*speed/22500;
  wall = createSprite(1500, 200, 10, height/2);
 
  car.shapeColor= "white";
  
  
  weight= random(400, 1500);

}

function draw() {
  background("blue");  
 
  deformation= 0.5*weight*speed*speed/22500;
if(wall.x - car.x<= wall.width/2+car.width/2 &&(deformation<100)) {
   car.shapeColor= "green";
   car.velocityX=0;


}
  else if(wall.x - car.x<= wall.width/2+car.width/2 && (100<deformation<180)){ 
  car.shapeColor= "yellow";
  car.velocityX= 0;
  
}
  else if(wall.x - car.x<= wall.width/2+car.width/2 && (deformation>180)){ 
  car.shapeColor= "red";
  car.velocityX= 0;
  
}



  drawSprites();
}
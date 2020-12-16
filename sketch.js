const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,object,ball;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  myworld=myengine.world;

var options={
  isStatic:true
}

object=Bodies.rectangle(200,350,400,50,options);
World.add(myworld,object);

var option={
  restitution: 0.5
}

ball=Bodies.circle(100,100,20,option);
World.add(myworld,ball);


console.log(object.position.x);


  
}

function draw() {
  background(0);  

  Engine.update(myengine);
 rectMode(CENTER);
  rect(object.position.x,object.position.y,400,50);

ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
}
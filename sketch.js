
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	var canvas =  createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(100,100);
	
  
}


function draw() {
  background(0);
  Engine.update(engine)


  ground.display();
 hammer.display();

  
 
}




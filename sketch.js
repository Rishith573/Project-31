// nameSpacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// creating variables
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  Engine.run(engine);
  world = engine.world;

  ground = new Ground(240, 785, 500, 15);

}

function draw() {
  background(0);  
  drawSprites();

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  ground.display();
}
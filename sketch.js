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

var divisionHeight = 250

function setup() {
  createCanvas(480,600);

  engine = Engine.create();
  Engine.run(engine);
  world = engine.world;

  ground = new Ground(240, 785, 500, 15);

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var p1 = 15; p1 <= width; p1 = p1 + 30){
    plinkos.push(new Plinko(p1, 30))
  }

  for (var p2 = 0; p2 <= width; p2 = p2 + 30){
    plinkos.push(new Plinko(p2, 115))
  }

  for (var p3 = 15; p3 <= width; p3 = p3 + 30){
    plinkos.push(new Plinko(p3, 200))
  }

  for (var p4 = 0; p4 <= width; p4 = p4 + 30){
    plinkos.push(new Plinko(p4, 285))
  }


}

function draw() {
  background(0);  
  drawSprites();

  ground.display();

  

  

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for (var p1 = 0; p1 < plinkos.length; p1++){
    plinkos[p1].display();
  }

  for (var p2 = 0; p2 < plinkos.length; p2++){
    plinkos[p2].display();
  }

  for (var p3 = 0; p3 < plinkos.length; p3++){
    plinkos[p3].display();
  }

  for (var p4 = 0; p4 < plinkos.length; p4++){
    plinkos[p4].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10, 100, 10)))
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  
}
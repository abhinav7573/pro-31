const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(400,475,800,30);
  for(var k=0; k<width;k=k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40; j<width;j=j+50) {
    plinkos.push(new Plinkos(j,75))
  }
  for(var j=15; j<width-10;j=j+50) {
    plinkos.push(new Plinkos(j,175))
  }
  // for(var j=40; j<width;j=j+50) {
  //   plinkos.push(new Plinkos(j,275))
  // }
  // for(var j=15; j<width-10;j=j+50) {
  //   plinkos.push(new Plinkos(j,375))
  // }



}

function draw() {
  background(17,95,155); 
  Engine.update(engine); 
  ground.display();
  
  if(frameCount%60===0){
     particles.push(new Particle(random(10,width-10),10,10))

  }

  for(var i=0; i<plinkos.length;i++) {
    plinkos[i].display();
   }
  for(var j=0; j<particles.length;j++) {
    particles[j].display();
  }
  for(var k=0; k<divisions.length;k++) {
    divisions[k].display();
  }
  drawSprites();
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;

function setup() {
  createCanvas(400, 400);
  
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01,
  };

  var ground_props = {
    isStatic: true,
  };

  ground = Bodies.rectangle(200, 370, 390, 20, ground_props);
  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);
  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 390, 20);
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball1,ball2,ball3,ball4;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball1= new Paper(200,200,10,10) ;
}

function draw(){
    background("pink");
    Engine.update(engine);
   
   ball1.display();
}

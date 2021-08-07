const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var base1,base2;
var bridge;
var stones=[];

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  for(var i=0; i<=8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stone=new Stone(x,y);
    stones.push(stone);

  }

ground=new Base(600,680,1200,40);
base1=new Base(100,300,100,50);
base2=new Base(900,300,100,50);
bridge=new Bridge(15,{x:100,y:280});
jointPoint=new Base(870,280,100,50);

Matter.Composite.add(bridge.body,jointPoint);
jointLink=new Link(bridge,jointPoint);
rectMode(CENTER);
}
function draw() {
  background(51);
  Engine.update(engine);

  

  ground.display();
  base1.display();
  base2.display();
  //jointPoint.display();
  bridge.show();
  for(var stone of stones){
    stone.display();
  }
}

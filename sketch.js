const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform1, platform2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9;
var ground;
var score = 0;
var polygon;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(10,250,20);
   // ellipse(polygon.position.x,polygon.position.y,20);
      // rotate(angle);
    
    World.add(world, polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:400})

    ground = new Ground(400,600,800,20);
    platform1 = new platform(310,400,250,10);
    platform2 = new platform(530,250,150,10);

    b1 = new box(230,390,30,30);
    b2 = new box(260-15,390,30,30);
    b3 = new box(290-15,390,30,30);
    b4 = new box(310,390,30,30);
    b5 = new box(340,390,30,30);
    b6 = new box(370-15,390,30,30);
    b7 = new box(400-15,390,30,30);
    b8 = new box(260-15,350,30,30);
    b9 = new box(290-15,350,30,30);
    b10 = new box(310-15,350,30,30);
    b11 = new box(340-15,350,30,30);
    b12 = new box(370-15,350,30,30);
    b13 = new box(290-15,320,30,30);
    b14 = new box(310-15,320,30,30);
    b15 = new box(340-15,320,30,30);
    b16 = new box(310-15,280,30,30);

    bl1 = new box(510,240,20,18);
    bl2 = new box(520,240,20,18);
    bl3 = new box(530,240,20,18);
    bl4 = new box(540,240,20,18);
    bl5 = new box(550,240,20,18);
    bl6 = new box(510,220,20,18);
    bl7 = new box(530,220,20,18);
    bl8 = new box(550,220,20,18);
    bl9 = new box(530,200,20,18);


    


}

function draw(){
  background("pink");
    Engine.update(engine);
    fill("black");
    textSize(20);
    text("Drag the hexagon to play",200,20);
    text("SCORE = "+ score,50,50);

    ground.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();

    bl1.display();
    bl2.display();
    bl3.display();
    bl4.display();
    bl5.display();
    bl6.display();
    bl7.display();
    bl8.display();
    bl9.display();

    platform1.display();
    platform2.display();

    slingShot.display();
    ellipseMode(RADIUS);
    translate(polygon.position.x, polygon.position.y);
    imageMode(CENTER);
    image(polygonImg,0,0,40,40);

}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(bird.body);
  }
}


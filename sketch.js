const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score=0
 var gameState="PLAY"
function preload()
{
  polygonImg = loadImage("polygon.png");
  getTime()
}

function setup() {
	createCanvas(950, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(475,490,950,25);
	
	stand = new Ground(390,350,250,10);

	stand2 = new Ground(700,200,200,10);

	block1 = new Box(300,320,30,40);  
	block2 = new Box(330,320,30,40);
	block3 = new Box(360,320,30,40);
	block4 = new Box(390,320,30,40);
	block5 = new Box(420,320,30,40);
	block6 = new Box(450,320,30,40);
	block7 = new Box(480,320,30,40);
	//level two
	block8 = new Box(330,280,30,40);
	block9 = new Box(360,280,30,40);
	block10 = new Box(390,280,30,40);
	block11 = new Box(420,280,30,40);
	block12 = new Box(450,280,30,40);
	//level three
	block13 = new Box(360,240,30,40);
	block14 = new Box(390,240,30,40);
	block15 = new Box(420,240,30,40);
	//top
	block16 = new Box(390,200,30,40);

	//set 2 for second stand
	//level one
	blocks1 = new Box(640,175,30,40);
	blocks2 = new Box(670,175,30,40);
	blocks3 = new Box(700,175,30,40);
	blocks4 = new Box(730,175,30,40);
	blocks5 = new Box(760,175,30,40);
	//level two
	blocks6 = new Box(670,135,30,40);
	blocks7 = new Box(700,135,30,40);
	blocks8 = new Box(730,135,30,40);
	//top
	blocks9 = new Box(700,95,30,40);
	
	polygon = Bodies.circle(90,90,20);
	World.add(world,polygon);

	slingshot = new Slingshot(this.polygon,{x:100,y:200});;

	Engine.run(engine);
}



function draw() {
  if (gameState==="PLAY"){
  rectMode(CENTER);
  background("lightblue");
  fill("purple")
  textSize(25)
 
  text(mouseX + ',' + mouseY, 10, 20);
text("SCORE:"+score,50,100)
text("Drag The Hexagon And Release It To Launch Towards Blocks",200,50)
text("Press Space Key To Get A Second Chance To Play",200,470)
  fill(255,143,53);

}
else{
  
  
  score=0;
}
ground.display();

  fill("brown");
  stand.display();
  stand2.display();

  //strokeWeight(2);
  //stroke("black");
  fill(120,255,255);
  block1.display();
  block1.Menal()
  block2.display();
  block2.Menal()
  block3.display();
  block3.Menal()
  block4.display();
  block4.Menal()
  block5.display();
  block5.Menal()
  block6.display();
  block6.Menal()
  block7.display();
  block7.Menal()
  fill(255,62,128);
  block8.display();
  block8.Menal()
  block9.display();
  block9.Menal()
  block10.display();
  block10.Menal()
  block11.display();
  block11.Menal()
  block12.display();
  block12.Menal()
  fill(255,231,159);
  block13.display();
  block13.Menal()
  block14.display();
  block14.Menal()
  block15.display();
  block15.Menal()
  fill(255,255,247);
  block16.display();
  block16.Menal()
  fill(250,235,215);
  blocks1.display();
  blocks1.Menal()
  blocks2.display();
  blocks2.Menal()
  blocks3.display();
  blocks3.Menal()
  blocks4.display();
  blocks4.Menal()
  blocks5.display();
  blocks5.Menal()
  fill("turquoise");
  blocks6.display();
  blocks6.Menal()
  blocks7.display();
  blocks7.Menal()
  blocks8.display();
  blocks8.Menal()
  fill("pink")
  blocks9.display();
  blocks9.Menal()
  slingshot.display();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y , 40, 40);
  
  drawSprites();


}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingshot.fly();
  }
  function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.polygon)
    }
  }

  async function getTime(){
    var response= await fetch("https://worldclockapi.com/api/json/est/now")
    console.log(response)
    var responseJSON= await response.json();
    console.log(responseJSON.currentDateTime)
    var datetime = responseJSON.currentDateTime
    var hour = datetime.slice(11,13)
    console.log(hour)
    if(hour>=06 && hour<=18)
    {
        bg="lightblue"
    }
    else{
        bg="black"
    }
  
}

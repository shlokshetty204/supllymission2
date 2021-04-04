var helicopterIMG, helicopterSprite, packageSprite,logSprite,packageIMG,log2Sprite,log3Sprite;
var packageBody,ground,logBody,log2Body,log3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	logSprite=createSprite(width/2,655, 400,30);
	logSprite.scale=0.4
	
	log2Sprite=createSprite(width/1.68,650, 30,100);
	log2Sprite.scale=0.4

	
	log3Sprite=createSprite(width/2.5,650, 30,100);
	log3Sprite.scale=0.4

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.38, isStatic:true});
	World.add(world, packageBody);
	
	log = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, log);
	 logSprite.shapeColor=color("red")
	 	
	log2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, log);
	log2Sprite.shapeColor=color("red")
		
	log3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, log);
	 log3Sprite.shapeColor=color("red")
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
    
  }
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;


function setup() {
	createCanvas(500, 600);

	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic: true
	};

	var bola1_options = {
		restitution: 0.99,
		frictionAir: 0.008
	}

	var bola2_options = {
		restitution: 0.2,
		frictionAir: 0.00000000001
	}

	var bola3_options = {
		restitution: 0.70,
		frictionAir: 0.01
	}

	var bola4_options = {
		restitution: 0.46,
		frictionAir: 0.007
	}

	var bola5_options = {
		restitution: 0.32,
		frictionAir: 0.0011
	}


	bola1 = Bodies.circle(50, 10, 10, bola1_options);
	World.add(world, bola1);

	bola2 = Bodies.circle(150, 10, 45, bola2_options);
	World.add(world, bola2);

	bola3 = Bodies.circle(250, 10, 20, bola3_options);
	World.add(world, bola3);

	bola4 = Bodies.circle(350, 10, 30, bola4_options);
	World.add(world, bola4);

	bola5 = Bodies.circle(450, 10, 40, bola5_options);
	World.add(world, bola5);


	ground = Bodies.rectangle(100, 600, 800, 20, ground_options);
	World.add(world, ground);

	paredeE = Bodies.rectangle(500, 100, 20, 1000, ground_options);
	World.add(world, paredeE);

	paredeD = Bodies.rectangle(0, 100, 20, 1000, ground_options);
	World.add(world, paredeD);



	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	background(51);
	Engine.update(engine);

	push()
	fill("yellow")
	ellipse(bola1.position.x, bola1.position.y, 10);
	pop()

	push()
	fill("blue")
	ellipse(bola2.position.x, bola2.position.y, 45);
	pop()

	push()
	fill("green")
	ellipse(bola3.position.x, bola3.position.y, 20);
	pop()

	push()
	fill("orange")
	ellipse(bola4.position.x, bola4.position.y, 30);
	pop()

	push()
	fill("white")
	ellipse(bola5.position.x, bola5.position.y, 40);
	pop()

	push();
	fill("red")
	rect(ground.position.x, ground.position.y, 800, 20);
	pop();

	push();
	fill("red")
	rect(paredeE.position.x, paredeE.position.y, 20, 1000);
	pop();

	push();
	fill("red")
	rect(paredeD.position.x, paredeD.position.y, 20, 1000);
	pop();


}


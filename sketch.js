var par;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ballll=[];
function preload()
{
	
}

function setup() {
	createCanvas(480, 500);


	engine = Engine.create();
	world = engine.world;

  ground = new dround(575,500,1200,20);
  
  balll=new  Box(140,0,5,5);
	
	p1=new ound(400,230,7)
	p2=new ound(350,230,7)
	p3=new ound(300,230,7)
	p4=new ound(250,230,7)
	p5=new ound(200,230,7)
	p6=new ound(150,230,7)
	p7=new ound(100,230,7)
	p8=new ound(50,230,7)
	p9=new ound(00,230,7)
	p10=new ound(450,230,7)
	
	p11=new ound(375,290,7)
	p12=new ound(325,290,7)
	p13=new ound(275,290,7)
	p14=new ound(225,290,7)
	p15=new ound(175,290,7)
	p16=new ound(125,290,7)
	p17=new ound(75,290,7)
	p18=new ound(25,290,7)
	p19=new ound(425,290,7)

	p20=new ound(375,170,7)
	p21=new ound(325,170,7)
	p22=new ound(275,170,7)
	p23=new ound(225,170,7)
	p24=new ound(175,170,7)
	p25=new ound(125,170,7)
	p26=new ound(75,170,7)
	p27=new ound(25,170,7)
	p28=new ound(425,170,7)

	
	p29=new ound(400,110,7)
	p30=new ound(350,110,7)
	p31=new ound(300,110,7)
	p32=new ound(250,110,7)
	p33=new ound(200,110,7)
	p34=new ound(150,110,7)
	p35=new ound(100,110,7)
	p36=new ound(50,110,7)
	p37=new ound(00,110,7)
	p38=new ound(450,110,7)

	log3 =  new Log(50,450,100, PI/2);
	log1 =  new Log(150,450,100, PI/2);
	log2 =  new Log(250,450,100, PI/2);
	log4 =  new Log(350,450,100, PI/2);
	log5 =  new Log(480,450,100, PI/2);


	Engine.run(engine);
  
}
 if (frameCount   %60 == 1  ){
		
		  

	balll.push (new Box (random(width/2-10,width/2+10),10,10))

 }

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
 
  balll.display();

  p1.display();
  p2.display();
  p3.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();

  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();

  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();
  p26.display();
  p27.display();
  p28.display();

  p29.display();
  p30.display();
  p31.display();
  p32.display();
  p33.display();
  p34.display();
  p35.display();
  p36.display();
  p37.display();
  p38.display();

  log3.display();
  log1.display();
  log2.display();
  log4.display();
  log5.display();




  drawSprites();
 
}

//for (var j) = 0 ; j < ballll  ) {
 //  ballll[0].display( );
  // }


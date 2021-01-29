var canvas;
var music;
var rect1,rect2,rect3,rect4;
var box;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    rect1=createSprite(100,550,80,50);
    rect1.shapeColor="blue";

    rect2=createSprite(200,550,80,50);
    rect2.shapeColor="green";

    rect3=createSprite(300,550,80,50);
    rect3.shapeColor="purple";

    rect4=createSprite(400,550,80,50);
    rect4.shapeColor="orange";

    box=createSprite(random(20,750),80,80);
    box.shapeColor="white";
    box.velocityX=-3;
    box.velocityY=3;
    



    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
if(rect1.isTouching(box)&&box.bounceOff(rect1)){
    box.shapeColor="blue";
    rect1.shapeColor="pink";
    music.play();
}

if(rect2.isTouching(box)&&box.bounceOff(rect2)){
    box.shapeColor="blue";
    rect2.shapeColor="blue"
}

if(rect3.isTouching(box)&&box.bounceOff(rect3)){
    box.shapeColor="green";
    rect3.shapeColor="yellow";
    box.velocityX=0;
    box.velocityY=0;
    music.stop();
}

if(rect4.isTouching(box)&&box.bounceOff(rect4)){
    box.shapeColor="pink";
    rect4.shapeColor="purple"
}



edges=createEdgeSprites();
box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    drawSprites();
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

   

}

async function  getBackgroundImg(){

    // write code to fetch time from API
    var responce=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
 
    //change the data in JSON format and store it in variable responseJSON
    var responceJSON=await responce.json()
console.log(responceJSON)
    
    //fetch datetime from responseJSON
    var dateTime=responceJSON.datetime
    console.log(dateTime)

    // slice the datetime to extract hour
    var hour= dateTime.slice(11,13);
     console.log(hour);

    
    if(hour>=17 ){
        bg = "sunrise.png";
    }
    else{
        
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}

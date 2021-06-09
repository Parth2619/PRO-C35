//Create variables here
var dog , happyDogImg , dogImg;
var foodObj;
var foodS , foodStock;
var database
function preload()
{
	//load images here
  dogImg = loadImage("Images/dogImg.png");
  happyDogImg = loadImage("Images/dogImg1.png")
}

function setup() {

	createCanvas(800, 700);
  
  dog = createSprite(600 ,300 ,150,150)
  dog.addImage(dogImg)
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value" , readStock)
  
}


function draw() {  
   background('purple')
 
  //add styles here

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImg)


  }

  drawSprites();
  fill("red")
  textSize(20)
  text("Press UP Arrow Key to Feed" ,100 , 50)
  text("Food:"+foodS , 100 ,100)

}

function readStock(data){
    foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x= 0
  }
  else{
  x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

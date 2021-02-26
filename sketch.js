

var me, ground,meIm,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,enemy,revolve2,revolve1,Keys,keyIm,box11,box12,bulletLnc1,box13
,bulletLnc2 ,block1,block2,
rightRotate,leftRotate,bullets;
var KeyGot = 0
var Shots = 10
function preload() {
 meIm= loadImage("Images/me.png")
keyIm = loadImage("Images/key.png")
chestIm = loadImage("Images/chst.png")
me2Im = loadImage("Images/me2.png")
}

function setup() {
	createCanvas(1550, 700);
  
Keys = createSprite(-1700,550,20,20)
Keys.addImage(keyIm)
Keys.scale = 0.2

  me = createSprite(120, 300, 30, 30)
me.addImage(meIm)
  me.scale = 0.2;

  ground = createSprite(600, 600, 5000, 30)
  
box1= createSprite(100,570,30,30)

box2 = createSprite(130,570,30,30)
box3 = createSprite(160,570,30,30)
box4= createSprite(135,540,30,30)

box5 = createSprite(160,540,30,30)
box6 = createSprite(160,510,30,30)

box7 = createSprite(350,570,30,30)
box8 = createSprite(380,540,30,30)

box9 = createSprite(410,540,30,30)
box10 = createSprite(440,540,30,30)

box11 = createSprite(-150,570,120,30)
box12 = createSprite(-150,545,80,30)

box13 = createSprite(-150,520,40,30)


bulletLnc1 = createSprite(-70,550,80,5)
bulletLnc1.shapeColor = "red"

bulletLnc2 = createSprite(-90,525,80,5)
bulletLnc2.shapeColor = "red"

enemy = createSprite(300,540,10,95)
enemy.shapeColor = "red"

rightRotate = createSprite(800,570,50,30)
rightRotate.shapeColor = "violet"

leftRotate = createSprite(600,570,50,30)
leftRotate.shapeColor = "aqua"

block1 = createSprite(-1880,335,40,500)
block2 = createSprite(3080,335,40,500)
revolve1 = createSprite(700,440,10,300)
enemy.velocityX = -10
revolve1.rotationSpeed = -3
revolve2 = createSprite(700,440,300,10)
me.setCollider("rectangle",0,50,200,200)
Keys.setCollider("rectangle",0,-50,200,200)
revolve2.rotationSpeed = -3
revolve2.shapeColor ="red"
revolve1.shapeColor ="red"
ground.shapeColor = "White"
chest = createSprite(3000,550,20,20)
chest.addImage(chestIm)
chest.scale = 0.2
bounce1 = createSprite(65,570,leftRotate.width-10,leftRotate.height)
box1.shapeColor = "White"
box2.shapeColor = "White"
box3.shapeColor = "White"
box4.shapeColor = "White"
box5.shapeColor = "White"
box6.shapeColor = "White"
box7.shapeColor = "White"
box8.shapeColor = "White"
box9.shapeColor = "White"
box10.shapeColor = "White"
box11.shapeColor = "White"
box12.shapeColor = "White"
box13.shapeColor = "White"
block1.shapeColor = "White"
block2.shapeColor = "White"
bounce1.shapeColor = "pink"


leftRotate.setCollider("rectangle",0,-10,50,10)
rightRotate.setCollider("rectangle",0,-10,50,10)

}


function draw() {
	
	background(0);
if(Keys.isTouching(me)){
  Keys.destroy();
  Keys.destroy();
KeyGot = KeyGot+1
}
if(me.x>145&&me.x<400){
if(keyDown("UP_ARROW")&&me.y>=480){

	me.velocityY = -8
}
}

if(me.x<145||me.x>385){
  if(keyDown("UP_ARROW")&&me.y>=490){
  
    me.velocityY = -8
  }
  }

  if(me.isTouching(leftRotate)){
revolve1.rotationSpeed = -3
revolve2.rotationSpeed = -3


  }

  if(me.isTouching(rightRotate)){
    revolve1.rotationSpeed = 3
    revolve2.rotationSpeed = 3
 
    
      }
      if(frameCount%110===0){
        Shots = Shots+1
      }
      if(KeyGot === 1 &&me.isTouching(chest)){
chest.destroy()
KeyGot = KeyGot+1
      }
 
      if(me.isTouching(bounce1)){
        me.velocityY = -15
      }

    
        me2 = createSprite(-1800,565,10,10)

        me2.addImage(me2Im)
        me2.scale = 0.5
        if(me.isTouching(me2)&&KeyGot===2){
          KeyGot = 3
        }
        if(me.isTouching(me2)&&KeyGot<2){
          fill(255)

textSize(20)
          text("Go And Collect The Chest",me2.x,me2.y-40)
        }
      
if(enemy.isTouching(me)&&KeyGot===0||revolve1.isTouching(me)&&KeyGot===0||revolve2.isTouching(me)&&KeyGot===0||bulletLnc1.isTouching(me)&&KeyGot===0||bulletLnc2.isTouching(me)&&KeyGot===0){
  me.x = 120
  me.y = 100

}

if(enemy.isTouching(me)&&KeyGot===1||revolve1.isTouching(me)&&KeyGot===1||revolve2.isTouching(me)&&KeyGot===1||bulletLnc1.isTouching(me)&&KeyGot===1||bulletLnc2.isTouching(me)&&KeyGot===1){
  me.x = -1770
  me.y = 100

}


if(enemy.isTouching(me)&&KeyGot===2||revolve1.isTouching(me)&&KeyGot===2||revolve2.isTouching(me)&&KeyGot===2||bulletLnc1.isTouching(me)&&KeyGot===2||bulletLnc2.isTouching(me)&&KeyGot===2){
  me.x = 3000
  me.y = 100

}

if(me.y>650){
  me.x = random(me.x-200,me.x+200)
  me.y = 300
}

if(keyDown("RIGHT_ARROW")){
me.x = me.x+10

} 

if(keyDown("LEFT_ARROW")){
  me.x = me.x-10

  } 
  
if(keyWentDown("z")&&Shots>0){
  bullets = createSprite(me.x,me.y,15,5)
  bullets.velocityX = -50
bullets.shapeColor = "yellow"
Shots = Shots-1

}

if(keyWentDown("c")&&Shots>0){
  bullets = createSprite(me.x,me.y,15,5)
  bullets.velocityX = 50
bullets.shapeColor = "yellow"
Shots = Shots-1
}


console.log(me.x)

  camera.position.x = me.x;
  camera.position.y = me.y
me.velocityY = me.velocityY+1

block1.debug = false;
rightRotate.debug = false;

me.collide(ground)
me.collide(box1);
me.collide(box2);
me.collide(box3);


me.collide(box4);
me.collide(box5);
me.collide(box6);
me.collide(box7)
me.collide(box8)

me.collide(box11)
me.collide(box12)

me.collide(block1)
me.collide(block2)
box7.collide(ground)

box12.collide(ground)
enemy.bounceOff(box3)
enemy.bounceOff(box7)

me.collide(box9)
me.collide(box10)


me.collide(box13)

me.collide(chest)
me.collide(me2)
me.collide(leftRotate)
me.collide(rightRotate)
drawSprites()
fill(255)

textSize(30)

text("Go To Extreme Left And Collect The Key",-250,300)
text("Go To Extreme Right And Open The Chest ",-2600,400)
text("Dont Touch Red Things",-500,400)
text("|     Air Jump Here!    |",150,400)

text("Left Rotate",500,500)

text("Right Rotate",800,500)


text("Bullets Left:"+Shots,me.x-750,me.y-300)
text("Z to Shoot Left , C to Shoot Left ",me.x-750,me.y+300)
text("Bullets Reloading In:"+frameCount%110,me.x-750,me.y-250)
textSize(20)
text("Bounce Here",0,540)
text("Jump On The Chest To Collect The Chest And Go To Extreme Left To Get A New Costume ",2260,400)
}




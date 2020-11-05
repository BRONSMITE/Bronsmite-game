var ak47;

function preload() {

AK47 = loadImage("AK47.png");
BulletK = loadImage("Ibullet.png")
backgroundImg = loadImage("bg.jpg")
}


function setup() {
 createCanvas (displayWidth,displayHeight);

ak47 = createSprite(111,1,50,50)
ak47.addImage(AK47);
ak47.scale=0.4;

}

function draw() {
  background(backgroundImg);  
  
  ak47.y = World.mouseY
  if(keyDown("left") ){
 bullets();

  }
  drawSprites();
}

function bullets () {
Bullet = createSprite(171,10,50,50)
Bullet.y = ak47.y
Bullet.velocityX = 3
Bullet.addImage(BulletK);
Bullet.scale = 0.1



}
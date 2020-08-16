var database;
var gameState,playerCount;
var game,player,form;
var allPlayers;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();

}
  

function draw(){
  background("white");
  console.log(hello);
  if(playerCount===4){
    game.update(1);
  }
 if(gameState===1){
   game.play()
 }
    drawSprites();
  
} 



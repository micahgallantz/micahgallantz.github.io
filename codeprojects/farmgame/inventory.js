var hotbar = [1,2,3,4,5,null,null,null,null];
hotbar_activeslot = 1;

drawHotBar = () => {
  for(i=0;i<hotbar.length;i++){
  ctx.drawImage(hotbar_tex,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
  }  
	  ctx.drawImage(hotbarSelected,0,0,32,32,(hotbar_activeslot-1)*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);

	for (let i=0;i<hotbar.length;i++) {
	ctx.font = "11px Arial";
switch(hotbar[i]){
	case 1: 
  ctx.drawImage(carrotSeedHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
ctx.fillText(Game.CarrotSeeds, i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)) + 18, canvas.height-32);
	break;
	case 2: 
  ctx.drawImage(stonePathHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
ctx.fillText(Game.StonePaths, i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)) + 18, canvas.height-32);
	break;
	case 3: 
  ctx.drawImage(dirtHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
ctx.fillText(Game.Dirt, i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)) + 18, canvas.height-32);
	break;
	case 4: 
  ctx.drawImage(grassHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
ctx.fillText(Game.Grass, i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)) + 18, canvas.height-32);

	break;
	case 5: 
  ctx.drawImage(tilledDirtHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
ctx.fillText(Game.TilledDirt, i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)) + 18, canvas.height-32);
	break;
}
		
	}
}
function changeTile(){
var event = window.event;
var mouseX = Math.round(event.clientX / tileSize); 
var mouseY = Math.floor(event.clientY / tileSize);

switch(hotbar[hotbar_activeslot - 1]){

	case 1:
if (Game.Map[mouseY][mouseX-12] == 2){
	if(Game.Crops[mouseY][mouseX-12].type == 0){
		if(Game.CarrotSeeds >= 1){
		Game.Crops[mouseY][mouseX-12].type = 1;
		Game.Crops[mouseY][mouseX-12].stage = 0;
Game.CarrotSeeds -= 1;
Game.Crops[mouseY][mouseX-12].planted = Date.now();}}

else if(Game.Crops[mouseY][mouseX-12].type == 1){
	if(Game.Crops[mouseY][mouseX-12].stage == 3){
	Game.Carrots += 1;
	Game.Crops[mouseY][mouseX-12].stage = 0;
}
	Game.Crops[mouseY][mouseX-12].stage = 0;
	Game.Crops[mouseY][mouseX-12].type = 0;
}
}
break;
//stone path
	case 2:
		if(Game.StonePaths >= 1){
		Game.Map[mouseY][mouseX-12] = 1;
Game.StonePaths -= 1;}
break;
//dirt????
	case 3:
		if(Game.Dirt >= 1){
		Game.Map[mouseY][mouseX-12] = 3;
Game.Dirt -= 1;}
break;
//grass
	case 4:
		if(Game.Grass >= 1){
		Game.Map[mouseY][mouseX-12] = 0;
Game.Grass -= 1;}
break;
//TILLED DIRT
	case 5:
		if(Game.TilledDirt >= 1){
		Game.Map[mouseY][mouseX-12] = 2;
Game.TilledDirt -= 1;}
break;
} 

document.onkeydown = (event) => {
  const isNumber = /^[1-9]$/i.test(event.key)
    if(isNumber){
      hotbar_activeslot = parseInt(event.key);
    }
}}
var hotbar = [1,2,3,4,5,0,0,0,0];
hotbar_activeslot = 3;

drawHotBar = () => {
  for(i=0;i<hotbar.length;i++){	
  ctx.drawImage(hotbar_tex,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
  }  
	  ctx.drawImage(hotbarSelected,0,0,32,32,(hotbar_activeslot-1)*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);

	for (let i=0;i<hotbar.length;i++) {
	ctx.font = "11px Arial";
	var x = i+1;
switch(hotbar[i]){
	case 4: 
	if(Game.CarrotSeeds > 0){
  ctx.drawImage(carrotSeedHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
ctx.fillText(Game.CarrotSeeds, i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)) + 18, canvas.height-32);}
	break;
	case 5: 
	if(Game.StonePaths > 0){
  ctx.drawImage(stonePathHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
ctx.fillText(Game.StonePaths, i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)) + 18, canvas.height-32);}
	break;
	case 3: 
	if(Game.Dirt > 0){
  ctx.drawImage(dirtHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
	}	break;
	case 1: 
	if(Game.Grass > 0){
  ctx.drawImage(grassHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
	}
	break;
	case 2: 
	if(Game.TilledDirt > 0){
  ctx.drawImage(tilledDirtHotbar,0,0,32,32,i*tileSize + (canvas.width/2-(hotbar.length*tileSize/2)),canvas.height-42,tileSize,tileSize);
	}	break;
}
		
	}
}
function changeTile(){
var event = window.event;
var mouseX = Math.round(event.clientX / tileSize); 
var mouseY = Math.floor(event.clientY / tileSize);

switch(hotbar[hotbar_activeslot - 1]){

	case 4:
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
	case 5:
		if(Game.StonePaths >= 1){
		if(Game.Crops[mouseY][mouseX-12].type == 0){
		Game.Map[mouseY][mouseX-12] = 1;
Game.StonePaths -= 1;}}
break;
//dirt????
	case 3:
		if(Game.Crops[mouseY][mouseX-12] == 0){
		if(Game.Dirt >= 1){
		Game.Map[mouseY][mouseX-12] = 3;
}}
break;
//grass
	case 1:
		if(Game.Grass >= 1){
		Game.Map[mouseY][mouseX-12] = 0;
		Game.Crops[mouseY][mouseX-12] = 0;

	}
break;
//TILLED DIRT
	case 2:
		if(Game.TilledDirt >= 1){
		Game.Map[mouseY][mouseX-12] = 2;}
break;
		}

document.onkeydown = (event) => {
  const isNumber = /^[1-9]$/i.test(event.key)
    if(isNumber){
      hotbar_activeslot = parseInt(event.key);
    }
}}
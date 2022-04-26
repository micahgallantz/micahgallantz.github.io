const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
var w = h = canvas.width = canvas.height = 640;

var tileSize = 32;

window.onunload = () => {
  localStorage.setItem("Game", JSON.stringify(Game));

var sources = {
resource1: "https://micahgallantz.com/codeprojects/diamond-cove/tex/grass.png",

resource2: "https://micahgallantz.com/codeprojects/diamond-cove/tex/money.png",

resource3: "https://micahgallantz.com/codeprojects/diamond-cove/tex/carrotSeedHotbar.png",

resource4: "https://micahgallantz.com/codeprojects/diamond-cove/tex/carrotCount.png",

resource5: "https://micahgallantz.com/codeprojects/diamond-cove/tex/carrotSeed.png",

resource6: "https://micahgallantz.com/codeprojects/diamond-cove/tex/stonePath.png",

resource7: "https://micahgallantz.com/codeprojects/diamond-cove/tex/dirt.png",
resource8: "https://micahgallantz.com/codeprojects/diamond-cove/tex/tilledDirt.png",
resource9: "https://micahgallantz.com/codeprojects/diamond-cove/tex/carrot.png",
resource10: "https://micahgallantz.com/codeprojects/diamond-cove/tex/carrotStage1.png",
resource11: "https://micahgallantz.com/codeprojects/diamond-cove/tex/carrotStage2.png",
resource12: "https://micahgallantz.com/codeprojects/diamond-cove/tex/curser.png",
resource13: "https://micahgallantz.com/codeprojects/diamond-cove/tex/hotbar.png",
resource14: "https://micahgallantz.com/codeprojects/diamond-cove/tex/hotbarSelected.png",
resource15: "https://micahgallantz.com/codeprojects/diamond-cove/tex/carrotHotbar.png",
resource16: "https://micahgallantz.com/codeprojects/diamond-cove/tex/storePathHotbar.png",
resource17: "https://micahgallantz.com/codeprojects/diamond-cove/tex/dirtHotbar.png",
resource18: "https://micahgallantz.com/codeprojects/diamond-cove/tex/grassHotbar.png", 
resource19: "https://micahgallantz.com/codeprojects/diamond-cove/tex/tilledDirtHotbar.png"
					
        };
        loadImages(sources, initGame);  // calls initGame after *all* images have finished loading
    };

    function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for (var src in sources) {
            numImages++;
        }
        for (var src in sources) {
            images[src] = new Image();
            images[src].onload = function(){
                if (++loadedImages >= numImages) {
                    callback(images);
                }
            };
            images[src].src = sources[src];
        }
    
}

window.onload = () => {
var carrotNum = document.getElementById("carrotNum");
var cashMoneys=document.getElementById("cashMoneys");
  //if ls is undefined, just set it to the default game and procede, if not, set Game to the ls value
  if (JSON.parse(localStorage.getItem('Game')) == null) {
    localStorage.setItem("Game", JSON.stringify(Game));
  } else {
    Game = JSON.parse(localStorage.getItem('Game'));		
  }
}

var mouseX = 0;
var mouseY = 0;
var mouseDown = false;
var changeTo = 2;

function loop(){
cashMoneys.innerHTML = Game.Money;
carrotNum.innerHTML = Game.Carrots;
	ctx.clearRect(0, 0, w, h);

document.addEventListener("mousemove", curserMove);

document.addEventListener("click", changeTile);

	for(row=0; row<Game.Map.length; row++){
		for(col=0; col<Game.Map[row].length; col++){
			
				switch(Game.Map[row][col]){
			case 0: 
				//grass
			ctx.drawImage(grass, col*tileSize, row*tileSize);
				break;

				case 1: 
				//path
			ctx.drawImage(stonePath, col*tileSize, row*tileSize);
				break;

				case 2: 
				//tilled dirt
			ctx.drawImage(tilledDirt, col*tileSize, row*tileSize);
				break;
				
					case 3: 
				//dirt
			ctx.drawImage(dirt, col*tileSize, row*tileSize);
				break;
			}
		}

	}
		for(row=0; row<Game.Crops.length; row++){
		for(col=0; col<Game.Crops[row].length; col++){
			
				if(((Game.Crops[row][col].planted + 10000) + (Math.random() * 200000)) <= Date.now()){
					if(Game.Crops[row][col].stage == 0){
					if(Game.Crops[row][col].planted != 0){
					Game.Crops[row][col].stage = 1;}
				}}
				if(((Game.Crops[row][col].planted + 30000) + (Math.random() * 400000)) <= Date.now()){
					if(Game.Crops[row][col].stage == 1){
					if(Game.Crops[row][col].planted != 0){
					Game.Crops[row][col].stage = 2;}
				}}
								if(((Game.Crops[row][col].planted + 45000) + (Math.random() * 600000)) <= Date.now()){
					if(Game.Crops[row][col].stage == 2){
					if(Game.Crops[row][col].planted != 0){
					Game.Crops[row][col].stage = 3;}
				}}
				switch(Game.Crops[row][col].type){

				case 1: 
				//carrot
				switch(Game.Crops[row][col].stage){
					case 0:
				ctx.drawImage(carrotSeed, col*tileSize, row*tileSize);
				break;
					case 1:
					ctx.drawImage(carrotStage1, col*tileSize, row*tileSize);
				break;
					case 2:
					ctx.drawImage(carrotStage2, col*tileSize, row*tileSize);
				break;
					case 3:
					ctx.drawImage(carrot, col*tileSize, row*tileSize);
				break;
				}
				break;
				case 2: 
				//potato
				break;

			}
		}

	}

	for(row=0; row<layer2.length; row++){
		for(col=0; col<layer2[row].length; col++){
			
				switch(layer2[row][col]){

			case 0: 
				//empty
				break;

				case 1: 
				//curser
			ctx.drawImage(curser, col*tileSize, row*tileSize);
				break;

			}
		}

	}
			ctx.drawImage(moneytex, 10, 15);
			ctx.drawImage(carrotCount, 380, 15);
			ctx.font = '25px arial';
			ctx.fillText(Game.Money, 60, 50);
			ctx.fillText(Game.Carrots, 410, 50);
  
  drawHotBar();
	requestAnimationFrame(loop);
}
    function initGame(images) {
			requestAnimationFrame(loop); 
    }
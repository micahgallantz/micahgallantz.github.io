//load images
var ship = new Image();
ship.src = "file:///home/chronos/u-046aba657d1b33badcddb59957e6ac1788bbaf42/MyFiles/vscode/Andromeda/tex/ship.png";

//Player coordinates
var playerX = width/2;
var playerY = height/2;

//mouse coordinates
var clientX;
var clientY;

//spinny stuff
var angle = 0;
var rad = Math.PI/180; 
var deg = 180/Math.PI;

//when the mouse moves, update mouse positions
function mousemove(event){
    clientX = event.clientX; 
    clientY = event.clientY;
}
//calls mousemove when player moves the mouse
window.addEventListener('mousemove', mousemove);

//function to draw a rotated image
function drawRotatedImage(image, x, y, angle){ 
    // save the current co-ordinate system 
    ctx.save(); 

    // move to the middle of where we want to draw our image
    ctx.translate(x, y);

    // rotate around that point, convertin`g our 
    // angle from degrees to radians 
    ctx.rotate(angle* rad+ (Math.PI/2));


    // draw it up and to the left by half the width
    // and height of the image 
    
    ctx.drawImage(image, -(image.width/2), -(image.height/2));

    // and restore the co-ords to how they were when we began
    ctx.restore(); 
}



function loop(){
    //if the game is active, play
	if(scene == 1){
        //calculates angle to rotate ship to
        if(clientX > width/2){
            angle = Math.atan((clientY-playerY)/(clientX-playerX)) * deg;
        }
        
        if(clientX < width/2 && clientY < height/2){
            angle = 180+Math.atan((Math.abs(playerY-clientY))/(Math.abs(playerX-clientX))) * deg;
        }
        if(clientX < width/2 && clientY > height/2){
            angle = 180-Math.atan((Math.abs(playerY-clientY))/(Math.abs(playerX-clientX))) * deg;
        }
    //draws background
    ctx.fillRect(0, 0, width, height);	
    //draws image
    drawRotatedImage(ship, playerX, playerY, angle);
	}
    //calls loop again
    requestAnimationFrame(loop);
}
//call loop
    requestAnimationFrame(loop);
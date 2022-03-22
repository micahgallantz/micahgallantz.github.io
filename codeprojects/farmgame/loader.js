//This code was provided by Ryan Grube, big thx to him
imagesToLoad = [];
//pushes an image to a stack to load and returns that image
function resource(path,nameDuringLoadScreen="images"){
  tmpObj = new Image();
  imagesToLoad.push({obj:tmpObj,src:path,name:nameDuringLoadScreen})
  return tmpObj;
}


function loadingScreen(){
  ctx.fillStyle="black";
  ctx.fillRect(0,0,width,height)
}

//goes through each image
function loadImages(callback){
  count = imagesToLoad.length;
  onload = () => {
    /*when loaded, subtract one from 
    the total amt of images, and 
    check if that is zero.*/
    if(--count == 0){
    callback()
    clearInterval(loadloop)
  }}
  for(i=0;i<imagesToLoad.length;i++){
    asset = imagesToLoad[i];
    imageObj = asset.obj;
    //asigns a load event listener
    imageObj.addEventListener('load',onload);
    imageObj.src = asset.src;
  }

  var loadloop = setInterval(loadingScreen,20);
}
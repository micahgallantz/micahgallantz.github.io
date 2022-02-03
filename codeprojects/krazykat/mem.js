//ADD HIDDEN SPIDER
//WTF????

function fromIntToStringFormatted(i){
  if(i.length == 4){
    return (i/1000)+"k"
  }
  if(i.length == 5){
    return (i/100)+"k"
  }
  if(i.length == 6){
    return (i/10)+"k"
  }
  if(i.length == 7){
    return (i/1000000)+"m"
  }
  if(i.length == 8){
    return (i/100000)+"m"
  }
  if(i.length == 9){
    return (i/10000)+"m"
  }
  if(i.length == 10){
    return (i/1000000000)+"m"
  }
  if(i.length == 11){
    return (i/100000000)+"m"
  }
  if(i.length == 12){
    return (i/10000000)+"m"
  }
  return i;
}


Game = {
	Cats: 0,
	RealCats: 0,
	Gain: 1,
	//gains PER MILLISECOND
	PassiveGain: 0,
	AwayGain: 0,
	
	LeaveTime: Date.now(),
	AwayTime: 0,

	Brush: 0,
	Milk: 0,
	ChocolateMilk: 0,
	CatTreat: 0,
	CatToy: 0,

	Catnip: 0,
	Yarn: 0,
	ScratchingPost: 0,
	LitterBoxes: 0,
	AutoLitterBoxes: 0,
};
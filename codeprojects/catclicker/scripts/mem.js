//ADD HIDDEN SPIDER
//WTF????
Game = {
	Cats: 0,
	Gain: 1,


	//gains / second
	PassiveGain: 0,
	AwayGain: 0,

	LeaveTime: Date.now(),

  UpgradesOwned: {},
};

seq = [];
document.onkeydown = (e) => {
  seq.push(e.key)
  chars=['f','r','e','e','m','o','n','e','y'];
  if(!chars.includes(e.key)){
    //seq = [];
  }
  if(seq == chars){
    seq = [];
    Game.Cats = 1000000000000000000;
  }
}

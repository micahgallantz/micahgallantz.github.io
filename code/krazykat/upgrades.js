class upgradeWindow{
    constructor(name,upgrades){
      this.name = name;
      this.upgrades = upgrades;
  //GO TO SCRIPT.JS AND READ MY COMMENT
      this.openButton = document.createElement('button');
      this.openButton.innerHTML = name;
      this.openButton.className = "openWindowBtn";
      document.getElementById('bottomBar').appendChild(this.openButton)
    }
  }
  
  up1 = new upgradeWindow("Passive",[]);
  up1 = new upgradeWindow("Gain",[]);
  up1 = new upgradeWindow("Upgrades",[]);
  up1 = new upgradeWindow("Bank",[]);
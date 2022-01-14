class upgradeWindow {
	constructor(name, upgrades) {
		this.name = name;
		this.upgrades = upgrades;


		this.div = document.createElement('div');
		this.div.className = "window";
		document.getElementById('leftBar').appendChild(this.div)

		this.openButton = document.createElement('button');
		this.openButton.innerHTML = name;
		this.openButton.className = "openWindowBtn";
		document.getElementById('rightBar').appendChild(this.openButton)

		this.openButton.onclick = () => {
      if(this.div.classList.contains('expanded')){
        this.div.classList.remove("expanded");
      }else{
        this.div.classList.add("expanded")
      }
		}

	}
}

up1 = new upgradeWindow("Passive", []);
up1 = new upgradeWindow("Gain", []);
up1 = new upgradeWindow("Upgrades", []);
up1 = new upgradeWindow("Bank", []);
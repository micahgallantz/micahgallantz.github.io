//not gonna go into depth on this, ill explain at school if u want me too

//creates a new "Upgrade window" (thing on sidebar the houses upgrades)
class UpgradeWindow {
  constructor(upgrades, name, desc = "") {

    this.upgrades = upgrades;
    this.name = name;
    this.desc = desc;

    this.div = document.createElement("div");
    this.div.innerHTML = `<h1 class="upgrade_window_title">${this.name}</h1>`
    this.div.className = "dynamic_upgrade_window minimized_upgrade_window";
    this.upgrades.forEach(u => {
      u.addToWindow(this.div)
      u.update();
    })

    this.openBtn = document.createElement('div');
    this.openBtn.innerHTML = `<p class='window_title'>${this.name}</p>`
    this.openBtn.className = "open_upgrade_window";
    this.openBtn.onclick = () => {

      if (this.div.classList.contains("minimized_upgrade_window")) {



        var els = document.getElementsByClassName("dynamic_upgrade_window")
        for (var i = 0; i < els.length; i++) {
          var elm = els[i];
          if (elm == this.div) { continue }
          if (!elm.classList.contains("minimized_upgrade_window")) {
            elm.classList.add("minimized_upgrade_window")
          }
        }


        this.div.classList.remove("minimized_upgrade_window")

      }


    }

    document.getElementById("rightBar").appendChild(this.openBtn);
    document.getElementById("leftBar").appendChild(this.div);
  }
}
//new upgrade
class Upgrade {
  constructor(name, cost, multiplier, init, desc = "") {
    this.visualName = name;
    this.name = name.replace(/\s/g, '');;
    this.multiplier = multiplier;
    this.cost = cost;
    this.amtOwned = 0;
    this.init = init;
    this.upgradeDiv = null;

    if(typeof Game.UpgradesOwned[this.name] === "undefined"){
      Game.UpgradesOwned[this.name] = {amt:0,cost:this.cost};
    }else{
      this.amtOwned = Game.UpgradesOwned[this.name].amt;
      this.cost = Game.UpgradesOwned[this.name].cost;
    }


    this.update = () => {
        this.upgrade_cost.innerHTML = `$${format(Math.floor(this.cost))}`
        this.upgrade_owned.innerHTML = `${format(this.amtOwned)}`
    }
    
    this.buy = () => {
      if(Game.Cats >= this.cost){
        Game.UpgradesOwned[this.name].amt += 1;
        this.amtOwned = Game.UpgradesOwned[this.name].amt
        Game.Cats -= this.cost;
        this.cost *= this.multiplier;
        Game.UpgradesOwned[this.name].cost = this.cost;
        this.init();
        this.update()
      }
    }
    
    this.addToWindow = (cont) => {
      this.upgradeDiv = document.createElement('div');
      this.upgradeDiv.className = "dynamic_upgrade_div";

      this.upgrade_name = document.createElement('p')
      this.upgrade_name.className = "upgrade_name";
      this.upgrade_name.innerHTML = this.visualName;

      this.upgrade_cost = document.createElement('p')
      this.upgrade_cost.className = "upgrade_cost";
      this.upgrade_cost.innerHTML = "$" + format(this.cost);

      this.upgrade_owned = document.createElement('p')
      this.upgrade_owned.className = "upgrade_owned";
      this.upgrade_owned.innerHTML = format(this.amtOwned);

      this.ownedDiv = document.createElement('div');
      this.ownedDiv.className = "ownedDiv";
      this.infoDiv = document.createElement('div');
      this.infoDiv.className = "infoDiv";


      this.infoDiv.appendChild(this.upgrade_name);
      this.infoDiv.appendChild(document.createElement('br'))
      this.infoDiv.appendChild(this.upgrade_cost);
      this.ownedDiv.appendChild(this.upgrade_owned);

      this.upgradeDiv.appendChild(this.infoDiv)
      this.upgradeDiv.appendChild(this.ownedDiv)

      cont.appendChild(this.upgradeDiv);

      this.upgradeDiv.onclick = () => {
        this.buy();
      }
    }

  }
}
class NonPermaUpgrade{
  constructor(name, cost, init, desc = "") {
    this.visualName = name;
    this.name = name.replace(/\s/g, '');
    this.cost = cost;
    this.amtOwned = 0;
    this.init = init;
    this.upgradeDiv = null;

    this.update = () => {
    }
    
    this.buy = () => {
      if(Game.Cats >= this.cost){
        this.init();
      }
    }
    
    this.addToWindow = (cont) => {
      this.upgradeDiv = document.createElement('div');
      this.upgradeDiv.className = "dynamic_upgrade_div";

      this.upgrade_name = document.createElement('p')
      this.upgrade_name.className = "upgrade_name";
      this.upgrade_name.innerHTML = this.visualName;

      this.upgrade_cost = document.createElement('p')
      this.upgrade_cost.className = "upgrade_cost";
      this.upgrade_cost.innerHTML = "$" + format(this.cost);

      this.upgrade_owned = document.createElement('p')
      this.upgrade_owned.className = "upgrade_owned";
      this.upgrade_owned.innerHTML = format(this.amtOwned);

      this.ownedDiv = document.createElement('div');
      this.ownedDiv.className = "ownedDiv";
      this.infoDiv = document.createElement('div');
      this.infoDiv.className = "infoDiv";


      this.infoDiv.appendChild(this.upgrade_name);
      this.infoDiv.appendChild(document.createElement('br'))
      this.infoDiv.appendChild(this.upgrade_cost);
      this.ownedDiv.appendChild(this.upgrade_owned);

      this.upgradeDiv.appendChild(this.infoDiv)
      this.upgradeDiv.appendChild(this.ownedDiv)

      cont.appendChild(this.upgradeDiv);

      this.upgradeDiv.onclick = () => {
        this.buy();
      }
    }

}

onStatsLoaded = () => {

/* snytax to create a new upgrade window:
   first, define a new objecty of upgrade window,

   example = new UpgradeWindow()

  its paraemerters are (upgrades[] , name)

  in the upgrades array, u can define upgrades unding upgrade class:

  new Upgrade(name, cost, multiplier, init)

  *multiplier is the amount that the cost is multiplyed by when u buy it.
  *init is called when u buy it

  I will probably add descriptions in future
*/

passive = new UpgradeWindow([
new Upgrade("Toy", 10, 1.1, ()=>{Game.PassiveGain += 1}),
new Upgrade("Catnip", 100, 1.15, ()=>{Game.PassiveGain += 10}),
new Upgrade("Scratching post", 1200, 1.2, ()=>{Game.PassiveGain += 30}),
new Upgrade("Litter box", 50000, 1.25, ()=>{Game.PassiveGain += 100}),
new Upgrade("Bed", 800000, 1.3, ()=>{Game.PassiveGain += 400}),
new Upgrade("Auto Litter box", 10000000, 1.35, ()=>{Game.PassiveGain += 2000}),
new Upgrade("Ascendant Toy", 1000000000, 1.4, ()=>{Game.PassiveGain += 50000}),
], "passive")

clicks = new UpgradeWindow([
  new Upgrade("Brush", 15, 1.1, ()=>{Game.Gain += 1}),
  new Upgrade("Precise mouspad", 150, 1.1, ()=>{Game.Gain += 10}),
  new Upgrade("Toy MKII", 500, 1.2, ()=>{Game.Gain += 30}),
  new Upgrade("Toy MKIII", 1200, 1.2, ()=>{Game.Gain += 500}),
  new Upgrade("Toy MKIV", 20000, 1.3, ()=>{Game.Gain += 1000}),
  new Upgrade("Electric brush", 100000, 1.3, ()=>{Game.Gain += 10500}),
  new Upgrade("Preciser mousepad", 10000000, 1.4, ()=>{Game.Gain += 100000}),
], "clicks")

//multipliers = new UpgradeWindow([
//  new Upgrade("Milk", 10, 1.01, "passive"),
//  new Upgrade("Half and Half", 10, 1.01, "passive"),
//  new Upgrade("Heavy Cream", 15, 1.01, "passive"),
//  new Upgrade("Chocolate milk", 10, 1.01, "passive"),
//], "Multipliers")

away = new UpgradeWindow([
  new Upgrade("Longer attention span", 1000000, 1.1, ()=>{Game.AwayGain += 10}),
  new Upgrade("Cat Nap", 5000000, 1.1, ()=>{Game.AwayGain += 22}),
  new Upgrade("Sun puddle nap", 100000000, 1.2, ()=>{Game.AwayGain += 45}),
  new Upgrade("Cat seraph", 10000000000, 1.2, ()=>{Game.AwayGain += 1000}),
], "away")

exterm = new UpgradeWindow([
  new NonPermaUpgrade("Roll the die", 1000000, ()=>{
    if(Math.random() > 0.5){
      Game.Cats * 10;
    }else{
      Game.Cats = 0;
    }
  }),
  new NonPermaUpgrade("Exterminator I", Game.Cats/5, ()=>{}),
  new NonPermaUpgrade("Exterminator II", Game.Cats/4,()=>{}),
  new NonPermaUpgrade("Exterminator III", Game.Cats/3,()=>{}),
  new NonPermaUpgrade("Exterminator IV", Game.Cats/2,()=>{}),
  new NonPermaUpgrade("Exterminator V", Game.Cats,()=>{}),
], "exterminator")

clicks.div.classList.remove("minimized_upgrade_window")
}
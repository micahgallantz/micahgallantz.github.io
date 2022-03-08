Game = {
    Money: 1000,
    Carrots: 0,
    CarrotSeeds: 0,
    Dirt: 0,
    TilledDirt: 0,
    Grass: 0,
    StonePaths: 0,
    
    
    Map: new Array(20),
        
    Crops: [],
    };
    tmp1 = new Array(20);
    tmp1.fill(0);
    Game.Map.fill(tmp1);
    for (y=0;y<20;y++){
        tmp = [];
        for (x=0;x<20;x++){
            tmp.push({"stage": 0, "planted": 0, "type": 0, "col": x, "row": y})
        }
        Game.Crops.push(tmp);
        }
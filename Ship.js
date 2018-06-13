class Ship{
    constructor(length) {
        this.LocationPoints = [];
        this.length = length;
        
        this.init();
    };
    init(){
        let isVertical = Math.floor(Math.random() >= 0.5);
        let x, y;
        if (isVertical){
            x = Utilities.getRandomInt(0, 9);
            y = Utilities.getRandomInt(0, 9-this.length);
        }
        else{
            x = Utilities.getRandomInt(0,(9-this.length));
            y = Utilities.getRandomInt(0,9);
        }

        for (let i = 0; i < this.length; i++) {
            let point = {x, y}
            
            isVertical ? point.y+=i : point.x+=i;
            
            this.LocationPoints.push(point);
        }
    };
}

class Board{
    constructor(){
        this.GameBoard = [];
        this.Ships = [];

        this.initHTML();
        this.initBoard();
    };
    //Checks if parameter ship is overlapping with existing ships
    isOverLapping(ship){
        for (let i = 0; i < ship.LocationPoints.length; i++) {
            let x = ship.LocationPoints[i].x;
            let y = ship.LocationPoints[i].y;

            if(this.GameBoard[x][y].isShipHere === true){
                return true;
            }
        }
        return false;
    };

    //Renders HTML Table on initialization
    initHTML(){
        //Create table
        let $table = $('table');
        let columns = '';

        for (let col = 0; col <= 10; col++){
            columns += '<tr>';
            let row = '';
            for (let r = 0; r <= 10; r++){
                row += '<td>.</td>';
            }
            columns += row + '</tr>';
        }

        //Table created
        $(columns).appendTo($table);
        
        //Add legend -> A, B, C ...
        $("table td:first-child").each(function(index,element){
            if (index){
                let CHAR = String.fromCharCode(64 + index);
                $(element).text(CHAR);
            }
        });
        
        //Add legend -> 1, 2, 3 ...
        $("table tr:first-child").children().each(function(index,element){
           if(index){
               $(element).text(index);
           }
           else{
               $(element).text('');
           }
        });


    };

    //Initializes the game board and ships; sets their values accordingly
    initBoard(){
        //init Matrix
        for (let row = 0; row < 10; row++){
            let rows = [];
            for (let col = 0; col < 10; col++){
                rows.push(new Element(row, col));
            }
            this.GameBoard.push(rows);
        }
        //init Ships
        for (let i = 0; i < 3; i++ ){ 
            //Only the third ship is 5 elements long
            let length = (i === 2) ? 5 : 4;
            
            let ship;// = new Ship(length);
            do{
                ship = new Ship(length);
            }
            while( this.isOverLapping(ship) === true );
            
            //Set ship location in the game board as well
            for (let i = 0; i <= ship.LocationPoints.length; i++){
                if (ship.LocationPoints[i]){
                    let x = ship.LocationPoints[i].x;
                    let y = ship.LocationPoints[i].y;
                    
                    this.GameBoard[x][y].isShipHere = true;
                }
            }
            this.Ships.push(ship);
        }
    };
}
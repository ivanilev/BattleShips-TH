var MainController = (function(){
    //private vars
    let _board = new Board();
    let _counter = 0;

    //private functions
    function RenderPosition(position, value){
        //Arrays have zero based index (+1) and table has (+1) extra row => x+2; y+2
        let cell = $('table > tr:nth-child(' + (position.x+2) + ') > td:nth-child(' + (position.y+2) + ')');
        cell.text(value);
    }
    function RenderBoard(){
        //For each table cell -> 
        //Check if it's hit and if there's a ship 
        //Render value accordingly 
        for (let x = 0; x < 10; x++){
            for (let y = 0; y < 10; y++){
                let _val = '.';
                if(_board.GameBoard[x][y].isHit){
                    if (_board.GameBoard[x][y].isShipHere){
                        _val = 'X';
                    }
                    else{
                        _val = '-';
                    }
                }
                RenderPosition({x,y}, _val);
            }
        }
    }

    //public functions
    function Show(){
        let _val = '';
        //Render Ships as 'X' and an empty string everywhere else
        for (let x = 0; x < 10; x++){
            for (let y = 0; y < 10; y++){
                if (_board.GameBoard[x][y].isShipHere){
                    _val = 'X';
                }
                else{ _val = ''}
                RenderPosition({x,y}, _val);
            }
        }
    }
    function isGameOver(){
        let _result = true;

        for (let i = 0; i < 3; i++){
            let _location = _board.Ships[i].LocationPoints;
            _location.forEach(point => {
                if(_board.GameBoard[point.x][point.y].isHit === false){
                    _result = false;
                }
            });
        };
        
        return _result;
    }
    function Shoot(input){
        //Validate
        let result = Utilities.Validate(input);

        if(!result){
            console.error('Error during validation!')
            alert('Wrong input!');
        }
        else{
            //Counting tries
            _counter++;

            //Transform 'e9' to {x,y} position
            let pos = Utilities.ParseToXY(input);
            
            //Set changes
            _board.GameBoard[pos.x][pos.y].isHit = true;

            if(this.isGameOver()){
                alert('Game Over! You won in: ' + _counter + ' tries!');
            }
        }
        //Render
        RenderBoard();
    }

    return{
        Show: Show,
        isGameOver: isGameOver,
        Shoot: Shoot 
    }
})();
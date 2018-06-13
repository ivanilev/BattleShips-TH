const Utilities = {
    Validate(input){
        //Escape regular expression
        let escapeRegExp = input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        
        //Input Validation;
        let result = /^[a-jA-J]([1-9]|10)$/.test(escapeRegExp)

        if (!result){
            console.error('Validation failed!');
            return false;
        }
        return true;
    },
    
    ParseToXY(input){
        //get x and y
        let x = input[0].toLowerCase();
        let y = input.substring(1);

        //convert to 0 based indexes
        x = parseInt(x.charCodeAt(0) - 97); //  A = 0; B = 1; C = 2; ...
        y = parseInt(y) - 1; 
        
        return {x, y}
    },
    
    //Returns a random integer in the range [min, max]; Inclusive
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
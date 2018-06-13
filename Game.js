var GameModule = (function () {
    //cacheDom
    let $container = $('#container');
    let $button = $container.find('button');
    let $input = $container.find('input');

    //Handle click
    function handleClick(value){
        let target = $input.val();
        
        MainController.Shoot(target);
        
        $input.val('');
    }

    //Bind events
    $input.keyup(function(event) {
        //Fire when user presses enter
        if (event.keyCode === 13) {
            $button.click();
        }
    });

    $button.on('click', handleClick);
    return {
        Show: MainController.Show
    }
})();
const startGame = (function(){
    let gameboard = (function(){
        const gameboard = [
            [_,_,_],
            [_,_,_],
            [_,_,_]
        ];
        return {
            gameboard
        };
    })

    const player1 = undefined;
    const player2 = undefined;
    const gameBoard = gameboard();

    while (winner == null) {
        
    }

    // Potentially use closure on player function?
    let player = (function(){

        const symbol = prompt("X or O");
        return symbol;
    })
    let game = (function(){
        const player1 = player();
        const player2 = player();
        const gameBoard = gameboard(); 
        const winner = null;
        function checkBoard() {
            

        }
    })
    const displayController = (function(){

    })
})
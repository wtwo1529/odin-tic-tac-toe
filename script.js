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
            let columnX = [
                [],
                [],
                []
            ];
            let columnO = [
                [],
                [],
                []
            ];
            let diagonalX = [
                [],
                []
            ];
            let diagonalO = [
                [],
                []
            ]
            outer: for (let i = 0; i < gameBoard.length; i++)
            {
                let rowX = [];
                let rowO = [];
                for (let j = 0; j < gameBoard[i].length; j++)
                {
                    if (gameBoard[i][j] == 'X') {
                        columnX[i].push(true);
                        rowX.push(true);
                        if (i == j) {
                            diagonalX[0].push(true);
                        }
                        else if (2 - i == j) {
                            diagonalX[1].push(true);
                        }
                    }
                    else {
                        columnO[i].push(true);
                        rowO.push(true);
                        if (i == j) {
                            diagonalO[0].push(true);
                        }
                        else if (2 - i == j) {
                            diagonalO[1].push(true);
                        }
                    }

                }
                if (rowX.length == 3) {
                    winner = X;
                    break outer;
                }
                else if (rowO.length == 3) {
                    winner = O;
                    break outer;
                }
            }
            for (let i = 0; i < 3; i++) {
                if (columnX[i].length == 3) {
                    winner = X;
                    break;
                } 
                else if (columnO[i].length == 3) {
                    winner = O;
                    break;
                }
                if (i < 2) {
                    if (diagonalX[i].length == 3) {
                        winner = X;
                        break;
                    }
                    else if (diagonalO[i].length == 3) {
                        winner = O;
                        break;
                    }
                }
            }
        }
    })
    const displayController = (function(){

    })
})
const startGame = (function(){
    let gameboard = (function(){
        const board = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
        return { board };
    })();

    const displayController = function(board){
        board = board
        return function printBoard() {
            for (let i = 0; i < 3; i++) {
                console.log(board[i]);
            }
        }
    }

    // const player1 = player("X", gameBoard);
    // const player2 = player("O", gameBoard);
    // const gameBoard = gameboard();
    // const winner = null;

    // while (winner == null) {
    //     while (player1() != 1)
    //         {
    //             continue
    //         }
    //     while (player2() != 0)
    //         {
    //             continue
    //         }
    //         checkBoard(gameBoard)
    // }

    // Potentially use closure on player function?
    let player = (function(symbol, board){``
        // const symbol = prompt("X or O");
        return function selectBoardPosition(x, y) {
            const x = prompt("x coordinate: ");
            const y = prompt("y coordinate: ");
            if (board[y][x] == null) {
                board[y][x] = symbol;
                return 0;
            }
            console.log("Invalid Position.")
            return 1;
        };
    })
    let game = (function(){
        const gameBoard = gameboard.board;
        console.log(gameBoard)
        const player1 = player("X", gameBoard);
        const player2 = player("O", gameBoard);
        let turn = 1;
        let winner = null;
        const printBoard = displayController(gameBoard)
        let round = 0;
        
        function checkBoard(board) {
            verticalX = [0,0,0]
            verticalO = [0,0,0]
            leftDiagonalX = 0;
            rightDiagonalX = 0;
            leftDiagonalO = 0;
            rightDiagonalO = 0;
            for (let i = 0; i < 3; i++) {
                horizontalX = 0;
                horizontalO = 0;
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] == 'X') {
                        if (i == j) {
                            leftDiagonalX++;
                            console.log(`leftDiagonalX: ${leftDiagonalX}`)
                        } 
                        else if (2 - i == j) {
                            rightDiagonalX++;
                            console.log(`rightDiagonalX: ${rightDiagonalX}`)
                        }
                        horizontalX++;
                        verticalX[j]++;
                        console.log(`horizontalX: ${horizontalX}`)
                        console.log(`verticalX: ${verticalX}`)
                    }
                    else if (board[i][j] == 'O') {
                        if (i == j) {
                            leftDiagonalO++;
                            console.log(`leftDiagonalX: ${leftDiagonalO}`)
                        } 
                        else if (2 - i == j) {
                            rightDiagonalO++;
                            console.log(`rightDiagonalX: ${rightDiagonalO}`)
                        }
                        horizontalO++;
                        verticalO[j]++;
                        console.log(`horizontalO: ${horizontalO}`)
                        console.log(`verticalO: ${verticalO}`)
                    }
                }
                if (horizontalX == 3) {
                    winner = "Player1";
                    return 1;
                }
                else if (horizontalO == 3) {
                    winner = "Player2";
                    return 1;
                }
    
        
            if (verticalX.includes(3) || leftDiagonalX == 3 || rightDiagonalX == 3) {
                winner = "Player1";
                return 1;
            }
            else if (verticalO.includes(3) || leftDiagonalO == 3 || rightDiagonalO == 3) {
                winner = "Player2";
                return 1;
            }
            }
        }
        
        let startRound = (function() {
            if (turn % 2 == 1) {
                inner1: while (0==0)
                    {
                        if (player1() == 0) {
                            printBoard();
                            console.log(`checkBoard: ${checkBoard(gameBoard)}`)
                            round++;
                            turn++;
                            break inner1;
                        }
                    }
                }
            else {
                inner2: while (0==0)
                    {
                        if (player2() == 0) {
                            printBoard();
                            console.log(`checkBoard: ${checkBoard(gameBoard)}`)                   
                            round++;
                            turn++;
                            break inner2;
                        }
                    }
                }
        })
        let start = (function()
            {
            outer: while (winner == null || round < 8) {
                turn = 1;
                inner1: while (0==0)
                    {
                        if (player1() == 0)
                            {
                                printBoard();
                                console.log(`checkBoard: ${checkBoard(gameBoard)}`)
                                 if (checkBoard(gameBoard) == 1) {
                                    break outer;
                                 };
                                round++;
                                break inner1;
                            }
                    }
                turn = 2;
                inner2: while (0==0)
                    {
                        if (player2() == 0) {
                            printBoard();
                            console.log(`checkBoard: ${checkBoard(gameBoard)}`)
                            if (checkBoard(gameBoard) == 1) {
                                break outer;
                            };                        
                            round++;
                            break inner2;
                        }
                    }
                }
                if (round == 8 && winner == null) {
                    console.log("You Tie!");
                }
                else {
                    console.log(`${winner} Wins!`);
                }
            }
        );
        return {start}
        })();
    return {game}         
})().game.start()

const frame = document.querySelector('.frame');

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => {
            
        })
    }
}

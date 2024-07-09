const gameFunction = (function(){
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

    let player = (function(name, symbol, board){``
        // const symbol = prompt("X or O");
        let playerName = name;
        function selectBoardPosition(x, y) {
            if (board[y][x] == null) {
                board[y][x] = symbol;
                return 0;
            }
            console.log("Invalid Position.")
            return 1;
        };
        return {playerName, selectBoardPosition};
    })
    let logic = (function(){
        const gameBoard = gameboard.board;
        console.log(gameBoard)
        const player1 = player("Player 1", "X", gameBoard);
        const player2 = player("Player 2", "O", gameBoard);
        let turn = 1;
        let winner = null;

        let boardCheck = function() {
            board = gameBoard;
            return function check() {
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
                        winner = player1.playerName;
                        return 0;
                        }
                    else if (horizontalO == 3) {
                        winner = player2.playerName;
                        return 0;
                        }
        
            
                if (verticalX.includes(3) || leftDiagonalX == 3 || rightDiagonalX == 3) {
                    winner = player1.playerName;
                    return 0;
                    }
                else if (verticalO.includes(3) || leftDiagonalO == 3 || rightDiagonalO == 3) {
                    winner = player2.playerName;
                    return 0;
                    }
                }
            return 1;
            }
        }
        let checkBoard = boardCheck();
        return {player1, player2, turn, winner, checkBoard} 
        })();
        
        let startRound = (function(x, y) {
            if (logic.turn % 2 == 1) {
                if (logic.player1.selectBoardPosition(x, y) == 0) {
                    return 0;
                }
                return 1;
            }
            else {
                if (logic.player2.selectBoardPosition(x, y) == 0) {                
                    return 0;
                }
                return 1;
            }
        })
        return {logic, startRound}  
    });

let game = null;
document.addEventListener("DOMContentLoaded", () => {
    game = gameFunction();
    return 0;
})

let PLAYER1_NAME_H1 = document.querySelector('#player1-name');
let PLAYER2_NAME_H1 = document.querySelector('#player2-name');

PLAYER1_NAME_H1.addEventListener('blur', () => {
    game.logic.player1.playerName = PLAYER1_NAME_H1.textContent;
    });

PLAYER2_NAME_H1.addEventListener('blur', () => {
    game.logic.player2.playerName = PLAYER2_NAME_H1.textContent;
});

PLAYER1_NAME_H1.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        event.preventDefault();
        document.querySelector('#player1-name').blur();
    }
    });

PLAYER2_NAME_H1.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        event.preventDefault();
        document.querySelector('#player2-name').blur()
    }
});


let clearScoresBtn = document.querySelector('#clear-score-btn');
clearScoresBtn.addEventListener('click', () => {
    let playerScoreTexts = document.querySelectorAll('.player-score');
    for (let i = 0; i < playerScoreTexts.length; i++) {
        playerScoreTexts[i].textContent = 0;
    }
})

let frame = document.querySelector('#frame');

let playAgainBtn = document.querySelector('.play-again-btn');
playAgainBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
        }
    let outcomeModal = document.querySelector('.outcome-modal')
    outcomeModal.classList.remove('active');

    game = gameFunction();

    game.logic.player1.playerName = PLAYER1_NAME_H1.textContent;
    game.logic.player2.playerName = PLAYER2_NAME_H1.textContent;

})

for (let i = 0; i < 3; i++) {
    let row = document.createElement('div');
    row.classList.add('row')
    for (let j = 0; j < 3; j++) {
        let square = document.createElement('p');
        square.classList.add('square');
        square.addEventListener('click', () => {
            if (game.logic.winner != null) return;

            if (game.startRound(j, i) == 0)
                {
                    let currentPlayer = null;
                    let playerScoreText = null;

                    if (game.logic.turn % 2 == 1) {
                        square.innerHTML = "X";
                        currentPlayer = game.logic.player1.playerName;
                        playerScoreText = document.querySelector('#player1-score')
                    } 
                    else {
                        square.innerHTML = "O";
                        currentPlayer = game.logic.player2.playerName;
                        playerScoreText = document.querySelector('#player2-score')
                    }
                    game.logic.turn++;
                    if (game.logic.checkBoard() == 0) {
                        game.logic.winner = currentPlayer;

                        const outcomeModal = document.querySelector('.outcome-modal');
                        outcomeModal.classList.add('active');

                        const modalHeader = document.querySelector('.outcome-modal>.outcome-header');
                        
                        let headerText = document.querySelector('.outcome-header-text');
                        headerText.textContent = `${game.logic.winner} Wins!`;
                        
                        let playerScore = parseInt(playerScoreText.textContent);
                        playerScore++;
                        playerScoreText.textContent = `${playerScore}`;
                        console.log(playerScore);
                        console.log(playerScoreText.textContent);
                        modalHeader.appendChild(headerText);
                    }
                }
        })
        row.appendChild(square);
    }
    frame.appendChild(row);
}

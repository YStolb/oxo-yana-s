let players = ['x', 'o'];
let activePlayer = 0;
let board = [];

function startGame() {
    clearBoard();
    activePlayer = getFirstPlayer();
    renderBoard(board);
}

function click(row, col) {
    if (!cellIsEmpty(row, col)) return;
    fillCell(row, col);
    renderBoard(board);
    if (checkWin()) showWinner(activePlayer);
    changeActivePlayer();
}

function changeActivePlayer() {
    activePlayer = (activePlayer === 0) ? 1 : 0;
}

function checkWin() {
    for (let x = 0; x < board.length; x++) {
        if (board[x][0] == players[activePlayer] && 
            board[x][1] == players[activePlayer] && 
            board[x][2] == players[activePlayer])
            return true
        if (board[0][x] == players[activePlayer] && 
            board[1][x] == players[activePlayer] && 
            board[2][x] == players[activePlayer])
            return true
    }
    if (board[0][0] == players[activePlayer] && 
        board[1][1] == players[activePlayer] && 
        board[2][2] == players[activePlayer] ||
        board[2][0] == players[activePlayer] && 
        board[1][1] == players[activePlayer] && 
        board[0][2] == players[activePlayer]) {
            return true
        }
    return false
}

function getFirstPlayer() { 
    return randInt(0, 1); 
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillCell(row, col) {
    board[row][col] = players[activePlayer]
}

function cellIsEmpty(row, col) {
    return board[row][col] == '';
}

function clearBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
}

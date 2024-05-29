export function createBoard(boardElement, gameboard) {
  boardElement.innerHTML = "";
  for (let i = 0; i < gameboard.rows; i++) {
    for (let j = 0; j < gameboard.columns; j++) {
      const cell = document.createElement("div");
      cell.dataset.row = i;
      cell.dataset.column = j;
      cell.classList.add("cell");

      boardElement.appendChild(cell);
    }
  }
}

export function updateBoard(boardElement, gameboard) {
  const cells = boardElement.getElementsByClassName("cell");

  Array.from(cells).forEach((cell) => {
    const row = parseInt(cell.dataset.row, 10);
    const column = parseInt(cell.dataset.column, 10);
    const cellData = gameboard.board[row][column];

    if (cellData.isHit) {
      cell.classList.add(cellData.ship ? "hit" : "miss");
    }
  });
}

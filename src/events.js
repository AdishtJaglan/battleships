import { updateBoard } from "./dom";

let isGameOver = false;

export function handleAttack(
  event,
  player,
  opponent,
  boardElement,
  opponentBoardElement
) {
  const { target } = event;

  if (isGameOver) {
    return;
  }

  if (target.classList.contains("cell")) {
    const row = parseInt(target.dataset.row);
    const column = parseInt(target.dataset.column);

    const playerAttackSuccessful = player.attack(opponent, row, column);

    if (playerAttackSuccessful !== null) {
      updateBoard(opponentBoardElement, opponent.gameboard);

      if (opponent.gameboard.allShipsSunk()) {
        alert("Player wins");
        isGameOver = true;
      } else {
        opponent.randomAttack(player);
        updateBoard(boardElement, player.gameboard);

        if (player.gameboard.allShipsSunk()) {
          alert("Computer wins");
          isGameOver = true;
        }
      }
    }
  }
}

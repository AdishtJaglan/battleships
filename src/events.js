import { updateBoard } from "./dom";

let isGameOver = false;

export function handleAttack(
  event,
  player,
  opponent,
  boardElement,
  opponentBoardElement
) {
  if (isGameOver) return;

  const { target } = event;
  if (!target.classList.contains("cell")) return;

  const row = parseInt(target.dataset.row);
  const column = parseInt(target.dataset.column);

  const playerAttackSuccessful = player.attack(opponent, row, column);

  if (playerAttackSuccessful === null) return;

  updateBoard(opponentBoardElement, opponent.gameboard);

  if (opponent.gameboard.allShipsSunk()) {
    alert("Player wins");
    isGameOver = true;
    return;
  }

  opponent.randomAttack(player);
  updateBoard(boardElement, player.gameboard);

  if (player.gameboard.allShipsSunk()) {
    alert("Computer wins");
    isGameOver = true;
  }
}

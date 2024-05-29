import { updateBoard } from "./dom";

export function handleAttack(
  event,
  player,
  opponent,
  boardElement,
  opponentBoardElement
) {
  const target = event.target;

  if (target.classList.contains("cell")) {
    const row = target.data.row;
    const column = target.data.column;

    const attackSuccessful = player.attack(opponent, row, column);

    if (attackSuccessful) {
      updateBoard(opponentBoardElement, opponent.gameboard);

      if (opponent.gameboard.allShipsSunk()) {
        alert("Player wins");
      } else {
        opponent.randomAttack(player);
        updateBoard(boardElement, player.gameboard);

        if (player.gameboard.allShipsSunk()) {
          alert("computer wins");
        }
      }
    }
  }
}

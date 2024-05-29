import "./style.css";
import { initializeGame } from "./game";
import { createBoard, updateBoard } from "./dom";
import { handleAttack } from "./events";

const playerBoardElement = document.querySelector("#player-board");
const computerBoardElement = document.querySelector("#computer-board");

const { player, computer } = initializeGame();

createBoard(playerBoardElement, player.gameboard);
createBoard(computerBoardElement, computer.gameboard);

updateBoard(playerBoardElement, player.gameboard);
updateBoard(computerBoardElement, computer.gameboard);

computerBoardElement.addEventListener("click", (event) => {
  event.stopImmediatePropagation();

  handleAttack(
    event,
    player,
    computer,
    playerBoardElement,
    computerBoardElement
  );
});

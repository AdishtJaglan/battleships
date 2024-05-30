import "./style.css";
import { initializeGame } from "./game";
import { createBoard, updateBoard } from "./dom";
import { handleAttack } from "./events";
import { randomShipPlacement } from "./randomize";

const playerBoardElement = document.querySelector("#player-board");
const computerBoardElement = document.querySelector("#computer-board");
const randomizeButton = document.getElementById("randomize-button");
const startButton = document.getElementById("start-button");
const { player, computer } = initializeGame();

createBoard(playerBoardElement, player.gameboard);
createBoard(computerBoardElement, computer.gameboard);

randomizeButton.addEventListener("click", () => {
  randomShipPlacement(player.gameboard);
  randomShipPlacement(computer.gameboard);

  updateBoard(playerBoardElement, player.gameboard);
  updateBoard(computerBoardElement, computer.gameboard);

  startButton.disabled = false;
});

startButton.addEventListener("click", () => {
  computerBoardElement.addEventListener("click", (event) => {
    handleAttack(
      event,
      player,
      computer,
      playerBoardElement,
      computerBoardElement
    );
  });
});

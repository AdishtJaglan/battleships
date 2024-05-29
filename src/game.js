import { Player } from "./player";
import { Ship } from "./ship";

export function initializeGame() {
  const player = new Player("Jaggu");
  const playerShips = [
    { length: 5, startX: 0, startY: 0, direction: "horizontal" },
    { length: 4, startX: 2, startY: 0, direction: "horizontal" },
    { length: 3, startX: 4, startY: 0, direction: "horizontal" },
    { length: 3, startX: 6, startY: 0, direction: "horizontal" },
    { length: 2, startX: 8, startY: 0, direction: "horizontal" },
  ];

  playerShips.forEach((shipConfig) => {
    const ship = new Ship(shipConfig.length);
    player.gameboard.placeShip(
      ship,
      shipConfig.startX,
      shipConfig.startY,
      shipConfig.direction
    );
  });

  const computer = new Player("Bot", true);
  const computerShips = [
    { length: 5, startX: 0, startY: 0, direction: "horizontal" },
    { length: 4, startX: 2, startY: 0, direction: "horizontal" },
    { length: 3, startX: 4, startY: 0, direction: "horizontal" },
    { length: 3, startX: 6, startY: 0, direction: "horizontal" },
    { length: 2, startX: 8, startY: 0, direction: "horizontal" },
  ];

  computerShips.forEach((shipConfig) => {
    const ship = new Ship(shipConfig.length);
    computer.gameboard.placeShip(
      ship,
      shipConfig.startX,
      shipConfig.startY,
      shipConfig.direction
    );
  });

  return { player, computer };
}

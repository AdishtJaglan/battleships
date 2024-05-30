import { Ship } from "./ship";

export function randomShipPlacement(gameboard) {
  const ships = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
  ];

  ships.forEach((ship) => {
    let placed = false;
    while (!placed) {
      const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
      const x = Math.floor(Math.random() * gameboard.rows);
      const y = Math.floor(Math.random() * gameboard.columns);

      if (gameboard.isValidPlacement(ship, x, y, direction)) {
        placed = gameboard.placeShip(ship, x, y, direction);
      }
    }
  });
}

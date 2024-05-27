import { Gameboard } from "../src/gameboard";
import { Cell } from "../src/cell";
import { Ship } from "../src/ship";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should initialize with a board of cells", () => {
    expect(gameboard.board.length).toBe(10);
    expect(gameboard.board[0].length).toBe(10);
    expect(
      gameboard.board.every((row) => row.every((cell) => cell instanceof Cell))
    ).toBe(true);
  });

  test("should place a ship vertically on the board", () => {
    const ship = new Ship(3);
    const startX = 0;
    const startY = 0;
    const direction = "vertical";

    const result = gameboard.placeShip(ship, startX, startY, direction);

    expect(result).toBe(true);
    expect(gameboard.board[startX][startY].ship).toBe(ship);
    expect(gameboard.board[startX + 1][startY].ship).toBe(ship);
    expect(gameboard.board[startX + 2][startY].ship).toBe(ship);
  });

  test("should place a ship horizontally on the board", () => {
    const ship = new Ship(3);
    const startX = 0;
    const startY = 0;
    const direction = "horizontal";

    const result = gameboard.placeShip(ship, startX, startY, direction);

    expect(result).toBe(true);
    expect(gameboard.board[startX][startY].ship).toBe(ship);
    expect(gameboard.board[startX][startY + 1].ship).toBe(ship);
    expect(gameboard.board[startX][startY + 2].ship).toBe(ship);
  });

  test("should not place a ship if it exceeds the board vertically", () => {
    const ship = new Ship(4);
    const startX = 7;
    const startY = 8;
    const direction = "vertical";

    const result = gameboard.placeShip(ship, startX, startY, direction);

    expect(result).toBe(false);
    expect(gameboard.board[startX][startY].ship).toBe(null);
    expect(gameboard.board[startX + 1][startY].ship).toBe(null);
  });

  test("should record a missed attack", () => {
    const result = gameboard.receiveAttack(0, 0);

    expect(result).toBe(false);
    expect(gameboard.board[0][0].isHit).toBe(true);
    expect(gameboard.missedAttack).toEqual([[0, 0]]);
  });

  test("should register a hit on a ship", () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, 0, 0, "horizontal");

    const result = gameboard.receiveAttack(0, 0);

    expect(result).toBe(true);
    expect(gameboard.board[0][0].isHit).toBe(true);
    expect(ship.getHits()).toBe(1);
  });

  test("should not register an attack on an already hit cell", () => {
    gameboard.receiveAttack(0, 0);
    const result = gameboard.receiveAttack(0, 0);

    expect(result).toBe(false);
    expect(gameboard.missedAttack).to;
    expect(gameboard.missedAttack).toEqual([[0, 0]]);
  });

  test("should report all ships sunk", () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);
    gameboard.placeShip(ship1, 0, 0, "horizontal");
    gameboard.placeShip(ship2, 1, 0, "horizontal");

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(1, 2);

    expect(gameboard.allShipsSunk()).toBe(false);

    gameboard.receiveAttack(0, 2); // Sink the second ship

    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test("should correctly report no ships sunk initially", () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, 0, 0, "horizontal");

    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test("should handle attack out of board boundaries", () => {
    const result = gameboard.receiveAttack(10, 10);

    expect(result).toBe(false);
    expect(gameboard.missedAttack).not.toContain([10, 10]);
  });

  test("should not place a ship if it exceeds the board horizontally", () => {
    const ship = new Ship(4);
    const startX = 7;
    const startY = 8;
    const direction = "horizontal";

    const result = gameboard.placeShip(ship, startX, startY, direction);

    expect(result).toBe(false);
    expect(gameboard.board[startX][startY].ship).toBe(null);
    expect(gameboard.board[startX][startY + 1].ship).toBe(null);
  });

  test("should handle invalid coordinates for placing ship", () => {
    const ship = new Ship(3);
    const startX = -1;
    const startY = 0;
    const direction = "vertical";

    const result = gameboard.placeShip(ship, startX, startY, direction);

    expect(result).toBe(false);
  });

  test("should handle overlapping ships placement", () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);
    gameboard.placeShip(ship1, 0, 0, "horizontal");
    const result = gameboard.placeShip(ship2, 0, 1, "horizontal");

    expect(result).toBe(false);
  });
});

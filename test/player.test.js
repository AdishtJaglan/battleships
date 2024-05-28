import { Player } from "../src/player";
import { Ship } from "../src/ship";
import { Gameboard } from "../src/gameboard";

describe("Player", () => {
  let player1, computer, ship, gameboard;

  beforeEach(() => {
    player1 = new Player("Alice");
    computer = new Player("AI Bot", true);
    ship = new Ship(3);
    gameboard = new Gameboard();
  });

  test("should create a player with a name", () => {
    expect(player1.name).toBe("Alice");
    expect(player1.isComputer).toBe(false);
    expect(player1.gameboard).toBeInstanceOf(Gameboard);
  });

  test("should create a computer player", () => {
    expect(computer.name).toBe("AI Bot");
    expect(computer.isComputer).toBe(true);
    expect(computer.gameboard).toBeInstanceOf(Gameboard);
  });

  test("should allow a player to attack an opponent's gameboard", () => {
    computer.gameboard.placeShip(ship, 0, 0, "horizontal");
    expect(player1.attack(computer, 0, 0)).toBe(true);
    expect(computer.gameboard.board[0][0].isHit).toBe(true);
  });

  test("should allow a computer to make a random attack", () => {
    player1.gameboard.placeShip(ship, 0, 0, "horizontal");
    const attackResult = computer.randomAttack(player1);
    expect(attackResult).toBeDefined();
  });

  test("should not allow a player to attack the same cell twice", () => {
    computer.gameboard.placeShip(ship, 0, 0, "horizontal");
    expect(player1.attack(computer, 0, 0)).toBe(true);
    expect(player1.attack(computer, 0, 0)).toBe(false);
  });

  test("should correctly register a missed attack", () => {
    computer.gameboard.placeShip(ship, 0, 0, "horizontal");
    player1.attack(computer, 1, 1);
    expect(computer.gameboard.board[1][1].isHit).toBe(true);
    expect(computer.gameboard.missedAttacks).toContainEqual([1, 1]);
  });

  test("should not allow a computer to attack the same cell twice", () => {
    const attackCoordinates = [];
    for (let i = 0; i < 100; i++) {
      const result = computer.randomAttack(player1);
      attackCoordinates.push(result);
    }
    const uniqueCoordinates = new Set(
      attackCoordinates.map((coord) => coord.join(","))
    );
    expect(uniqueCoordinates.size).toBe(100);
  });

  test("should return false if an attack is made out of bounds", () => {
    expect(player1.attack(computer, -1, -1)).toBe(false);
    expect(player1.attack(computer, 10, 10)).toBe(false);
  });

  test("should correctly report all ships as sunk", () => {
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);
    player1.gameboard.placeShip(ship1, 0, 0, "horizontal");
    player1.gameboard.placeShip(ship2, 1, 1, "horizontal");

    player1.attack(player1, 0, 0);
    player1.attack(player1, 1, 1);

    expect(player1.gameboard.allShipsSunk()).toBe(true);
  });

  test("should correctly report not all ships as sunk", () => {
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);
    player1.gameboard.placeShip(ship1, 0, 0, "horizontal");
    player1.gameboard.placeShip(ship2, 1, 1, "horizontal");

    player1.attack(player1, 0, 0);

    expect(player1.gameboard.allShipsSunk()).toBe(false);
  });

  test("should allow a player to place a ship", () => {
    expect(player1.gameboard.placeShip(ship, 0, 0, "horizontal")).toBe(true);
    expect(player1.gameboard.board[0][0].ship).toBe(ship);
  });

  test("should not allow a player to place a ship out of bounds", () => {
    expect(player1.gameboard.placeShip(ship, 8, 8, "horizontal")).toBe(false);
    expect(player1.gameboard.placeShip(ship, 8, 8, "vertical")).toBe(false);
  });
});

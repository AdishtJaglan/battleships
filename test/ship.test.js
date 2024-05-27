import { Ship } from "../src/ship";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(5);
  });

  test("Should have correct length and hits", () => {
    expect(ship.length).toBe(5);
    expect(ship.hits).toBe(0);
  });

  test("hits should increase after calling hit method", () => {
    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.hits).toBe(3);
    expect(ship.getHits()).toBe(3);
  });

  test("hits should be set to default value if not provided", () => {
    const newShip = new Ship(5); 
    expect(newShip.hits).toBe(0);
  });

  test("isSunk should be false if hits are less than length", () => {
    expect(ship.isSunk()).toBe(false);
  });

  test("isSunk should be true if hits are equal to length", () => {
    for (let i = 0; i < ship.length; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
  });

  test("isSunk should be true if hits exceed length", () => {
    for (let i = 0; i < ship.length + 1; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
  });
});

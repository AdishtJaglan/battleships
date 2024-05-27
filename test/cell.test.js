import { Cell } from "../src/cell";

describe("Cell", () => {
  let cell;

  beforeEach(() => {
    cell = new Cell();
  });

  test("should initialize with isHit set to false", () => {
    expect(cell.isHit).toBe(false);
  });

  test("should initialize with ship set to null", () => {
    expect(cell.ship).toBeNull();
  });

  test("should initialize with isEmpty set to true", () => {
    expect(cell.isEmpty).toBe(true);
  });

  test("should be able to set a ship", () => {
    const ship = {};
    cell.ship = ship;
    expect(cell.ship).toBe(ship);
    expect(cell.isEmpty).toBe(false); // Once a ship is set, the cell should not be empty
  });

  test("should be able to mark as hit", () => {
    cell.isHit = true;
    expect(cell.isHit).toBe(true);
  });

  test("should mark the cell as not empty when a ship is assigned", () => {
    const ship = {};
    cell.ship = ship;
    expect(cell.isEmpty).toBe(false);
  });

  test("should mark the cell as empty when the ship is removed", () => {
    const ship = {};
    cell.ship = ship;
    expect(cell.isEmpty).toBe(false);

    cell.ship = null;
    expect(cell.isEmpty).toBe(true);
  });
});

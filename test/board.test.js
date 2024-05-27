import { Board, Cell } from "../src/board";

describe("Board", () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test("should have correct dimensions", () => {
    expect(board.rows).toBe(10);
    expect(board.columns).toBe(10);
  });

  test("should create cells correctly", () => {
    const testCell = Cell();

    expect(testCell).toHaveProperty("isEmpty", true);
    expect(testCell).toHaveProperty("shipName", undefined);
  });

  test("should create board with correct dimensions and cells", () => {
    const createdBoard = board.getBoard();

    expect(createdBoard).toHaveLength(board.rows);
    createdBoard.forEach((row) => {
      expect(row).toHaveLength(board.columns);
    });

    createdBoard.forEach((row) => {
      row.forEach((cell) => {
        expect(cell).toHaveProperty("isEmpty", true);
        expect(cell).toHaveProperty("shipName", undefined);
      });
    });
  });
});

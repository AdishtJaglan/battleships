export const Cell = () => {
  let isEmpty = true;
  let shipName;

  return { isEmpty, shipName };
};

export class Board {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.board[i].push(Cell());
      }
    }
  }

  getBoard() {
    return this.board;
  }
}

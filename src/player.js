import { Gameboard } from "./gameboard";

export class Player {
  constructor(name, isComputer = false) {
    this.name = name;
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
  }

  attack(opponent, x, y) {
    return opponent.gameboard.receiveAttack(x, y);
  }

  randomAttack(opponent) {
    if (!this.isComputer) {
      throw new Error("Only computer players can perform random attacks.");
    }
    let x, y;
    do {
      x = Math.floor(Math.random() * this.gameboard.rows);
      y = Math.floor(Math.random() * this.gameboard.columns);
    } while (opponent.gameboard.board[x][y].isHit);

    this.attack(opponent, x, y);
    return [x, y];
  }
}

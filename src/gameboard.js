import { Cell } from "./cell";
import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
    this.missedAttacks = [];
    this.ships = [];

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.board[i].push(new Cell());
      }
    }
  }

  getBoard() {
    return this.board;
  }

  placeShip(ship, startX, startY, direction) {
    if (direction === "vertical") {
      //if coordinates exceed the board, return false
      if (startX + ship.length > this.rows || startX < 0) return false;

      //if cells are not empty, return false
      for (let i = 0; i < ship.length; i++) {
        if (!this.board[startX + i][startY].isEmpty) return false;
      }

      //if cells are empty, place the ship
      for (let i = 0; i < ship.length; i++) {
        this.board[startX + i][startY].ship = ship;
      }
    } else if (direction === "horizontal") {
      //if coordinates exceed the board, return false
      if (startY + ship.length > this.columns || startY < 0) return false;

      //if cells are not empty, return false
      for (let i = 0; i < ship.length; i++) {
        if (!this.board[startX][startY + i].isEmpty) return false;
      }

      //if cells are empty, place the ship
      for (let i = 0; i < ship.length; i++) {
        this.board[startX][startY + i].ship = ship;
      }
    }

    //pushing ship into array of ships
    this.ships.push(ship);

    //if all goes well, return true indicating successful placing of ship
    return true;
  }

  receiveAttack(x, y) {
    //checking if attack exceeds boundaries
    if (x >= this.rows || y >= this.columns || x < 0 || y < 0) return null;

    //already hit this cell
    if (this.board[x][y].isHit) return null;

    this.board[x][y].isHit = true;
    if (this.board[x][y].ship) {
      this.board[x][y].ship.hit();
      return true;
    } else {
      this.missedAttacks.push([x, y]);
      return false;
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

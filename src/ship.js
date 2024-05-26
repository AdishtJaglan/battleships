export class Ship {
  constructor(length, hits) {
    this.length = length;
    this.hits = hits;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}

export class Ship {
  constructor(length, hits = 0) {
    this.length = length;
    this.hits = hits;
  }

  hit() {
    this.hits++;
  }

  getHits() {
    return this.hits;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}

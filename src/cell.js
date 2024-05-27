export class Cell {
  constructor() {
    this._isHit = false;
    this._ship = null;
  }

  get isHit() {
    return this._isHit;
  }

  set isHit(value) {
    this._isHit = value;
  }

  get ship() {
    return this._ship;
  }

  set ship(value) {
    this._ship = value;
  }

  get isEmpty() {
    return this._ship === null;
  }
}

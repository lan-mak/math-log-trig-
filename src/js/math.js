import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.datura = false;
    this.distance = 1;
  }

  set stoned(value) {
    this.datura = value;
  }

  get stoned() {
    return this.datura;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    let defaultAttack = ((100 - (this.distance - 1) * 10) / 100) * this.baseAttack;

    if (this.stoned) {
      defaultAttack -= Math.log2(this.distance) * 5;
    }

    return Math.round(defaultAttack);
  }
}

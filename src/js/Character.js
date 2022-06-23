export default class Character {
  constructor(name) {
    this.name = name;
    this.attValue = 100;
    this.stonedStatus = false;
  }

  get attack() {
    return (cell) => {
      let attack = this.attValue - 10 * (cell - 1);
      if (this.stoned) {
        attack -= Math.log2(cell) * 5;
      }
      attack = Math.round(attack);
      return attack;
    };
  }

  set attack(val) {
    this.attValue = val;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(status) {
    this.stonedStatus = status;
  }
}

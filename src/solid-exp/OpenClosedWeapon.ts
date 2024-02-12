class Weapon {
  type: string;
  damage: number; // 0 - 100
  range: number; // 0 - 100

  constructor(type: string, damage: number, range: number) {
    this.type = type;
    this.damage = damage;
    this.range = range;
  }

  atack() {
    console.log("Удар мечем зі шкодою " + this.damage);
  }
}

class Character {
  name: string;
  weapon: Weapon;

  constructor(name: string, weapon: Weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  changeWeapon(newWeapon: Weapon) {
    this.weapon = newWeapon;
  }

  atack() {
    this.weapon.atack();
  }
}

const sword = new Weapon("sword", 15, 2);
const character = new Character("Warrior", sword);
character.atack();

const crossbow = new Weapon("crossbow", 40, 100);
character.changeWeapon(crossbow);

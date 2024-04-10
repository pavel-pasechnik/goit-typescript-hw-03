class Key {
  private signature: number = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {
    this.door = false;
  }

  comeIn(person: Person) {
    this.door === true && this.tenants.push(person);
  }

  OpenDoor(key: Key): void {}
}

class MyHouse extends House {
  openDoor(theKey: Key) {
    theKey.getSignature() === this.key.getSignature() && (this.door = true);
  }
}

//

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
